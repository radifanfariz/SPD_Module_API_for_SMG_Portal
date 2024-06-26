const db = require("../../models/spd");
// const { getPagingData, getPagination } = require("../utils/spdmain.util");
const Spdmain = db.spdmain;
const SpdrealisasiKetJenis = db.spdrealisasiKetJenis;
const Spdrealisasipersetujuan = db.spdrealisasipersetujuan;
const Op = db.Sequelize.Op;

// Create and Save a new SPD pelaksanaan main
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }

  const spdrealisasipersetujuanData = {
    n_spd_id: req.body.n_spd_id,
    n_rpersetujuan_uangsaku_total: req.body.n_rpersetujuan_uangsaku_total,
    n_rpersetujuan_biayapenginapan_total: req.body.n_rpersetujuan_biayapenginapan_total,
    n_rpersetujuan_biayatransport_total: req.body.n_rpersetujuan_biayatransport_total,
    n_rpersetujuan_biayalain_total: req.body.n_rpersetujuan_biayalain_total,
    n_rpersetujuan_totalrealisasi: req.body.n_rpersetujuan_totalrealisasi,
    n_rpersetujuan_uangmuka: req.body.n_rpersetujuan_uangmuka,
    n_rpersetujuan_selisih: req.body.n_rpersetujuan_selisih,
    n_rket_id: req.body.n_rket_id,
    c_rpersetujuan_norek: req.body.c_rpersetujuan_norek,
  };

  Spdrealisasipersetujuan.create(spdrealisasipersetujuanData)
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
  const spdrealisasipersetujuanId = req.params.id;

  Spdrealisasipersetujuan.update(req.body, {
    where: { n_rpersetujuan_id: spdrealisasipersetujuanId },
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
          message: `Cannot update SPD Realisasi data with id=${spdrealisasipersetujuanId} !`,
        };
        res.send(errorResponse);
      }
    })
    .catch((err) => {
      const errorResponse = {
        status: false,
        message:
          err.message || `Cannot update SPD Realisasi data with id=${spdrealisasipersetujuanId} !`,
      };
      res.status(500).send(errorResponse);
    });
};

// Find/get paging SPD data main with an id
exports.findAllByParam = (req, res) => {
  const { n_spd_id } = req.body;

  Spdrealisasipersetujuan.findAll({
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
    const spdrealisasipersetujuanId = req.params.id;
  
    Spdrealisasipersetujuan.findByPk(spdrealisasipersetujuanId, {
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
            message: `Cannot find SPD Realisasi data with id=${spdrealisasipersetujuanId}.`,
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
  
    Spdrealisasipersetujuan.destroy({
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
