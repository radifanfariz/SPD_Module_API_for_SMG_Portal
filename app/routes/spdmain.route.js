const { isAuth } = require("../middlewares/index.js");

module.exports = (app) => {
  const spdmain = require("../controllers/spdmain.controller.js");
  const spdmainParts = require("../controllers/spdmain.parts.controller.js");
  const spdPelaksanaan = require("../controllers/spdpelaksanaan.controller.js");
  const spdRealisasi = require("../controllers/spdrealisasi.controller.js");

  var router = require("express").Router();

  // Create a new SPD Data
  router.post("/", isAuth, spdmain.create);

  // Retrieve all SPD Data
  router.get("/", isAuth, spdmain.findAll);
  router.get("/pagination", isAuth, spdmain.findAllPaging);
  router.get("/table", isAuth, spdmain.findAllForTable);
  router.get("/table/pagination", isAuth, spdmain.findAllForTablePaging);
  router.get("/akomodasi", isAuth, spdmainParts.findAllAkomodasi);
  router.get("/jenis", isAuth, spdmainParts.findAllJenis);
  router.get("/status", isAuth, spdmainParts.findAllStatus);
  router.get("/transportasi", isAuth, spdmainParts.findAllTransportasi);
  router.get("/tujuandinas", isAuth, spdmainParts.findAllTujuanDinas);
  router.get("/uangmuka", isAuth, spdmainParts.findAllUangMuka);
  router.get("/jenisbiaya", isAuth, spdmainParts.findAllJenisBiaya);

  // Retrieve all published SPD Data
  // router.get("/published", spdmain.findAllPublished);

  // Retrieve a single SPD Data with id
  router.get("/:id", isAuth, spdmain.findOne);

  // Update a SPD Data with id
  router.put("/:id", isAuth, spdmain.update);
  router.put("/after-created/:id", isAuth, spdmain.updateAfterCreated);

  // Delete a SPD Data with id
  router.delete("/:id", isAuth, spdmain.delete);

  // Pelaksanaan //
  // Create a new SPD Pelaksanaan Data
  router.post("/pelaksanaan", isAuth, spdPelaksanaan.create);
  // Retrieve all SPD Pelaksanaan
  router.get("/pelaksanaan", isAuth, spdPelaksanaan.findAllByParam);
  // Update a SPD Pelaksanaan Data with id
  router.put("/pelaksanaan/:id", isAuth, spdPelaksanaan.update);

  // Realisasi //
  // Create a new SPD Realisasi Data
  router.post("/realisasi", isAuth, spdRealisasi.create);
  // Retrieve all SPD Realisasi
  router.get("/realisasi", isAuth, spdRealisasi.findAllByParam);
  // Update a SPD Realisasi Data with id
  router.put("/realisasi/:id", isAuth, spdRealisasi.update);

  app.use("/api/spdmain", router);
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
