const db = require("../models");
const { getPagingData, getPagination } = require("../utils/spdmain.util");
const Spdmain = db.spdmain;
const SpdmainAkomadasi = db.spdmainAkomodasi;
const SpdmainJenis = db.spdmainJenis;
const SpdmainStatus = db.spdmainStatus;
const SpdmainTransportasi = db.spdmainTransportasi;
const SpdmainTujuandinas = db.spdmainTujuandinas;
const SpdmainUangMuka = db.spdmainUangmuka;
// const SpdRealisasi = db.spdrealisasi;
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
    n_spd_company_id: req.body.n_spd_company_id,
    n_spd_hrisId: req.body.n_spd_hrisId,
    n_spd_userId: req.body.n_spd_userId,
    c_spd_hashid: req.body.c_spd_hashid,
    c_spd_nomorsurat: req.body.c_spd_nomorsurat,
    c_spd_companynama: req.body.c_spd_companynama,
    c_spd_nama: req.body.c_spd_nama,
    c_spd_nik: req.body.c_spd_nik,
    c_spd_unit: req.body.c_spd_unit,
    c_spd_costcenterkaryawan: req.body.c_spd_costcenterkaryawan,
    c_spd_jabatan: req.body.c_spd_jabatan,
    c_spd_nohp: req.body.c_spd_nohp,
    c_spd_pangkat: req.body.c_spd_pangkat,
    c_spd_grade: req.body.c_spd_grade,
    c_spd_tempattujuan: req.body.c_spd_tempatdiajukan,
    c_spd_costcenterpenanggung: req.body.c_spd_costcenterpenanggung,
    d_spd_tanggalberangkat: req.body.d_spd_tanggalberangkat,
    d_spd_tanggalkembali: req.body.d_spd_tanggalkembali,
    n_spd_tujuandinas_id: req.body.n_spd_tujuandinas_id,
    c_spd_keterangandinas: req.body.c_spd_keterangandinas,
    n_spd_transportasi_id: req.body.n_spd_transportasi_id,
    c_spd_keterangantransportasi: req.body.c_spd_keterangantransportasi,
    n_spd_akomodasi_id: req.body.n_spd_akomodasi_id,
    c_spd_keteranganakomodasi: req.body.c_spd_keteranganakomodasi,
    // n_spd_uangjenis: req.body.n_spd_uangjenis,
    n_spd_jenis_id: req.body.n_spd_jenis_id,
    d_spd_tanggalajukan: req.body.d_spd_tanggalajukan,
    n_spd_status_id: req.body.n_spd_status_id,
    n_spd_uangmuka_id: req.body.n_spd_uangmuka_id,
    n_spd_uangsaku: req.body.n_spd_uangsaku,
    n_spd_biayapenginapan: req.body.n_spd_biayapenginapan,
    n_spd_biayatransport: req.body.n_spd_biayatransport,
    n_spd_biayalain: req.body.n_spd_biayalain,
    n_spd_totalbiaya: req.body.n_spd_totalbiaya,
    c_spd_banknama: req.body.c_spd_banknama,
    c_spd_banknorek: req.body.c_spd_banknorek,
    c_spd_bankatasnama: req.body.c_spd_bankatasnama,
    c_spd_atasannama: req.body.c_spd_atasannama,
    n_spd_atasan_hrisId: req.body.n_spd_atasan_hrisId,
    n_spd_atasan_userId: req.body.n_spd_atasan_userId,
    c_spd_tempatdiajukan: req.body.c_spd_tempatdiajukan,
    // n_realisasi_id: req.body.n_realisasi_id,
  };

  Spdmain.create(spdmainData)
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
      const errorResponse = {
        status: false,
        message:
          err.message || "Some error occurred while creating the SPD data.",
      };
      res.status(500).send(errorResponse);
    });
};

// Retrieve all SPD main data for table from the database.
exports.findAllForTable = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  // { where: condition }
  Spdmain.findAll({
    include: [
      { model: SpdmainJenis, as: "spd_main_jenis" },
      { model: SpdmainStatus },
    ],
  })
    .then((data) => {
      const spdDataForTable = data.map((item) => {
        return {
          n_spd_id: item.n_spd_id,
          // n_realisasi_id: item.n_realisasi_id,
          n_spd_company_id: item.n_spd_company_id,
          n_spd_hrisId: item.n_spd_hrisId,
          n_spd_userId: item.n_spd_userId,
          c_spd_hashid: item.c_spd_hashid,
          c_spd_companynama: item.c_spd_companynama,
          c_spd_nama: item.c_spd_nama,
          n_spd_jenis_id: item.n_spd_jenis_id,
          c_spd_nomorsurat: item.c_spd_nomorsurat,
          d_spd_tanggalajukan: item.d_spd_tanggalajukan,
          n_spd_status_id: item.n_spd_status_id,
          c_spd_atasannama: item.c_spd_atasannama,
          n_spd_atasan_hrisId: item.n_spd_atasan_hrisId,
          n_spd_atasan_userId: item.n_spd_atasan_userId,
          spd_main_jenis: item.spd_main_jenis,
          spd_main_status: item.spd_main_status,
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
      const errorResponse = {
        status: false,
        message:
          err.message || "Some error occurred while retrieving SPD data.",
      };
      res.status(500).send(errorResponse);
    });
};
// Retrieve all SPD main data for table from the database.
exports.findAllForTablePaging = (req, res) => {
  const { page, size } = req.query;
  const {
    n_spd_company_id,
    n_spd_hrisId,
    n_spd_userId,
    c_spd_nama,
    c_spd_nomorsurat,
    d_spd_tanggalajukan,
    n_spd_jenis_id,
    n_spd_status_id,
    c_spd_atasannama,
  } = req.body;

  const { limit, offset } = getPagination(page, size);

  Spdmain.findAndCountAll({
    include: [
      { model: SpdmainJenis, as: "spd_main_jenis" },
      { model: SpdmainStatus },
    ],
    where: req.body
      ? {
          [Op.and]: [
            n_spd_company_id ? { n_spd_company_id: n_spd_company_id } : null,
            n_spd_hrisId ? { n_spd_hrisId: n_spd_hrisId } : null,
            n_spd_userId ? { n_spd_userId: n_spd_userId } : null,
            c_spd_atasannama
              ? { c_spd_atasannama: { [Op.iLike]: `%${c_spd_atasannama}%` } }
              : null,
            c_spd_nama
              ? { c_spd_nama: { [Op.iLike]: `%${c_spd_nama}%` } }
              : null,
            c_spd_nomorsurat
              ? {
                  c_spd_nomorsurat: {
                    [Op.iLike]: `%${c_spd_nomorsurat}%`,
                  },
                }
              : null,
            d_spd_tanggalajukan
              ? {
                  d_spd_tanggalajukan: {
                    [Op.gte]: d_spd_tanggalajukan,
                  },
                }
              : null,
            n_spd_jenis_id ? { n_spd_jenis_id: n_spd_jenis_id } : null,
            n_spd_status_id ? { n_spd_status_id: n_spd_status_id } : null,
          ],
        }
      : null,
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
          // n_realisasi_id: item.n_realisasi_id,
          n_spd_company_id: item.n_spd_company_id,
          n_spd_hrisId: item.n_spd_hrisId,
          n_spd_userId: item.n_spd_userId,
          c_spd_hashid: item.c_spd_hashid,
          c_spd_companynama: item.c_spd_companynama,
          c_spd_nama: item.c_spd_nama,
          n_spd_jenis_id: item.n_spd_jenis_id,
          c_spd_nomorsurat: item.c_spd_nomorsurat,
          d_spd_tanggalajukan: item.d_spd_tanggalajukan,
          n_spd_status_id: item.n_spd_status_id,
          c_spd_atasannama: item.c_spd_atasannama,
          n_spd_atasan_hrisId: item.n_spd_atasan_hrisId,
          n_spd_atasan_userId: item.n_spd_atasan_userId,
          spd_main_jenis: item.spd_main_jenis,
          spd_main_status: item.spd_main_status,
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
      const errorResponse = {
        status: false,
        message:
          err.message || "Some error occurred while retrieving SPD data.",
      };
      res.status(500).send(errorResponse);
    });
};
// Retrieve all SPD main data from the database.
exports.findAll = (req, res) => {
  Spdmain.findAll({
    include: [
      { model: SpdmainAkomadasi },
      { model: SpdmainJenis, as: "spd_main_jenis" },
      { model: SpdmainStatus },
      { model: SpdmainTransportasi },
      { model: SpdmainTujuandinas, as: "spd_main_tujuandinas" },
      { model: SpdmainUangMuka },
      // { model: SpdRealisasi, as: 'spd_realisasi' },
    ],
  })
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
      const errorResponse = {
        status: false,
        message:
          err.message || "Some error occurred while retrieving SPD data.",
      };
      res.status(500).send(errorResponse);
    });
};
// Retrieve all SPD main data by param from the database.
exports.findAllByParam = (req, res) => {
  const {
    n_spd_company_id,
    n_spd_hrisId,
    n_spd_userId,
    c_spd_nama,
    c_spd_nomorsurat,
    d_spd_tanggalajukan,
    n_spd_jenis_id,
    n_spd_status_id,
    c_spd_atasannama
  } = req.body;
  Spdmain.findAll({
    include: [
      { model: SpdmainAkomadasi },
      { model: SpdmainJenis, as: "spd_main_jenis" },
      { model: SpdmainStatus },
      { model: SpdmainTransportasi },
      { model: SpdmainTujuandinas, as: "spd_main_tujuandinas" },
      { model: SpdmainUangMuka },
      // { model: SpdRealisasi, as: 'spd_realisasi' },
    ],
    where: {
      [Op.and]: [
        n_spd_company_id ? { n_spd_company_id: n_spd_company_id } : null,
        n_spd_hrisId ? { n_spd_hrisId: n_spd_hrisId } : null,
        n_spd_userId ? { n_spd_userId: n_spd_userId } : null,
        c_spd_atasannama ? { c_spd_atasannama: { [Op.iLike]: `%${c_spd_atasannama}%` } } : null,
        c_spd_nama ? { c_spd_nama: { [Op.iLike]: `%${c_spd_nama}%` } } : null,
        c_spd_nomorsurat
          ? {
              c_spd_nomorsurat: {
                [Op.iLike]: `%${c_spd_nomorsurat}%`,
              },
            }
          : null,
        d_spd_tanggalajukan
          ? {
              d_spd_tanggalajukan: {
                [Op.gte]: d_spd_tanggalajukan,
              },
            }
          : null,
        n_spd_jenis_id ? { n_spd_jenis_id: n_spd_jenis_id } : null,
        n_spd_status_id ? { n_spd_status_id: n_spd_status_id } : null,
      ],
    },
  })
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
      const errorResponse = {
        status: false,
        message:
          err.message || "Some error occurred while retrieving SPD data.",
      };
      res.status(500).send(errorResponse);
    });
};
// Retrieve all SPD main data by param from the database.
exports.findOneByParam = (req, res) => {
  const {
    n_spd_company_id,
    n_spd_hrisId,
    n_spd_userId,
    c_spd_nama,
    c_spd_nomorsurat,
    d_spd_tanggalajukan,
    n_spd_jenis_id,
    n_spd_status_id,
    c_spd_atasannama
  } = req.body;
  Spdmain.findOne({
    include: [
      { model: SpdmainAkomadasi },
      { model: SpdmainJenis, as: "spd_main_jenis" },
      { model: SpdmainStatus },
      { model: SpdmainTransportasi },
      { model: SpdmainTujuandinas, as: "spd_main_tujuandinas" },
      { model: SpdmainUangMuka },
      // { model: SpdRealisasi, as: 'spd_realisasi' },
    ],
    where: {
      [Op.and]: [
        n_spd_company_id ? { n_spd_company_id: n_spd_company_id } : null,
        n_spd_hrisId ? { n_spd_hrisId: n_spd_hrisId } : null,
        n_spd_userId ? { n_spd_userId: n_spd_userId } : null,
        c_spd_atasannama ? { c_spd_atasannama: { [Op.iLike]: `%${c_spd_atasannama}%` } } : null,
        c_spd_nama ? { c_spd_nama: { [Op.iLike]: `%${c_spd_nama}%` } } : null,
        c_spd_nomorsurat
          ? {
              c_spd_nomorsurat: {
                [Op.iLike]: `%${c_spd_nomorsurat}%`,
              },
            }
          : null,
        d_spd_tanggalajukan
          ? {
              d_spd_tanggalajukan: {
                [Op.gte]: d_spd_tanggalajukan,
              },
            }
          : null,
        n_spd_jenis_id ? { n_spd_jenis_id: n_spd_jenis_id } : null,
        n_spd_status_id ? { n_spd_status_id: n_spd_status_id } : null,
      ],
    },
    order: [['n_spd_id', 'DESC']]
  })
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
      const errorResponse = {
        status: false,
        message:
          err.message || "Some error occurred while retrieving SPD data.",
      };
      res.status(500).send(errorResponse);
    });
};

// Find/get paging SPD data main with an id
exports.findAllPaging = (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);
  const {
    n_spd_company_id,
    n_spd_hrisId,
    n_spd_userId,
    c_spd_nama,
    c_spd_nomorsurat,
    d_spd_tanggalajukan,
    n_spd_jenis_id,
    n_spd_status_id,
    c_spd_atasannama
  } = req.body;

  Spdmain.findAndCountAll({
    include: [
      { model: SpdmainAkomadasi },
      { model: SpdmainJenis, as: "spd_main_jenis" },
      { model: SpdmainStatus },
      { model: SpdmainTransportasi },
      { model: SpdmainTujuandinas, as: "spd_main_tujuandinas" },
      { model: SpdmainUangMuka },
      // { model: SpdRealisasi, as: 'spd_realisasi' },
    ],
    where: {
      [Op.or]: [
        n_spd_company_id ? { n_spd_company_id: n_spd_company_id } : null,
        n_spd_hrisId ? { n_spd_hrisId: n_spd_hrisId } : null,
        n_spd_userId ? { n_spd_userId: n_spd_userId } : null,
        c_spd_atasannama ? { c_spd_atasannama: { [Op.iLike]: `%${c_spd_atasannama}%` } } : null,
        c_spd_nama ? { c_spd_nama: { [Op.iLike]: `%${c_spd_nama}%` } } : null,
        c_spd_nomorsurat
          ? {
              c_spd_nomorsurat: {
                [Op.iLike]: `%${c_spd_nomorsurat}%`,
              },
            }
          : null,
        d_spd_tanggalajukan
          ? {
              d_spd_tanggalajukan: {
                [Op.gte]: d_spd_tanggalajukan,
              },
            }
          : null,
        n_spd_jenis_id ? { n_spd_jenis_id: n_spd_jenis_id } : null,
        n_spd_status_id ? { n_spd_status_id: n_spd_status_id } : null,
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
      const errorResponse = {
        status: false,
        message:
          err.message || "Some error occurred while retrieving SPD data.",
      };
      res.status(500).send(errorResponse);
    });
};

// Find a single SPD data main with an id
exports.findOne = (req, res) => {
  const spd_id = req.params.id;

  Spdmain.findByPk(spd_id, {
    include: [
      { model: SpdmainAkomadasi },
      { model: SpdmainJenis, as: "spd_main_jenis" },
      { model: SpdmainStatus },
      { model: SpdmainTransportasi },
      { model: SpdmainTujuandinas, as: "spd_main_tujuandinas" },
      { model: SpdmainUangMuka },
      // { model: SpdRealisasi, as: 'spd_realisasi' },
    ],
  })
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
      const errorResponse = {
        status: false,
        message:
          err.message || "Some error occurred while retrieving SPD data.",
      };
      res.status(500).send(errorResponse);
    });
};





/*--------------------------------- considered deprecated---------------------------------*/
// Update a SPD main data after created by the id in the request
exports.updateAfterCreated = (req, res) => {
  const spdId = req.params.id;
  const spdmainData = {
    n_spd_jenis_id: req.body.n_spd_jenis_id,
    d_spd_tanggalajukan: req.body.d_spd_tanggalajukan,
    n_spd_status_id: req.body.n_spd_status_id,
  };

  Spdmain.update(spdmainData, {
    where: { n_spd_id: spdId },
  })
    .then((num) => {
      if (num == 1) {
        const successResponse = {
          status: true,
          message: "SPD data after created was updated succesfully !",
        };
        res.send(successResponse);
      } else {
        const errorResponse = {
          status: false,
          message: `Cannot update SPD data after created with id=${spdId} !`,
        };
        res.send(errorResponse);
      }
    })
    .catch((err) => {
      const errorResponse = {
        status: false,
        message:
          err.message ||
          `Cannot update SPD data after created with id=${spdId} !`,
      };
      res.status(500).send(errorResponse);
    });
};
/*----------------------------------------------------------------------------------------*/





// Update a SPD main data by the id in the request
exports.update = (req, res) => {
  const spdId = req.params.id;

  Spdmain.update(req.body, {
    where: { n_spd_id: spdId },
  })
    .then((num) => {
      if (num == 1) {
        const successResponse = {
          status: true,
          message: "SPD data was updated succesfully !",
        };
        res.send(successResponse);
      } else {
        const errorResponse = {
          status: false,
          message: `Cannot update SPD data with id=${spdId} !`,
        };
        res.send(errorResponse);
      }
    })
    .catch((err) => {
      const errorResponse = {
        status: false,
        message: err.message || `Cannot update SPD data with id=${spdId} !`,
      };
      res.status(500).send(errorResponse);
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
          status: true,
          message: "SPD data was deleted successfully!",
        });
      } else {
        const errorResponse = {
          status: false,
          message: `Cannot delete SPD data with id=${spdId} !`,
        };
        res.send(errorResponse);
      }
    })
    .catch((err) => {
      const errorResponse = {
        status: false,
        message: err.message || `Cannot delete SPD data with id=${spdId} !`,
      };
      res.status(500).send(errorResponse);
    });
};

// ------- not yet -----//
// Delete all SPD data main from the database.
exports.deleteAll = (req, res) => {};

// Find all published SPD data main
exports.findAllPublished = (req, res) => {};
