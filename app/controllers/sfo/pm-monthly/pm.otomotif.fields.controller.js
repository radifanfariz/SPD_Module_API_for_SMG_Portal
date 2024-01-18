const db = require("../../../models/sfo/pm-monthly");
const {
  getPagingData,
  getPagination,
  isContentTableExist,
} = require("../../../utils/util");
const PmOtomotifFields = db.pmOtomotifFields;
const PmOtomotifFieldsTransactions = db.pmOtomotifFieldsTransactions;
const PmOtomotifBu = db.pmOtomotifBu;

const sequalize = db.Sequelize;
const Op = db.Sequelize.Op;

////////////////Create Field////////////////////////
exports.createField = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }
  const pmOtomotifFieldsReq = {
    n_bu_id: req.body.n_bu_id,
    c_rule: req.body.c_rule,
    c_field_name: req.body.c_field_name,
    c_field_id: req.body.c_field_id,
    c_field_type: req.body.c_field_type,
    c_identification_id: req.body.c_identification_id,
    b_field_isshow: req.body.b_field_isshow,
  };
  PmOtomotifFields.create(pmOtomotifFieldsReq)
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
          err.message || "Some error occurred while creating the fields data.",
      };
      res.status(500).send(errorResponse);
    });
};
exports.createFieldTransaction = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }
  const pmOtomotifFieldsTransactionsReq = {
    d_periode: req.body.n_bu_id,
    n_bu_id: req.body.n_bu_id,
    n_field_id: req.body.n_product_id,
    n_field_value: req.body.n_product_value,
    c_field_id: req.body.c_field_id,
  };
  PmOtomotifFieldsTransactions.create(pmOtomotifFieldsTransactionsReq)
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
          err.message || "Some error occurred while creating the fields data.",
      };
      res.status(500).send(errorResponse);
    });
};
////////////////////////////////////////////////////////////////////////

///////////////////bulkCreate////////////////////////////////////////
exports.bulkCreateField = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }

  PmOtomotifFields.bulkCreate(
    req.body,
    isContentTableExist(PmOtomotifFields)
      ? {
          updateOnDuplicate: [
            "n_bu_id",
            "c_rule",
            "c_field_name",
            "c_identification_id",
            "c_field_type",
            "c_field_id",
            "b_field_isshow",
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
          err.message || "Some error occurred while creating the Field data.",
      };
      res.status(500).send(errorResponse);
    });
};
exports.bulkCreateFieldTransaction = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }

  PmOtomotifFieldsTransactions.bulkCreate(req.body, {
    updateOnDuplicate: ["n_field_value"],
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
          err.message || "Some error occurred while creating the Field data.",
      };
      res.status(500).send(errorResponse);
    });
};
//////////////////////////////////////////////////////////////////////

///////////////////Update Fields////////////////////////////
exports.updateField = (req, res) => {
  const fieldId = req.params.id;

  PmOtomotifFields.update(req.body, {
    where: { n_id: fieldId },
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
          message: `Cannot update field data with id=${fieldId} !`,
        };
        res.send(errorResponse);
      }
    })
    .catch((err) => {
      const errorResponse = {
        status: false,
        message: err.message || `Cannot update field data with id=${fieldId} !`,
      };
      res.status(500).send(errorResponse);
    });
};
exports.updateFieldTransaction = (req, res) => {
  const fieldTransactionId = req.params.id;

  PmOtomotifFieldsTransactions.update(req.body, {
    where: { n_id: fieldTransactionId },
  })
    .then((num) => {
      if (num == 1) {
        const successResponse = {
          status: true,
          message: "Field transaction data was updated succesfully !",
        };
        res.send(successResponse);
      } else {
        const errorResponse = {
          status: false,
          message: `Cannot update field transaction data with id=${fieldTransactionId} !`,
        };
        res.send(errorResponse);
      }
    })
    .catch((err) => {
      const errorResponse = {
        status: false,
        message:
          err.message ||
          `Cannot update field transaction data with id=${fieldTransactionId} !`,
      };
      res.status(500).send(errorResponse);
    });
};
////////////////////////////////////////////////////////////////////

// Retrieve all products data from the database.
exports.findAllField = (req, res) => {
  PmOtomotifFields.findAll({
    // include: [
    //   {
    //     model: PmOtomotifFieldsTransactions,
    //     // as: "pm_otomotif_fields_transactions",
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
          err.message || "Some error occurred while retrieving Fields data.",
      };
      res.status(500).send(errorResponse);
    });
};
exports.findAll = (req, res) => {
  PmOtomotifFieldsTransactions.findAll({
    include: [{ model: PmOtomotifFields, as: "pm_otomotif_fields" }],
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
          err.message || "Some error occurred while retrieving Fields data.",
      };
      res.status(500).send(errorResponse);
    });
};

// Retrieve all SFO SU Fields data by param from the database.
exports.findAllByParam = (req, res) => {
  const { d_periode, n_field_id, c_field_id, n_bu_id } = req.body;
  PmOtomotifFieldsTransactions.findAll({
    include: [
      { model: PmOtomotifFields, as: "pm_otomotif_fields" },
      { model: PmOtomotifBu, as: "pm_otomotif_bu" },
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
        n_field_id ? { n_field_id: n_field_id } : null,
        c_field_id
          ? Array.isArray(c_field_id)
            ? {
                c_field_id: { [Op.in]: c_field_id },
              }
            : { c_field_id: { [Op.iLike]: `%${c_field_id}%` } }
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
          err.message || "Some error occurred while retrieving Fields data.",
      };
      res.status(500).send(errorResponse);
    });
};
