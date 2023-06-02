const db = require("../models");
// const { getPagingData, getPagination } = require("../utils/spdmain.util");
const Spdmain = db.spdmain;
const Spdpelaksanaan = db.spdpelaksanaan;
const Spdrealisasi = db.spdrealisasi;
const SpdmainJenisBiaya = db.spdmainJenisBiaya;
const Op = db.Sequelize.Op;

// Create and Save a new SPD pelaksanaan main
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }

  const spdpelaksanaanData = {
    n_spd_id: req.body.n_spd_id,
    n_realisasi_id: req.body.n_realisasi_id,
    d_pelaksanaan_tanggal: req.body.d_pelaksanaan_tanggal,
    c_pelaksanaan_aktifitas: req.body.c_pelaksanaan_aktifitas,
    c_pelaksanaan_keterangan: req.body.c_pelaksanaan_keterangan,
    c_pelaksanaan_attachment: req.body.c_pelaksanaan_attachment,
    n_spd_jenisbiaya_id: req.body.n_spd_jenisbiaya_id,
    n_pelaksanaan_nominal: req.body.n_pelaksanaan_nominal,
  };

  Spdpelaksanaan.create(spdpelaksanaanData)
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
          err.message || "Some error occurred while creating the SPD Pelaksanaan data.",
      };
      res.status(500).send(errorResponse);
    });
};

// Update a SPD pelaksanaan data by the id in the request
exports.update = (req, res) => {
  const spdpelaksanaanId = req.params.id;

  Spdpelaksanaan.update(req.body, {
    where: { n_pelaksanaan_id: spdpelaksanaanId },
  })
    .then((num) => {
      if (num == 1) {
        const successResponse = {
          status: true,
          message: "SPD Pelaksanaan data was updated succesfully !",
        };
        res.send(successResponse);
      } else {
        const errorResponse = {
          status: false,
          message: `Cannot update SPD Pelaksanaan data with id=${spdpelaksanaanId} !`,
        };
        res.send(errorResponse);
      }
    })
    .catch((err) => {
      const errorResponse = {
        status: false,
        message:
          err.message || `Cannot update SPD Pelaksanaan data with id=${spdpelaksanaanId} !`,
      };
      res.status(500).send(errorResponse);
    });
};

// Find/get paging SPD data main with an id
exports.findAllByParam = (req, res) => {
  const { n_realisasi_id, n_spd_id } = req.body;

  console.log("Test")

  Spdpelaksanaan.findAll({
    include: [
      { model: Spdrealisasi, as: "spd_realisasi" },
      { model: Spdmain, as: "spd_main" },
      { model: SpdmainJenisBiaya, as: "spd_main_jenisbiaya" },
    ],
    where: {
      [Op.or]: [
        n_realisasi_id ? { n_realisasi_id: n_realisasi_id } : null,
        n_spd_id ? { n_spd_id: n_spd_id } : null,
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
          err.message || "Some error occurred while retrieving SPD Pelaksanaan data.",
      };
      res.status(500).send(errorResponse);
    });
};

exports.findOne = (req, res) => {
    const spdpelaksanaanId = req.params.id;
  
    Spdpelaksanaan.findByPk(spdpelaksanaanId, {
      include: [
        { model: Spdrealisasi, as: "spd_realisasi" },
        { model: Spdmain, as: "spd_main" },
        { model: SpdmainJenisBiaya, as: "spd_main_jenisbiaya" },
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
            message: `Cannot find SPD Pelaksanaan data with id=${spdpelaksanaanId}.`,
          });
        }
      })
      .catch((err) => {
        const errorResponse = {
          status: false,
          message:
            err.message || "Some error occurred while retrieving SPD Pelaksanaan data.",
        };
        res.status(500).send(errorResponse);
      });
  };
