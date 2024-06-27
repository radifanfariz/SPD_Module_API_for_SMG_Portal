const db = require("../../models/spd");
// const { getPagingData, getPagination } = require("../utils/spdmain.util");
const Spdmain = db.spdmain;
const Spdpelaksanaan = db.spdpelaksanaan;
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
    d_pelaksanaan_tanggal: req.body.d_pelaksanaan_tanggal,
    c_pelaksanaan_aktifitas: req.body.c_pelaksanaan_aktifitas,
    c_pelaksanaan_keterangan: req.body.c_pelaksanaan_keterangan,
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
// Create and Save a new SPD pelaksanaan main
exports.bulkCreate = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }

  Spdpelaksanaan.bulkCreate(req.body)
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
  const { n_spd_id } = req.body;

  console.log("Test")

  Spdpelaksanaan.findAll({
    include: [
      { model: Spdmain, as: "spd_main" },
    ],
    where: {
      [Op.or]: [
        n_spd_id ? { n_spd_id: n_spd_id } : null,
      ],
    },
    order: [
      ["d_pelaksanaan_tanggal", "ASC"],
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
          err.message || "Some error occurred while retrieving SPD Pelaksanaan data.",
      };
      res.status(500).send(errorResponse);
    });
};

exports.findOne = (req, res) => {
    const spdpelaksanaanId = req.params.id;
  
    Spdpelaksanaan.findByPk(spdpelaksanaanId, {
      include: [
        { model: Spdmain, as: "spd_main" },
      ],
      order: [
        ["d_pelaksanaan_tanggal", "ASC"],
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

  exports.delete = (req, res) => {
    const spdId = req.params.id;
  
    Spdrealisasi.destroy({
      where: { n_spd_id: spdId },
    })
      .then((num) => {
        if (num === 1) {
          res.send({
            status: true,
            message: "SPD Pelaksanaan data was deleted successfully!",
          });
        } else {
          const errorResponse = {
            status: false,
            message: `Cannot delete SPD Pelaksanaan data with id=${spdId} !`,
          };
          res.send(errorResponse);
        }
      })
      .catch((err) => {
        const errorResponse = {
          status: false,
          message: err.message || `Cannot delete SPD Pelaksanaan data with id=${spdId} !`,
        };
        res.status(500).send(errorResponse);
      });
  };
