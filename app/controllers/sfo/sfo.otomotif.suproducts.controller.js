const db = require("../../models/sfo");
const { getPagingData, getPagination } = require("../../utils/util");
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
  const sfoSuProductsReq = {
    n_su_id: req.body.n_su_id,
    n_product_id: req.body.n_product_id,
  };
  SfoSuProducts.create(sfoSuProductsReq)
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
  SfoSuProducts.findAll({
    include: [{ model: SfoProducts }, { model: SfoSu }],
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
  const { n_su_id, n_product_id } = req.body;
  SfoSuProducts.findAll({
    include: [
        { model: SfoProducts }, 
        { model: SfoSu }
    ],
    where: {
      [Op.and]: [
        n_su_id ? { n_su_id: n_su_id } : null,
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
          err.message || "Some error occurred while retrieving SPD data.",
      };
      res.status(500).send(errorResponse);
    });
};
