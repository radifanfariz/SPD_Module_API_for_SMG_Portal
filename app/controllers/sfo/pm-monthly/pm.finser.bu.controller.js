const db = require("../../../models/sfo/pm-monthly");
const { getPagingData, getPagination, isContentTableExist } = require("../../../utils/util");
const PmFinserBu = db.pmFinserBu;

const sequalize = db.Sequelize;
const Op = db.Sequelize.Op;

///////create Products/////////////////
exports.createBu = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }
  const pmFinserBuReq = {
    n_bu_id: req.body.n_bu_id,
    c_bu_name: req.body.c_bu_name,
  };
  PmFinserBu.create(pmFinserBuReq)
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
          "Some error occurred while creating the BU data.",
      };
      res.status(500).send(errorResponse);
    });
};
/////////////////////////////////////////////////////////////////////////

///////////////////bulkCreate////////////////////////////////////////
exports.bulkCreateBu = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }

  PmFinserBu.bulkCreate(
    req.body,
    isContentTableExist(PmFinserBu)
      ? {
          updateOnDuplicate: [
            "c_bu_name",
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
          err.message || "Some error occurred while creating the BU data.",
      };
      res.status(500).send(errorResponse);
    });
};
//////////////////////////////////////////////////////////////////////

////Update Products////
exports.updateBu = (req, res) => {
  const buId = req.params.id;

  PmFinserBu.update(req.body, {
    where: { n_id: buId },
  })
    .then((num) => {
      if (num == 1) {
        const successResponse = {
          status: true,
          message: "BU data was updated succesfully !",
        };
        res.send(successResponse);
      } else {
        const errorResponse = {
          status: false,
          message: `Cannot update BU data with id=${buId} !`,
        };
        res.send(errorResponse);
      }
    })
    .catch((err) => {
      const errorResponse = {
        status: false,
        message:
          err.message || `Cannot update BU data with id=${buId} !`,
      };
      res.status(500).send(errorResponse);
    });
};
////////////////////////////////////////////////////////////////////

// Retrieve all products data from the database.
exports.findAll = (req, res) => {
  PmFinserBu.findAll()
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
          err.message || "Some error occurred while retrieving BU data.",
      };
      res.status(500).send(errorResponse);
    });
};

// Retrieve all SFO SU Fields data by param from the database.
exports.findAllByParam = (req, res) => {
  const {n_bu_id, c_bu_name } = req.body;
  PmFinserBu.findAll({
    where: {
      [Op.or]: [
        n_bu_id ? { n_bu_id: n_bu_id } : null,
        c_bu_name
          ? { c_bu_name: { [Op.iLike]: `%${c_bu_name}%` } }
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
          err.message || "Some error occurred while retrieving BU data.",
      };
      res.status(500).send(errorResponse);
    });
};
