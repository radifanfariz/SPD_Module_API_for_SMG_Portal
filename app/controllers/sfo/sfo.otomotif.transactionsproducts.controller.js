const db = require("../../models/sfo");
const { getPagingData, getPagination } = require("../../utils/spdmain.util");
const SfoTransactionsProducts = db.sfoTransactionsProducts;
const SfoTransactions = db.sfoTransactions;
const SfoSuProducts = db.sfoSuProducts;
const SfoProducts = db.sfoProducts;
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
  const sfoTransactionsProductsReq = {
    n_su_product_id: req.body.n_su_product_id,
    n_transaction_id: req.body.n_transaction_id,
    n_total_unit: req.body.n_total_unit,
  };
  SfoTransactionsProducts.create(sfoTransactionsProductsReq)
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
  SfoTransactionsProducts.findAll({
    include: [
      { model: SfoTransactions },
      {
        model: SfoSuProducts,
        include: [{ model: SfoSu }, { model: SfoProducts }],
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
  const { n_su_product_id, n_transaction_id } = req.body;
  SfoTransactionsProducts.findAll({
    include: [
      { model: SfoTransactions },
      {
        model: SfoSuProducts,
        include: [{ model: SfoSu }, { model: SfoProducts }],
      },
    ],
    where: {
      [Op.and]: [
        n_su_product_id ? { n_su_product_id: n_su_product_id } : null,
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
