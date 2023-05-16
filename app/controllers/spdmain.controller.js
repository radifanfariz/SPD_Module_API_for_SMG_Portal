const db = require("../models");
const { getPagingData, getPagination } = require("../utils/spdmain.util");
const Spdmain = db.spdmain;
const Op = db.Sequelize.Op;

// Create and Save a new SPD data main
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }

  const spdmainData = {
    n_company_id: req.body.n_company_id,
    n_employee_id: req.body.n_employee_id,
    c_spd_hashid: req.body.c_spd_hashid,
    c_spd_businessunit: req.body.c_spd_businessunit,
    c_spd_nama: req.body.c_spd_nama,
    c_spd_nik: req.body.c_spd_nik,
    c_spd_unit: req.body.c_spd_unit,
    c_spd_costcenterkaryawan: req.body.c_spd_costcenterkaryawan,
    c_spd_jabatan: req.body.c_spd_jabatan,
    c_spd_nohp: req.body.c_spd_nohp,
    c_spd_pangkat: req.body.c_spd_pangkat,
    c_spd_grade: req.body.c_spd_grade,
    c_spd_tempattujuan: req.body.c_spd_tempatdiajukan,
    c_spd_costcenterbeban: req.body.c_spd_costcenterbeban,
    d_spd_tanggalberangkat: req.body.d_spd_tanggalberangkat,
    d_spd_tanggalkembali: req.body.d_spd_tanggalkembali,
    c_spd_tujuandinas: req.body.c_spd_tujuandinas,
    c_spd_keterangandinas: req.body.c_spd_keterangandinas,
    c_spd_akomodasi: req.body.c_spd_akomodasi,
    c_spd_keteranganakomodasi: req.body.c_spd_keteranganakomodasi,
    n_spd_uangmukajenis: req.body.n_spd_uangmukajenis,
    n_spd_uangsaku: req.body.n_spd_uangsaku,
    n_spd_uangpenginapan: req.body.n_spd_uangpenginapan,
    n_spd_biayatransport: req.body.n_spd_biayatransport,
    n_spd_biayalain: req.body.n_spd_biayalain,
    n_spd_totalbiaya: req.body.n_spd_totalbiaya,
    c_spd_banknama: req.body.c_spd_banknama,
    c_spd_banknorek: req.body.c_spd_banknorek,
    c_spd_bankatasnama: req.body.c_spd_bankatasnama,
    c_spd_atasan: req.body.c_spd_atasan,
    c_spd_tempatdiajukan: req.body.c_spd_tempatdiajukan,
  };

  Spdmain.create(spdmainData)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SPD data.",
      });
    });
};

// Retrieve all SPD main data for table from the database.
exports.findAllForTable = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  // { where: condition }
  Spdmain.findAll()
    .then((data) => {
      const spdDataForTable = data.map((item) => {
        return {
          n_spd_id: item.n_spd_id,
          c_spd_businessunit: item.c_spd_businessunit,
          c_spd_nama: item.c_spd_nama,
          c_spd_jenis: item.c_spd_jenis,
          c_spd_identifikasi: item.c_spd_identifikasi,
          d_spd_tanggalajukan: item.d_spd_tanggalajukan,
          c_spd_status: item.c_spd_status,
        };
      });
      const successResponse = {
        status: true,
        message: "Ok",
        totalItems: data.length,
        data: spdDataForTable,
      };
      res.send(successResponse);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving SPD data.",
      });
    });
};
// Retrieve all SPD main data for table from the database.
exports.findAllForTablePaging = (req, res) => {
  const { page, size } = req.query;
  const {
    n_company_id,
    n_employee_id,
    c_spd_nama,
    c_spd_identifikasi,
    d_spd_tanggalajukan,
    c_spd_jenis,
    c_spd_status,
  } = req.body;

  const { limit, offset } = getPagination(page, size);

  Spdmain.findAndCountAll({
    where: req.body ? {
      [Op.or]: [
        { n_company_id: n_company_id ? n_company_id : null },
        { n_employee_id: n_company_id ? n_employee_id : null },
        { c_spd_nama: { [Op.iLike]: c_spd_nama ? `%${c_spd_nama}%` : `` } },
        {
          c_spd_identifikasi: {
            [Op.iLike]: c_spd_identifikasi ? `%${c_spd_identifikasi}%` : ``,
          },
        },
        {
          d_spd_tanggalajukan: {
            [Op.gte]: d_spd_tanggalajukan
              ? new Date(`${d_spd_tanggalajukan}`)
              : null,
          },
        },
        { c_spd_jenis: { [Op.iLike]: c_spd_jenis ? `%${c_spd_jenis}%` : `` } },
        {
          c_spd_status: { [Op.iLike]: c_spd_status ? `%${c_spd_status}%` : `` },
        },
      ],
    } : null,
    limit: limit,
    offset: offset,
  })
    .then((data) => {
      const { totalItems, totalPages, currentPage, row } = getPagingData(
        data,
        page,
        limit
      );
      const rowDataFormatted = row.map((item) => {
        return {
          n_spd_id: item.n_spd_id,
          n_company_id: req.body.n_company_id,
          n_employee_id: req.body.n_employee_id,
          c_spd_hashid: req.body.c_spd_hashid,
          c_spd_businessunit: item.c_spd_businessunit,
          c_spd_nama: item.c_spd_nama,
          c_spd_jenis: item.c_spd_jenis,
          c_spd_identifikasi: item.c_spd_identifikasi,
          d_spd_tanggalajukan: item.d_spd_tanggalajukan,
          c_spd_status: item.c_spd_status,
        };
      });
      const successResponse = {
        status: true,
        message: "Ok",
        data: {
          totalItems: totalItems,
          totalItemPerPage: rowDataFormatted.length,
          totalPages: totalPages,
          currentPage: currentPage,
          row: rowDataFormatted,
        },
      };
      res.send(successResponse);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving SPD data.",
      });
    });
};
// Retrieve all SPD main data from the database.
exports.findAll = (req, res) => {
  Spdmain.findAll()
    .then((data) => {
      const successResponse = {
        status: true,
        message: "Ok",
        totalItems: data.length,
        data: data,
      };
      res.send(successResponse);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving SPD data.",
      });
    });
};

// Find/get paging SPD data main with an id
exports.findAllPaging = (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);
  const {
    n_company_id,
    n_employee_id,
    c_spd_nama,
    c_spd_identifikasi,
    d_spd_tanggalajukan,
    c_spd_jenis,
    c_spd_status,
  } = req.body;

  Spdmain.findAndCountAll({
    where: {
      [Op.or]: [
        { n_company_id: n_company_id ? n_company_id : null },
        { n_employee_id: n_company_id ? n_employee_id : null },
        { c_spd_nama: { [Op.iLike]: c_spd_nama ? `%${c_spd_nama}%` : `` } },
        {
          c_spd_identifikasi: {
            [Op.iLike]: c_spd_identifikasi ? `%${c_spd_identifikasi}%` : ``,
          },
        },
        {
          d_spd_tanggalajukan: {
            [Op.gte]: d_spd_tanggalajukan
              ? new Date(`${d_spd_tanggalajukan}`)
              : null,
          },
        },
        { c_spd_jenis: { [Op.iLike]: c_spd_jenis ? `%${c_spd_jenis}%` : `` } },
        {
          c_spd_status: { [Op.iLike]: c_spd_status ? `%${c_spd_status}%` : `` },
        },
      ],
    },
    limit: limit,
    offset: offset,
  })
    .then((data) => {
      const pagingData = getPagingData(data, page, limit);
      const successResponse = {
        status: true,
        message: "Ok",
        data: {
          totalItems: pagingData.totalItems,
          totalItemPerPage: pagingData.row.length,
          ...pagingData,
        },
      };
      res.send(successResponse);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving SPD main.",
      });
    });
};

// Find a single SPD data main with an id
exports.findOne = (req, res) => {
  const spd_id = req.params.id;

  Spdmain.findByPk(spd_id)
    .then((data) => {
      const successResponse = {
        status: true,
        message: "Ok",
        data: data,
      };
      if (data) {
        res.send(successResponse);
      } else {
        res.status(404).send({
          message: `Cannot find SPD data with spd_id=${spd_id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving SPD data with spd_id=${spd_id}.`,
      });
    });
};

// Update a SPD main data after created by the id in the request
exports.updateAfterCreated = (req, res) => {
  const spdId = req.params.id;
  const spdmainData = {
    c_spd_jenis: req.body.c_spd_jenis,
    c_spd_identifikasi: req.body.c_spd_identifikasi,
    d_spd_tanggalajuan: req.body.d_spd_tanggalajuan,
    c_spd_status: req.body.c_spd_status,
  };

  Spdmain.update(spdmainData, {
    where: { n_spd_id: spdId },
    // fields: ['c_spd_jenis','c_employee_identifikasi','d_spd_tanggalajuan','c_spd_status']
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "SPD data after created was updated succesfully !",
        });
      } else {
        res.send({
          message: `Cannot update SPD data after created with id=${spdId} !`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating SPD data after created with id=${spdId}`,
      });
    });
};
// Update a SPD main data by the id in the request
exports.update = (req, res) => {
  const spdId = req.params.id;

  Spdmain.update(req.body, {
    where: { n_spd_id: spdId },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "SPD data was updated succesfully !",
        });
      } else {
        res.send({
          message: `Cannot update SPD data with id=${spdId} !`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating SPD data with id=${spdId}`,
      });
    });
};

// Delete a SPD data main with the specified id in the request

exports.delete = (req, res) => {
  const spdId = req.params.id;

  Spdmain.destroy({
    where: { n_spd_id: spdId },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "SPD data was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete SPD data with id=${spdId} !`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete SPD data with id=${spdId}`,
      });
    });
};

// ------- not yet -----//
// Delete all SPD data main from the database.
exports.deleteAll = (req, res) => {};

// Find all published SPD data main
exports.findAllPublished = (req, res) => {};
