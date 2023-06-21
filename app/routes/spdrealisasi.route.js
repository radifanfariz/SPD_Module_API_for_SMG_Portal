const { isAuth } = require("../middlewares/index.js");

module.exports = (app) => {
  const spdRealisasi = require("../controllers/spdrealisasi.controller.js");
  const spdRealisasiDetail = require("../controllers/spdrealisasidetail.controller.js");
  const spdRealisasiPersetujuan = require("../controllers/spdrealisasipersetujuan.controller.js");
//   const spdRealisasiPersetujuan = require("../controllers/spdrealisasipersetujuan.controller.js");

  var router = require("express").Router();

  // Realisasi //
  // Create a new SPD Realisasi Data
  router.post("/", isAuth, spdRealisasi.create);
  // Create a new SPD Realisasi Data
  router.post("/bulk", isAuth, spdRealisasi.bulkCreate);
  // Retrieve all SPD Realisasi
  router.get("/", isAuth, spdRealisasi.findAllByParam);
  // Retrieve one SPD Realisasi
  router.get("/:id", isAuth, spdRealisasi.findOne);
  // Update a SPD Realisasi Data with id
  router.put("/:id", isAuth, spdRealisasi.update);

  // Realisasi Detail //
  // Create a new SPD Realisasi Data
  router.post("/detail", isAuth, spdRealisasiDetail.create);
  // Retrieve all SPD Realisasi
  router.get("/detail", isAuth, spdRealisasiDetail.findAllByParam);
  // Retrieve one SPD Realisasi
  router.get("/detail/:id", isAuth, spdRealisasiDetail.findOne);
  // Update a SPD Realisasi Data with id
  router.put("/detail/:id", isAuth, spdRealisasiDetail.update);

  // Realisasi Persetujuan //
  // Create a new SPD Realisasi Data
  router.post("/persetujuan", isAuth, spdRealisasiPersetujuan.create);
  // Retrieve all SPD Realisasi
  router.get("/persetujuan", isAuth, spdRealisasiPersetujuan.findAllByParam);
  // Retrieve one SPD Realisasi
  router.get("/persetujuan/:id", isAuth, spdRealisasiPersetujuan.findOne);
  // Update a SPD Realisasi Data with id
  router.put("/persetujuan/:id", isAuth, spdRealisasiPersetujuan.update);

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
