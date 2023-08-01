const { isAuth } = require("../../../middlewares/index.js");

module.exports = (app) => {
  const pmWeeklyFinser = require("../../../controllers/sfo/pm-weekly/pm.finser.weekly.controller.js");
  const pmCommentsFinser = require("../../../controllers/sfo/pm-weekly/pm.finser.comments.controller.js");

  var router = require("express").Router();

  // Create a new otomotif weekly Data
  router.post("/", isAuth, pmWeeklyFinser.create);
  // Upsert a new otomotif weekly Data
  router.post("/upsert", isAuth, pmWeeklyFinser.upsert);
  // Create a new otomotif comment Data
  router.post("/comments", isAuth, pmCommentsFinser.create);

  // Retrieve SFO Otomotif Data
  router.get("/", isAuth, pmWeeklyFinser.findAll);
  router.post("/params", isAuth, pmWeeklyFinser.findAllByParam);
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
