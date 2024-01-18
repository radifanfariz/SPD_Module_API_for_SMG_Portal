const { isAuth } = require("../../../middlewares/index.js");

module.exports = (app) => {
  const pmOtomotifProducts = require("../../../controllers/sfo/pm-monthly/pm.otomotif.products.controller.js");
  const pmOtomotifFields = require("../../../controllers/sfo/pm-monthly/pm.otomotif.fields.controller.js");
  const pmOtomotifBu = require("../../../controllers/sfo/pm-monthly/pm.otomotif.bu.controller.js");

  var router = require("express").Router();

  // Create a new BU Data
  router.post("/otomotifBu", isAuth, pmOtomotifBu.createBu);
  router.post("/otomotifBu/bulk", isAuth, pmOtomotifBu.bulkCreateBu);
  // Create a new Products Data
  router.post("/products", isAuth, pmOtomotifProducts.createProduct);
  router.post("/products/bulk", isAuth, pmOtomotifProducts.bulkCreateProduct);
  router.post("/productTransactions", isAuth, pmOtomotifProducts.createProductTransaction);
  router.post("/productTransactions/bulk", isAuth, pmOtomotifProducts.bulkCreateProductTransaction);
   // Create a new Fields Data
  router.post("/fields", isAuth, pmOtomotifFields.createField);
  router.post("/fields/bulk", isAuth, pmOtomotifFields.bulkCreateField);
  router.post("/fieldTransactions", isAuth, pmOtomotifFields.createFieldTransaction);
  router.post("/fieldTransactions/bulk", isAuth, pmOtomotifFields.bulkCreateFieldTransaction);


  // Retrieve BU Data
  router.get("/otomotifBu", isAuth, pmOtomotifBu.findAll);
  router.post("/otomotifBu/params", isAuth, pmOtomotifBu.findAllByParam);

  // Retrieve Products Data
  router.get("/products", isAuth, pmOtomotifProducts.findAllProduct);
  router.post("/products/params", isAuth, pmOtomotifProducts.findAllByParam);
  router.get("/productTransactions", isAuth, pmOtomotifProducts.findAll);
  router.post("/productTransactions/params", isAuth, pmOtomotifProducts.findAllByParam);

  // Retrieve Fields Data
  router.get("/fields", isAuth, pmOtomotifFields.findAllField);
  router.post("/fields/params", isAuth, pmOtomotifFields.findAllByParam);
  router.get("/fieldTransactions", isAuth, pmOtomotifFields.findAll);
  router.post("/fieldTransactions/params", isAuth, pmOtomotifFields.findAllByParam);

  app.use("/api/pm/otomotif/monthly", router);
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
