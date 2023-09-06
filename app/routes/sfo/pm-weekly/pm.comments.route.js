const { isAuth } = require("../../../middlewares/index.js");

module.exports = (app) => {
  const pmComments = require("../../../controllers/sfo/pm-weekly/pm.comments.controller.js");

  var router = require("express").Router();

  // Create a new comments Data
  router.post("/", isAuth, pmComments.create);
  // Upsert a new comments Data
  router.post("/upsert", isAuth, pmComments.upsert);

  // Retrieve PM-Comments Data
  router.get("/", isAuth, pmComments.findAll);
  router.post("/params", isAuth, pmComments.findAllByParam);
  router.post("/commentId", isAuth, pmComments.findByCommentId);

  app.use("/api/pm/comments", router);
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
