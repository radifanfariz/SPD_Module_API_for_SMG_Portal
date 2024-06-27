const db = require("../../models/spd");
// const { getPagingData, getPagination } = require("../utils/spdmain.util");
const Spdmain = db.spdmain;
const Spdrealisasi = db.spdrealisasi;
const Op = db.Sequelize.Op;

// Create and Save a new SPD pelaksanaan main
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }

  const spdrealisasiData = {
    n_spd_id: req.body.n_spd_id,
    n_realisasi_uangsaku: req.body.n_realisasi_uangsaku,
    c_realisasi_uangsaku_ket: req.body.c_realisasi_uangsaku_ket,
    n_realisasi_biayapenginapan: req.body.n_realisasi_biayapenginapan,
    c_realisasi_biayapenginapan_ket: req.body.c_realisasi_biayapenginapan_ket,
    n_realisasi_biayatransport: req.body.n_realisasi_biayatransport,
    c_realisasi_biayatransport_ket: req.body.c_realisasi_biayatransport_ket,
    n_realisasi_biayalain: req.body.n_realisasi_biayalain,
    c_realisasi_biayalain_ket: req.body.c_realisasi_biayalain_ket,
    d_realisasi_tanggal: req.body.d_realisasi_tanggal,
    n_realisasi_subtotal: req.body.n_realisasi_subtotal,
  };

  Spdrealisasi.create(spdrealisasiData)
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
          err.message || "Some error occurred while creating the SPD Realisasi data.",
      };
      res.status(500).send(errorResponse);
    });
};
// Create and Save a new SPD pelaksanaan main
exports.bulkCreate = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }

  Spdrealisasi.bulkCreate(req.body)
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
          err.message || "Some error occurred while creating the SPD Realisasi data.",
      };
      res.status(500).send(errorResponse);
    });
};

// Update a SPD pelaksanaan data by the id in the request
exports.update = (req, res) => {
  const spdrealisasiId = req.params.id;

  Spdrealisasi.update(req.body, {
    where: { n_realisasi_id: spdrealisasiId },
  })
    .then((num) => {
      if (num == 1) {
        const successResponse = {
          status: true,
          message: "SPD Realisasi data was updated succesfully !",
        };
        res.send(successResponse);
      } else {
        const errorResponse = {
          status: false,
          message: `Cannot update SPD Realisasi data with id=${spdrealisasiId} !`,
        };
        res.send(errorResponse);
      }
    })
    .catch((err) => {
      const errorResponse = {
        status: false,
        message:
          err.message || `Cannot update SPD Realisasi data with id=${spdrealisasiId} !`,
      };
      res.status(500).send(errorResponse);
    });
};

// Find/get paging SPD data main with an id
exports.findAllByParam = (req, res) => {
  const { n_spd_id } = req.body;

  Spdrealisasi.findAll({
    include: [
      { model: Spdmain, as: "spd_main" },
    ],
    where: {
      [Op.or]: [
        n_spd_id ? { n_spd_id: n_spd_id } : null,
      ],
    },
    order: [
      ["d_realisasi_tanggal", "ASC"],
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
          err.message || "Some error occurred while retrieving SPD Realisasi data.",
      };
      res.status(500).send(errorResponse);
    });
};

exports.findOne = (req, res) => {
    const spdrealisasiId = req.params.id;
  
    Spdrealisasi.findByPk(spdrealisasiId, {
      include: [
        { model: Spdmain, as: "spd_main" },
      ],
      order: [
        ["d_realisasi_tanggal", "ASC"],
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
            message: `Cannot find SPD Realisasi data with id=${spdrealisasiId}.`,
          });
        }
      })
      .catch((err) => {
        const errorResponse = {
          status: false,
          message:
            err.message || "Some error occurred while retrieving SPD Realisasi data.",
        };
        res.status(500).send(errorResponse);
      });
  };

  exports.delete = (req, res) => {
    const spdId = req.params.id;
  
    Spdrealisasi.destroy({
      where: { n_spd_id: spdId },
    })
      .then((num) => {
        if (num === 1) {
          res.send({
            status: true,
            message: "SPD Realisasi data was deleted successfully!",
          });
        } else {
          const errorResponse = {
            status: false,
            message: `Cannot delete SPD Realisasi data with id=${spdId} !`,
          };
          res.send(errorResponse);
        }
      })
      .catch((err) => {
        const errorResponse = {
          status: false,
          message: err.message || `Cannot delete SPD Realisasi data with id=${spdId} !`,
        };
        res.status(500).send(errorResponse);
      });
  };
