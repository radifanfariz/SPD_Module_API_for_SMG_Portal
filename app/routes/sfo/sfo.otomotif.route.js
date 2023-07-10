const { isAuth } = require("../../middlewares/index.js");

module.exports = (app) => {
  const sfoWeekly = require("../../controllers/sfo/sfo.otomotif.weekly.controller.js");
  const sfoComments = require("../../controllers/sfo/sfo.otomotif.comments.controller.js");
  const sfoSu = require("../../controllers/sfo/sfo.otomotif.su.controller.js");
  const sfoFields = require("../../controllers/sfo/sfo.otomotif.fields.controller.js");
  const sfoProducts = require("../../controllers/sfo/sfo.otomotif.products.controller.js");
  const sfoTransactions = require("../../controllers/sfo/sfo.otomotif.transactions.controller.js");
  const sfoSuFields = require("../../controllers/sfo/sfo.otomotif.sufields.controller.js");
  const sfoSuProducts = require("../../controllers/sfo/sfo.otomotif.suproducts.controller.js");
  const sfoTransactionsFields = require("../../controllers/sfo/sfo.otomotif.transactionsfields.controller.js");
  const sfoTransactionsProducts = require("../../controllers/sfo/sfo.otomotif.transactionsproducts.controller.js");

  var router = require("express").Router();

  // Create a new SFO SU Data
  router.post("/fields", isAuth, sfoFields.create);
  router.post("/weekly", isAuth, sfoWeekly.create);
  router.post("/comments", isAuth, sfoComments.create);

  // Retrieve SFO Otomotif Data
  router.get("/weekly", isAuth, sfoWeekly.findAll);
  router.get("/weekly/params", isAuth, sfoWeekly.findAllByParam);
  router.get("/comments", isAuth, sfoComments.findAll);
  router.get("/comments/params", isAuth, sfoComments.findAllByParam);
  router.get("/su", isAuth, sfoSu.findAll);
  router.get("/fields", isAuth, sfoFields.findAll);
  router.get("/products", isAuth, sfoProducts.findAll);
  router.get("/transactions", isAuth, sfoTransactions.findAll);
  router.get("/sufields", isAuth, sfoSuFields.findAll);
  router.get("/suproducts", isAuth, sfoSuProducts.findAll);
  router.get("/transactionsFields", isAuth, sfoTransactionsFields.findAll);
  router.get("/transactionsFields/params", isAuth, sfoTransactionsFields.findAllByParam);
  router.get("/transactionsProducts", isAuth, sfoTransactionsProducts.findAll);
  router.get("/transactionsProducts/params", isAuth, sfoTransactionsProducts.findAllByParam);
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
