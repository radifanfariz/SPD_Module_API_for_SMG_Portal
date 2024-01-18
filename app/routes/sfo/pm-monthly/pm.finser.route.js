const { isAuth } = require("../../../middlewares/index.js");

module.exports = (app) => {
  const pmFinserProducts = require("../../../controllers/sfo/pm-monthly/pm.finser.products.controller.js");
  const pmFinserFields = require("../../../controllers/sfo/pm-monthly/pm.finser.fields.controller.js");
  const pmFinserBu = require("../../../controllers/sfo/pm-monthly/pm.finser.bu.controller.js");

  var router = require("express").Router();

  // Create a new BU Data
  router.post("/finserBu", isAuth, pmFinserBu.createBu);
  router.post("/finserBu/bulk", isAuth, pmFinserBu.bulkCreateBu);
  // Create a new Products Data
  router.post("/products", isAuth, pmFinserProducts.createProduct);
  router.post("/products/bulk", isAuth, pmFinserProducts.bulkCreateProduct);
  router.post("/productTransactions", isAuth, pmFinserProducts.createProductTransaction);
  router.post("/productTransactions/bulk", isAuth, pmFinserProducts.bulkCreateProductTransaction);
   // Create a new Fields Data
  router.post("/fields", isAuth, pmFinserFields.createField);
  router.post("/fields/bulk", isAuth, pmFinserFields.bulkCreateField);
  router.post("/fieldTransactions", isAuth, pmFinserFields.createFieldTransaction);
  router.post("/fieldTransactions/bulk", isAuth, pmFinserFields.bulkCreateFieldTransaction);


  // Retrieve BU Data
  router.get("/finserBu", isAuth, pmFinserBu.findAll);
  router.post("/finserBu/params", isAuth, pmFinserBu.findAllByParam);

  // Retrieve Products Data
  router.get("/products", isAuth, pmFinserProducts.findAllProduct);
  router.post("/products/params", isAuth, pmFinserProducts.findAllByParam);
  router.get("/productTransactions", isAuth, pmFinserProducts.findAll);
  router.post("/productTransactions/params", isAuth, pmFinserProducts.findAllByParam);

  // Retrieve Fields Data
  router.get("/fields", isAuth, pmFinserFields.findAllField);
  router.post("/fields/params", isAuth, pmFinserFields.findAllByParam);
  router.get("/fieldTransactions", isAuth, pmFinserFields.findAll);
  router.post("/fieldTransactions/params", isAuth, pmFinserFields.findAllByParam);

  app.use("/api/pm/finser/monthly", router);
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
