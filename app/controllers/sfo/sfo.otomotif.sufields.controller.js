const db = require("../../models/sfo");
const { getPagingData, getPagination } = require("../../utils/spdmain.util");
const SfoSuFields = db.sfoSuFields;
const SfoFields = db.sfoFields;
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
  const sfoSuFieldsReq = {
    n_su_id: req.body.n_su_id,
    n_field_id: req.body.n_field_id,
  };
  SfoSuFields.create(sfoSuFieldsReq)
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
  SfoSuFields.findAll({
    include: [{ model: SfoFields }, { model: SfoSu }],
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
  const { n_su_id, n_field_id } = req.body;
  SfoSuFields.findAll({
    include: [
        { model: SfoFields }, 
        { model: SfoSu }
    ],
    where: {
      [Op.and]: [
        n_su_id ? { n_su_id: n_su_id } : null,
        n_field_id ? { n_field_id: n_field_id } : null,
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
