const { DateTime } = require("luxon");
const db = require("../../../models/sfo/pm-weekly");
const {
  getPagingData,
  getPagination,
  upsert,
} = require("../../../utils/util");
const { validateDate } = require("../../../validations/sfo/pm.validation");
require("../../../utils/sfo/pm.util");
const PmComments = db.pmComments;

const sequalize = db.Sequelize;
const Op = db.Sequelize.Op;

exports.upsert = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }
  const PmCommentsReq = {
    c_comment_id: req.body.c_comment_id,
    c_comment_text: req.body.c_comment_text,
    n_user_id: req.body.n_user_id,
    c_user_id: req.body.c_user_id,
    c_bu_id: req.body.c_bu_id,
    n_bu_id: req.body.n_bu_id,
    c_type: req.body.c_type,
    c_flag: req.body.c_flag,
    d_created_at: req.body.d_created_at,
    d_updated_at: req.body.d_updated_at,
    n_created_by: req.body.n_created_by,
    n_updated_by: req.body.n_updated_by,
  };
  const upsertObj = upsert(PmComments, PmCommentsReq, {
    [Op.and]: [
      PmCommentsReq.c_comment_id
        ? { c_comment_id: PmCommentsReq.c_comment_id }
        : null,
      PmCommentsReq.c_user_id ? { c_user_id: PmCommentsReq.c_user_id } : null,
      PmCommentsReq.n_user_id ? { n_user_id: PmCommentsReq.n_user_id } : null,
    ],
  });
  upsertObj
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
          "Some error occurred while creating the PM-Comments Weekly data.",
      };
      console.log(err.errors);
      res.status(500).send(errorResponse);
    });
};

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }
  const PmCommentsReq = {
    c_comment_id: req.body.c_comment_id,
    c_comment_text: req.body.c_comment_text,
    n_user_id: req.body.n_user_id,
    c_user_id: req.body.c_user_id,
    c_bu_id: req.body.c_bu_id,
    n_bu_id: req.body.n_bu_id,
    c_type: req.body.c_type,
    c_flag: req.body.c_flag,
    d_created_at: req.body.d_created_at,
    d_updated_at: req.body.d_updated_at,
    n_created_by: req.body.n_created_by,
    n_updated_by: req.body.n_updated_by,
  };
  PmComments.create(PmCommentsReq)
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
          "Some error occurred while creating the PM-Comments data.",
      };
      res.status(500).send(errorResponse);
    });
};

// Retrieve all PM-Otomotif Fields Transactions data from the database.
exports.findAll = (req, res) => {
  PmComments.findAll()
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
          "Some error occurred while retrieving PM-Comments data.",
      };
      res.status(500).send(errorResponse);
    });
};

// Retrieve all by params PM-Comments data by param from the database.
exports.findAllByParam = (req, res) => {
  const {c_comment_id, n_user_id, n_bu_id, c_bu_id, c_user_id, c_type, c_flag } = req.body;
  PmComments.findAll({
    where: {
      [Op.and]: [
        c_comment_id ? { c_comment_id: { [Op.iLike]: `%${c_comment_id}%` } } : null,
        n_bu_id ? { n_bu_id: n_bu_id } : null,
        c_bu_id ? { c_bu_id: { [Op.iLike]: `%${c_bu_id}%` } } : null,
        n_user_id ? { n_user_id: n_user_id } : null,
        c_user_id ? { c_user_id: { [Op.iLike]: `${c_user_id}` }  } : null,
        c_type ? { c_type: { [Op.iLike]: `%${c_type}%` }  } : null,
        c_flag ? { c_flag: { [Op.iLike]: `${c_flag}` }  } : null,
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
          err.message ||
          "Some error occurred while retrieving PM-Comments data.",
      };
      res.status(500).send(errorResponse);
    });
};
// Retrieve one by id PM-Comments data by param from the database.
exports.findByCommentId = (req, res) => {
  const { c_comment_id } = req.body;
  PmComments.findAll({
    where: {
      [Op.and]: [
        c_comment_id ? { c_comment_id: { [Op.iLike]: `%${c_comment_id}%` } } : null,
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
          err.message ||
          "Some error occurred while retrieving PM-Comments data.",
      };
      res.status(500).send(errorResponse);
    });
};
