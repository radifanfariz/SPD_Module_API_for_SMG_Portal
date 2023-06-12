const { isAuth } = require("../middlewares/index.js");

module.exports = (app) => {
  const spdRealisasiDetail = require("../controllers/spdrealisasidetail.controller.js");
//   const spdRealisasiPersetujuan = require("../controllers/spdrealisasipersetujuan.controller.js");

  var router = require("express").Router();

  // Realisasi Detail //
  // Create a new SPD Realisasi Data
  router.post("/", isAuth, spdRealisasiDetail.create);
  // Retrieve all SPD Realisasi
  router.get("/", isAuth, spdRealisasiDetail.findAllByParam);
  // Retrieve one SPD Realisasi
  router.get("/:id", isAuth, spdRealisasiDetail.findOne);
  // Update a SPD Realisasi Data with id
  router.put("/:id", isAuth, spdRealisasiDetail.update);

  app.use("/api/spdrealisasidetail", router);
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
