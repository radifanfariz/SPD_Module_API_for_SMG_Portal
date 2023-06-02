const { isAuth } = require("../middlewares/index.js");

module.exports = (app) => {
  const spdPelaksanaan = require("../controllers/spdpelaksanaan.controller.js");
  const spdRealisasi = require("../controllers/spdrealisasi.controller.js");

  var router = require("express").Router();

  // Realisasi //
  // Create a new SPD Realisasi Data
  router.post("/", isAuth, spdRealisasi.create);
  // Retrieve all SPD Realisasi
  router.get("/", isAuth, spdRealisasi.findAllByParam);
  // Retrieve one SPD Realisasi
  router.get("/:id", isAuth, spdRealisasi.findOne);
  // Update a SPD Realisasi Data with id
  router.put("/:id", isAuth, spdRealisasi.update);

  app.use("/api/spdrealisasi", router);
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
