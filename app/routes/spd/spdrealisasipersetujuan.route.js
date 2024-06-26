const { isAuth } = require("../../middlewares/index.js");

module.exports = (app) => {
  const spdRealisasiPersetujuan = require("../../controllers/spd/spdrealisasipersetujuan.controller.js");
  //   const spdRealisasiPersetujuan = require("../controllers/spdrealisasipersetujuan.controller.js");

  var router = require("express").Router();

  // Realisasi Persetujuan //
  // Create a new SPD Realisasi Persetujuan Data
  router.post("/", isAuth, spdRealisasiPersetujuan.create);
  // Retrieve all SPD Realisasi Persetujuan
  router.get("/", isAuth, spdRealisasiPersetujuan.findAllByParam);
  // Retrieve one SPD Realisasi Persetujuan
  router.get("/:id", isAuth, spdRealisasiPersetujuan.findOne);
  // Update a SPD Realisasi Persetujuan Data by id
  router.put("/:id", isAuth, spdRealisasiPersetujuan.update);
  // Delete a SPD Realisasi Persetujuan Data by id
  router.delete("/:id", isAuth, spdRealisasiPersetujuan.delete);

  app.use("/api/spdrealisasipersetujuan", router);
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
