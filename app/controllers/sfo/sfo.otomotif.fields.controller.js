const db = require("../../models/sfo");
const { getPagingData, getPagination } = require("../../utils/spdmain.util");
const SfoFields = db.sfoFields;
const SfoProducts = db.sfoProducts;
const SfoSu = db.sfoSu;
const SfoTransactions = db.sfoTransactions;
const SfoSuFields = db.sfoSuFields;
const SfoSuProducts = db.sfoSuProducts;
const SfoTransactionsFields = db.sfoTransactionsFields;
const SfoTransactionsProducts = db.sfoTransactionsProducts;

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }
  const sfoFieldsReq = {
    c_field_name: req.body.c_field_name,
    c_field_type: req.body.c_field_type,
    c_field_subtype: req.body.c_field_subtype,
    c_field_rule: req.body.c_field_rule,
    c_field_id: req.body.c_field_id,
    c_field_formula: req.body.c_field_formula,
  };
  SfoFields.create(sfoFieldsReq)
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

// Retrieve all SFO SU data from the database.
exports.findAll = (req, res) => {
  SfoFields.findAll()
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
