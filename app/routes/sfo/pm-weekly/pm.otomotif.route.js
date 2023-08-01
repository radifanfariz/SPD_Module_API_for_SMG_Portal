const { isAuth } = require("../../../middlewares/index.js");

module.exports = (app) => {
  const pmWeekly = require("../../../controllers/sfo/pm-weekly/pm.otomotif.weekly.controller.js");
  const pmComments = require("../../../controllers/sfo/pm-weekly/pm.otomotif.comments.controller.js");

  var router = require("express").Router();

  // Create a new otomotif weekly Data
  router.post("/", isAuth, pmWeekly.create);
  // Upsert a new otomotif weekly Data
  router.post("/upsert", isAuth, pmWeekly.upsert);
  // Create a new otomotif comment Data
  router.post("/comments", isAuth, pmComments.create);

  // Retrieve SFO Otomotif Data
  router.get("/", isAuth, pmWeekly.findAll);
  router.post("/params", isAuth, pmWeekly.findAllByParam);
  router.post("/monthlyParams", isAuth, pmWeekly.findAllByParamMonthly);
  router.get("/comments", isAuth, pmComments.findAll);
  router.post("/comments/params", isAuth, pmComments.findAllByParam);

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
