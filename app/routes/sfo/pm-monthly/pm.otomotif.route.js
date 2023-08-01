const { isAuth } = require("../../../middlewares/index.js");

module.exports = (app) => {
  const pmOtomotifProducts = require("../../../controllers/sfo/pm-monthly/pm.otomotif.products.controller.js");
  const pmOtomotifFields = require("../../../controllers/sfo/pm-monthly/pm.otomotif.fields.controller.js");

  var router = require("express").Router();

  // Create a new Products Data
  router.post("/products", isAuth, pmOtomotifProducts.createProduct);
  router.post("/productsTransactions", isAuth, pmOtomotifProducts.createProductTransaction);
   // Create a new Fields Data
  router.post("/fields", isAuth, pmOtomotifFields.createField);
  router.post("/fieldsTransactions", isAuth, pmOtomotifFields.createFieldTransaction);


  // Retrieve Products Data
  router.get("/products", isAuth, pmOtomotifProducts.findAll);
  router.get("/products/params", isAuth, pmOtomotifProducts.findAllByParam);

  // Retrieve Fields Data
  router.get("/fields", isAuth, pmOtomotifFields.findAll);
  router.get("/fields/params", isAuth, pmOtomotifFields.findAllByParam);

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
