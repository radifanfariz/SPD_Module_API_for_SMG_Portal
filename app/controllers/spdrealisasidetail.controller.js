const db = require("../models");
// const { getPagingData, getPagination } = require("../utils/spdmain.util");
const Spdmain = db.spdmain;
const SpdrealisasiKetJenis = db.spdrealisasiKetJenis;
const Spdrealisasidetail = db.spdrealisasidetail;
const Op = db.Sequelize.Op;

// Create and Save a new SPD pelaksanaan main
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }

  const spdrealisasidetailData = {
    n_spd_id: req.body.n_spd_id,
    n_rdetail_uangsaku_total: req.body.n_rdetail_uangsaku_total,
    n_rdetail_biayapenginapan_total: req.body.n_rdetail_biayapenginapan_total,
    n_rdetail_biayatransport_total: req.body.n_rdetail_biayatransport_total,
    n_rdetail_biayalain_total: req.body.n_rdetail_biayalain_total,
    n_rdetail_totalrealisasi: req.body.n_rdetail_totalrealisasi,
    n_rdetail_uangmuka: req.body.n_rdetail_uangmuka,
    n_rdetail_selisih: req.body.n_rdetail_selisih,
    n_rket_id: req.body.n_rket_id,
  };

  Spdrealisasidetail.create(spdrealisasidetailData)
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
  const spdrealisasidetailId = req.params.id;

  Spdrealisasidetail.update(req.body, {
    where: { n_rdetail_id: spdrealisasidetailId },
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
          message: `Cannot update SPD Realisasi data with id=${spdrealisasidetailId} !`,
        };
        res.send(errorResponse);
      }
    })
    .catch((err) => {
      const errorResponse = {
        status: false,
        message:
          err.message || `Cannot update SPD Realisasi data with id=${spdrealisasidetailId} !`,
      };
      res.status(500).send(errorResponse);
    });
};

// Find/get paging SPD data main with an id
exports.findAllByParam = (req, res) => {
  const { n_spd_id } = req.body;

  Spdrealisasidetail.findAll({
    include: [
      { model: Spdmain, as: "spd_main" },
      { model: SpdrealisasiKetJenis, as: "spd_realisasi_ketjenis" },
    ],
    where: {
      [Op.or]: [
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
          err.message || "Some error occurred while retrieving SPD Realisasi data.",
      };
      res.status(500).send(errorResponse);
    });
};

exports.findOne = (req, res) => {
    const spdrealisasidetailId = req.params.id;
  
    Spdrealisasidetail.findByPk(spdrealisasidetailId, {
      include: [
        { model: Spdmain, as: "spd_main" },
        { model: SpdrealisasiKetJenis, as: "spd_realisasi_ketjenis" },
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
            message: `Cannot find SPD Realisasi data with id=${spdrealisasidetailId}.`,
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
