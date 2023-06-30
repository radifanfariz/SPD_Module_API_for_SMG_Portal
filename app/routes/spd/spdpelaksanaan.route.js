const { isAuth } = require("../../middlewares/index.js");

module.exports = (app) => {
  const spdPelaksanaan = require("../../controllers/spd/spdpelaksanaan.controller.js");

  var router = require("express").Router();

  // Pelaksanaan //
  // Create a new SPD Pelaksanaan Data
  router.post("/", isAuth, spdPelaksanaan.create);
  // Create a new SPD Pelaksanaan Data
  router.post("/bulk", isAuth, spdPelaksanaan.bulkCreate);
  // Retrieve all SPD Pelaksanaan
  router.get("/", isAuth, spdPelaksanaan.findAllByParam);
  // Retrieve one SPD Pelaksanaan
  router.get("/:id", isAuth, spdPelaksanaan.findOne);
  // Update a SPD Pelaksanaan Data with id
  router.put("/:id", isAuth, spdPelaksanaan.update);

  app.use("/api/spdpelaksanaan", router);
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
