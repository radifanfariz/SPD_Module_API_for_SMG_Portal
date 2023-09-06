const { isAuth } = require("../../../middlewares/index.js");

module.exports = (app) => {
  const pmWeeklyOtomotif = require("../../../controllers/sfo/pm-weekly/pm.otomotif.weekly.controller.js");
  const pmCommentsOtomotif = require("../../../controllers/sfo/pm-weekly/pm.otomotif.comments.controller.js");
  const pmOtomotifBu = require("../../../controllers/sfo/pm-weekly/pm.otomotif.bu.controller.js");

  var router = require("express").Router();

  // Create a new otomotif weekly Data
  router.post("/", isAuth, pmWeeklyOtomotif.create);
  // Upsert a new otomotif weekly Data
  router.post("/upsert", isAuth, pmWeeklyOtomotif.upsert);
  // Create a new otomotif comment Data
  router.post("/comments", isAuth, pmCommentsOtomotif.create);

  // Retrieve BU Data
  router.get("/otomotifBu", isAuth, pmOtomotifBu.findAll);
  router.post("/otomotifBu/params", isAuth, pmOtomotifBu.findAllByParam);
  // Retrieve SFO Otomotif Data
  router.get("/", isAuth, pmWeeklyOtomotif.findAll);
  router.post("/params", isAuth, pmWeeklyOtomotif.findAllByParam);
  router.post("/monthlyParams", isAuth, pmWeeklyOtomotif.findAllByParamMonthly);
  router.get("/comments", isAuth, pmCommentsOtomotif.findAll);
  router.post("/comments/params", isAuth, pmCommentsOtomotif.findAllByParam);

  app.use("/api/pm/otomotif/weekly", router);
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
