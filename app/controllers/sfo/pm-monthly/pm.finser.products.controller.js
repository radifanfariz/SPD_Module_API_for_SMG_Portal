const db = require("../../../models/sfo/pm-monthly");
const {
  getPagingData,
  getPagination,
  isContentTableExist,
} = require("../../../utils/spdmain.util");
const PmFinserProducts = db.pmFinserProducts;
const PmFinserProductsTransactions = db.pmFinserProductsTransactions;
const PmFinserBu = db.pmFinserBu;

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
  const pmFinserProductsReq = {
    n_bu_id: req.body.n_bu_id,
    c_rule: req.body.c_rule,
    c_product_name: req.body.c_product_name,
    c_product_id: req.body.c_product_id,
    c_product_type: req.body.c_product_type,
    c_identification_id: req.body.c_identification_id,
  };
  PmFinserProducts.create(pmFinserProductsReq)
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
          err.message ||
          "Some error occurred while creating the products data.",
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
  const pmFinserProductsTransactionsReq = {
    d_periode: req.body.n_bu_id,
    n_bu_id: req.body.n_bu_id,
    n_product_id: req.body.n_product_id,
    n_product_value: req.body.n_product_value,
    c_product_id: req.body.c_product_id,
  };
  PmFinserProductsTransactions.create(pmFinserProductsTransactionsReq)
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
          err.message ||
          "Some error occurred while creating the products data.",
      };
      res.status(500).send(errorResponse);
    });
};
/////////////////////////////////////////////////////////////////////////

///////////////////bulkCreate////////////////////////////////////////
exports.bulkCreateProduct = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }

  PmFinserProducts.bulkCreate(
    req.body,
    isContentTableExist(PmFinserProducts)
      ? {
          updateOnDuplicate: [
            "n_bu_id",
            "c_rule",
            "c_product_name",
            "c_identification_id",
            "c_product_type",
            "c_product_id",
            "b_product_isshow",
          ],
        }
      : { ignoreDuplicates: true }
  )
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
          err.message || "Some error occurred while creating the Product data.",
      };
      res.status(500).send(errorResponse);
    });
};
exports.bulkCreateProductTransaction = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }

  PmFinserProductsTransactions.bulkCreate(
    req.body,
    isContentTableExist(PmFinserProductsTransactions)
      ? {
          updateOnDuplicate: ["n_product_value"],
        }
      : { ignoreDuplicates: true }
  )
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
          err.message || "Some error occurred while creating the Product data.",
      };
      res.status(500).send(errorResponse);
    });
};
//////////////////////////////////////////////////////////////////////

////Update Products////
exports.updateProduct = (req, res) => {
  const productId = req.params.id;

  PmFinserProducts.update(req.body, {
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
        message:
          err.message || `Cannot update product data with id=${productId} !`,
      };
      res.status(500).send(errorResponse);
    });
};
exports.updateProductTransaction = (req, res) => {
  const productTransactionId = req.params.id;

  PmFinserProductsTransactions.update(req.body, {
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
        message:
          err.message ||
          `Cannot update product transaction data with id=${productTransactionId} !`,
      };
      res.status(500).send(errorResponse);
    });
};
////////////////////////////////////////////////////////////////////

// Retrieve all products data from the database.
exports.findAllProduct = (req, res) => {
  PmFinserProducts.findAll({
    // include: [
    //   {
    //     model: PmFinserProductsTransactions,
    //     // as: "pm_finser_products_transactions",
    //   },
    // ],
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
exports.findAll = (req, res) => {
  PmFinserProductsTransactions.findAll({
    include: [{ model: PmFinserProducts, as: "pm_finser_products" }],
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
  const { d_periode, n_product_id, c_product_id, n_bu_id } = req.body;
  PmFinserProductsTransactions.findAll({
    include: [
      { model: PmFinserProducts, as: "pm_finser_products" },
      { model: PmFinserBu, as: "pm_finser_bu" },
    ],
    where: {
      [Op.and]: [
        d_periode
          ? {
              d_periode: {
                [Op.between]: [
                  new Date(
                    new Date(d_periode).getFullYear(),
                    new Date(d_periode).getMonth(),
                    1
                  ),
                  new Date(
                    new Date(d_periode).getFullYear(),
                    new Date(d_periode).getMonth() + 1,
                    0
                  ),
                ],
              },
            }
          : null,
        n_bu_id ? { n_bu_id: n_bu_id } : null,
        n_product_id ? { n_product_id: n_product_id } : null,
        c_product_id
          ? Array.isArray(c_product_id)
            ? {
              c_product_id: { [Op.in]: c_product_id },
              }
            : { c_product_id: { [Op.iLike]: `%${c_product_id}%` } }
          : null,
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
