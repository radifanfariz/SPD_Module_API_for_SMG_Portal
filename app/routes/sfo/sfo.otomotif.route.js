const { isAuth } = require("../../middlewares/index.js");

module.exports = (app) => {
  const sfoFields = require("../../controllers/sfo/sfo.otomotif.fields.controller.js");
  const sfoSuFields = require("../../controllers/sfo/sfo.otomotif.sufields.controller.js");
  const sfoSuProducts = require("../../controllers/sfo/sfo.otomotif.suproducts.controller.js");

  var router = require("express").Router();

  // Create a new SFO SU Data
  router.post("/fields", isAuth, sfoFields.create);

  // Retrieve SFO Otomotif Data
  router.get("/fields", isAuth, sfoFields.findAll);
  router.get("/sufields", isAuth, sfoSuFields.findAll);
  router.get("/suproducts", isAuth, sfoSuProducts.findAll);
  router.get("/sufields/params", isAuth, sfoSuFields.findAllByParam);
  router.get("/suproducts/params", isAuth, sfoSuProducts.findAllByParam);

  app.use("/api/sfo/otomotif", router);
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
