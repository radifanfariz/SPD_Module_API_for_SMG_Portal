const db = require("../../../models/sfo/pm-monthly");
const { getPagingData, getPagination } = require("../../../utils/spdmain.util");
const PmOtomotifProducts = db.pmOtomotifProducts;
const PmOtomotifProductsTransactions = db.pmOtomotifProductsTransactions;

const sequalize = db.Sequelize;
const Op = db.Sequelize.Op;


///////create Products/////////////////
exports.createProduct = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }
  const pmOtomotifProductsReq = {
    n_bu_id: req.body.n_bu_id,
    c_rule: req.body.c_rule,
    c_product_name: req.body.c_product_name,
    c_product_id: req.body.c_product_id,
    c_product_type: req.body.c_product_type,
    c_identification_id: req.body.c_identification_id,
  };
  PmOtomotifProducts.create(pmOtomotifProductsReq)
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
          err.message || "Some error occurred while creating the products data.",
      };
      res.status(500).send(errorResponse);
    });
};
exports.createProductTransaction = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }
  const pmOtomotifProductsTransactionsReq = {
    d_periode: req.body.n_bu_id,
    n_product_id: req.body.n_product_id,
    n_product_value: req.body.n_product_value,
  };
  PmOtomotifProductsTransactions.create(pmOtomotifProductsTransactionsReq)
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
          err.message || "Some error occurred while creating the products data.",
      };
      res.status(500).send(errorResponse);
    });
};
/////////////////////////////////////////////////////////////////////////

////Update Products////
exports.updateProduct = (req, res) => {
  const productId = req.params.id;

  PmOtomotifProducts.update(req.body, {
    where: { n_id: productId },
  })
    .then((num) => {
      if (num == 1) {
        const successResponse = {
          status: true,
          message: "Product data was updated succesfully !",
        };
        res.send(successResponse);
      } else {
        const errorResponse = {
          status: false,
          message: `Cannot update product data with id=${productId} !`,
        };
        res.send(errorResponse);
      }
    })
    .catch((err) => {
      const errorResponse = {
        status: false,
        message: err.message || `Cannot update product data with id=${productId} !`,
      };
      res.status(500).send(errorResponse);
    });
};
exports.updateProductTransaction = (req, res) => {
  const productTransactionId = req.params.id;

  PmOtomotifProductsTransactions.update(req.body, {
    where: { n_id: productTransactionId },
  })
    .then((num) => {
      if (num == 1) {
        const successResponse = {
          status: true,
          message: "Product transaction data was updated succesfully !",
        };
        res.send(successResponse);
      } else {
        const errorResponse = {
          status: false,
          message: `Cannot update product transaction data with id=${productTransactionId} !`,
        };
        res.send(errorResponse);
      }
    })
    .catch((err) => {
      const errorResponse = {
        status: false,
        message: err.message || `Cannot update product transaction data with id=${productTransactionId} !`,
      };
      res.status(500).send(errorResponse);
    });
};
////////////////////////////////////////////////////////////////////

// Retrieve all products data from the database.
exports.findAll = (req, res) => {
  PmOtomotifProductsTransactions.findAll({
    include: [{ model: PmOtomotifProducts, as: "pm_otomotif_products" }],
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
          err.message || "Some error occurred while retrieving products data.",
      };
      res.status(500).send(errorResponse);
    });
};

// Retrieve all SFO SU Fields data by param from the database.
exports.findAllByParam = (req, res) => {
  const { d_periode, n_product_id } = req.body;
  PmOtomotifProductsTransactions.findAll({
    include: [{ model: PmOtomotifProducts, as: "pm_otomotif_products" }],
    where: {
      [Op.or]: [
        d_periode ? { d_periode: d_periode } : null,
        n_product_id ? { n_product_id: n_product_id } : null,
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
          err.message || "Some error occurred while retrieving Products data.",
      };
      res.status(500).send(errorResponse);
    });
};
