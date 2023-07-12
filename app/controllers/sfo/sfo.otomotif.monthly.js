// under development///

// const db = require("../../models/sfo");
// const { getPagingData, getPagination } = require("../../utils/spdmain.util");
// const SfoWeekly = db.sfoWeekly;
// const SfoComments = db.sfoComments;

// const sequalize = db.Sequelize;
// const Op = db.Sequelize.Op;

// const tableData = {
//     header: [
//       {
//         id: "bu",
//         value: "Business Unit",
//       },
//     ],
//     data: [
//       {
//         bu: "Daihatsu",
//         buId: "daihatsu",
//         buReferenceId: "2",
//         yField: "% Ach to Budget",
//         yFieldId: "achBudget",
//         yFieldReference: "achBudget",
//         yFieldColor: "gray",
//         jun22: "117%",
//         jan23: "147%",
//       },
//     ],
//     trendData: {
//       toyota: {
//         w1: [
//           { Month: "June 22", Unit: 2 },
//         ],
//       },
//     },
//     commentData: {
//       toyota: {
//         w1: {
//           "jun22#0": {
//             n_id: 1,
//             c_weekly_reference: "W1",
//             c_weekly_reference_id: "w1",
//             c_weekly_cell_id: "jun22#0",
//             c_comments: "Hello World",
//             n_weekly_id: 1,
//           },
//         },
//         w2: {
//           "jun22#1": {
//             n_id: 1,
//             c_weekly_reference: "W2",
//             c_weekly_reference_id: "w2",
//             c_weekly_cell_id: "jun22#1",
//             c_comments: "Hello World 2",
//             n_weekly_id: 1,
//           },
//         },
//       },
//     },
//   };

// exports.create = (req, res) => {
//   if (!req.body) {
//     res.status(400).send({
//       message: "Data can not be empty!",
//     });
//     return;
//   }
//   const sfoCommentsReq = {
//     c_weekly_reference: req.body.c_weekly_reference,
//     c_weekly_cell_id: req.body.c_weekly_cell_id,
//     c_comments: req.body.c_comments,
//     n_weekly_id: req.body.n_weekly_id,
//     n_updated_by: req.body.n_updated_by,
//   };
//   SfoComments.create(sfoCommentsReq)
//     .then((data) => {
//       const successResponse = {
//         status: true,
//         message: "Ok",
//         totalItems: data.length,
//         data: data,
//       };
//       res.send(successResponse);
//     })
//     .catch((err) => {
//       const errorResponse = {
//         status: false,
//         message:
//           err.message || "Some error occurred while creating the SPD data.",
//       };
//       res.status(500).send(errorResponse);
//     });
// };

// // Retrieve all SFO SU Fields data from the database.
// exports.findAll = (req, res) => {
//   SfoComments.findAll({
//     include: [{ model: SfoWeekly, as: "sfo_weekly" }],
//   })
//     .then((data) => {
//       const successResponse = {
//         status: true,
//         message: "Ok",
//         totalItems: data.length,
//         data: data,
//       };
//       res.send(successResponse);
//     })
//     .catch((err) => {
//       const errorResponse = {
//         status: false,
//         message:
//           err.message || "Some error occurred while retrieving SPD data.",
//       };
//       res.status(500).send(errorResponse);
//     });
// };

// // Retrieve all SFO SU Fields data by param from the database.
// exports.findAllByParam = (req, res) => {
//   const { n_weekly_id, c_weekly_reference, c_weekly_cell_id } = req.body;
//   SfoComments.findAll({
//     include: [{ model: SfoWeekly, as: "sfo_weekly" }],
//     where: {
//       [Op.or]: [
//         {
//           [Op.and]: [
//             c_weekly_reference ? { c_weekly_reference: { [Op.iLike]: `%${c_weekly_reference}%` } } : null,
//             c_weekly_cell_id ? { c_weekly_cell_id: { [Op.iLike]: `%${c_weekly_cell_id}%` } } : null,
//           ],
//         },
//         n_weekly_id ? { n_weekly_id: n_weekly_id } : null,
//       ],
//     },
//   })
//     .then((data) => {
//       const successResponse = {
//         status: true,
//         message: "Ok",
//         totalItems: data?.length,
//         data: data,
//       };
//       res.send(successResponse);
//     })
//     .catch((err) => {
//       const errorResponse = {
//         status: false,
//         message:
//           err.message || "Some error occurred while retrieving SPD data.",
//       };
//       res.status(500).send(errorResponse);
//     });
// };
