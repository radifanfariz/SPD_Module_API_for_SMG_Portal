const db = require("../../models/sfo");
const { getPagingData, getPagination } = require("../../utils/spdmain.util");
const SfoWeekly = db.sfoWeekly;
const SfoSu = db.sfoSu;

const sequalize = db.Sequelize;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }
  const sfoWeeklyReq = {
    n_su_id: req.body.n_su_id,
    d_period: req.body.d_period,
    n_monthlyBudget: req.body.n_monthlyBudget,
    n_w1: req.body.n_w1,
    n_w2: req.body.n_w2,
    n_w3: req.body.n_w3,
    n_w4: req.body.n_w4,
    n_totalBudget: req.body.n_totalBudget,
    n_achBudget: req.body.n_achBudget,
    c_cell_id: req.body.c_cell_id,
    n_created_by: req.body.n_created_by,
    n_updated_by: req.body.n_updated_by,
  };
  SfoWeekly.create(sfoWeeklyReq)
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

// Retrieve all SFO SU Fields data from the database.
exports.findAll = (req, res) => {
  SfoWeekly.findAll({
    include: [{ model: SfoSu, as: "sfo_su" }],
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

// Retrieve all SFO SU Fields data by param from the database.
exports.findAllByParam = (req, res) => {
  const { d_period } = req.body;
  SfoWeekly.findAll({
    include: [{ model: SfoSu, as: "sfo_su" }],
    where: {
      [Op.and]: [
        d_period ? { d_period: d_period } : null,
      ],
    },
  })
    .then((data) => {
      const successResponse = {
        status: true,
        message: "Ok",
        totalItems: data?.length,
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
