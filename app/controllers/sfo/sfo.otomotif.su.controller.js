const db = require("../../models/sfo");
const { getPagingData, getPagination } = require("../../utils/util");
const SfoSu = db.sfoSu;

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }
  const sfoSuReq = {
    c_su_name: req.body.c_su_name,
    c_su_type: req.body.c_su_type,
    n_bu_id: req.body.n_bu_id,
  };
  SfoSu.create(sfoSuReq)
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
    SfoSu.findAll()
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
