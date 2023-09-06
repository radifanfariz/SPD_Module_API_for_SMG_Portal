const db = require("../../models/sfo");
const { getPagingData, getPagination } = require("../../utils/util");
const SfoProducts = db.sfoProducts;

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }
  const sfoProductsReq = {
    n_su_id: req.body.n_su_id,
    c_product_name: req.body.c_product_name,
  };
  SfoProducts.create(sfoProductsReq)
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

// Retrieve all SFO Products data from the database.
exports.findAll = (req, res) => {
    SfoProducts.findAll()
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