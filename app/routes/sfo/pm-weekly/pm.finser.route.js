const { isAuth } = require("../../../middlewares/index.js");

module.exports = (app) => {
  const pmWeeklyFinser = require("../../../controllers/sfo/pm-weekly/pm.finser.weekly.controller.js");
  const pmCommentsFinser = require("../../../controllers/sfo/pm-weekly/pm.finser.comments.controller.js");
  const pmFinserBu = require("../../../controllers/sfo/pm-weekly/pm.finser.bu.controller.js");

  var router = require("express").Router();

  // Create a new finser weekly Data
  router.post("/", isAuth, pmWeeklyFinser.create);
  // Upsert a new finser weekly Data
  router.post("/upsert", isAuth, pmWeeklyFinser.upsert);
  // Bulk Upsert a new otomotif weekly Data
  router.post("/bulkUpsert", isAuth, pmWeeklyFinser.bulkUpsert);
  // Create a new finser comment Data
  router.post("/comments", isAuth, pmCommentsFinser.create);

  // Retrieve PM-Finser BU Data
  router.get("/finserBu", isAuth, pmFinserBu.findAll);
  router.post("/finserBu/params", isAuth, pmFinserBu.findAllByParam);
  // Retrieve PM-Finser Fields Data
  router.post("/fields", isAuth, pmWeeklyFinser.findAllFields);
  // Retrieve PM-Finser Data
  router.get("/", isAuth, pmWeeklyFinser.findAll);
  router.post("/params", isAuth, pmWeeklyFinser.findAllByParam);
  router.get("/booking", isAuth, pmWeeklyFinser.findAllBooking);
  router.post("/booking/params", isAuth, pmWeeklyFinser.findAllByParamBooking);
  router.post("/monthlyParams", isAuth, pmWeeklyFinser.findAllByParamMonthly);
  router.get("/comments", isAuth, pmCommentsFinser.findAll);
  router.post("/comments/params", isAuth, pmCommentsFinser.findAllByParam);

  app.use("/api/pm/finser/weekly", router);
};

/**
 * @swagger
 * components:
 *   schemas:
 *     Spd:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The user ID.
 *           example: 0
 *         name:
 *           type: string
 *           description: The user's name.
 *           example: Leanne Graham
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retrieve all SPD Data.
 *     description: Retrieve all SPD Data for ajukan on spd_main table in DB.
 *     responses:
 *       200:
 *         description: All of SPD data.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Spd'
 */
