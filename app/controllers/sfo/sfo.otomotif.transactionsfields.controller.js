const db = require("../../models/sfo");
const { getPagingData, getPagination } = require("../../utils/util");
const SfoTransactionsFields = db.sfoTransactionsFields;
const SfoTransactions = db.sfoTransactions;
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
  const sfoTransactionsFieldsReq = {
    n_su_field_id: req.body.n_su_field_id,
    n_transaction_id: req.body.n_transaction_id,
    n_field_value: req.body.n_field_value,
  };
  SfoTransactionsFields.create(sfoTransactionsFieldsReq)
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
  SfoTransactionsFields.findAll({
    include: [
      { model: SfoTransactions },
      {
        model: SfoSuFields,
        include: [{ model: SfoSu }, { model: SfoFields }],
      },
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

// Retrieve all SFO SU Fields data by param from the database.
exports.findAllByParam = (req, res) => {
  const { n_su_field_id, n_transaction_id } = req.body;
  SfoTransactionsFields.findAll({
    include: [
      { model: SfoTransactions },
      {
        model: SfoSuFields,
        include: [{ model: SfoSu }, { model: SfoFields }],
      },
    ],
    where: {
      [Op.and]: [
        n_su_field_id ? { n_su_field_id: n_su_field_id } : null,
        n_transaction_id ? { n_transaction_id: n_transaction_id } : null,
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
