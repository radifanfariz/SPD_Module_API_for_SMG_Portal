const db = require("../../../models/sfo/pm-weekly");
const { getPagingData, getPagination } = require("../../../utils/spdmain.util");
const PmWeeklyOtomotif = db.pmWeeklyOtomotif;
const PmCommentsOtomotif = db.pmCommentsOtomotif;

const sequalize = db.Sequelize;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }
  const pmCommentsOtomotifReq = {
    c_weekly_reference: req.body.c_weekly_reference,
    c_weekly_reference_id: req.body.c_weekly_reference_id,
    c_weekly_cell_id: req.body.c_weekly_cell_id,
    c_comments: req.body.c_comments,
    n_weekly_id: req.body.n_weekly_id,
    n_updated_by: req.body.n_updated_by,
  };
  PmCommentsOtomotif.create(pmCommentsOtomotifReq)
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
  PmCommentsOtomotif.findAll({
    include: [{ model: PmWeeklyOtomotif, as: "pm_weekly" }],
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
  const { n_weekly_id, c_weekly_reference, c_weekly_cell_id } = req.body;
  PmCommentsOtomotif.findAll({
    include: [{ model: PmWeeklyOtomotif, as: "pm_weekly" }],
    where: {
      [Op.or]: [
        {
          [Op.and]: [
            c_weekly_reference ? { c_weekly_reference: { [Op.iLike]: `%${c_weekly_reference}%` } } : null,
            c_weekly_cell_id ? { c_weekly_cell_id: { [Op.iLike]: `%${c_weekly_cell_id}%` } } : null,
          ],
        },
        n_weekly_id ? { n_weekly_id: n_weekly_id } : null,
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
