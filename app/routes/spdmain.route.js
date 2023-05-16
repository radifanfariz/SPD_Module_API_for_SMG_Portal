const { isAuth } = require("../middlewares/index.js");

module.exports = (app) => {
  const spdmain = require("../controllers/spdmain.controller.js");

  var router = require("express").Router();

  // Create a new SPD Data
  router.post("/", isAuth, spdmain.create);

  // Retrieve all SPD Data
  router.get("/", isAuth, spdmain.findAll);
  router.get("/pagination", isAuth, spdmain.findAllPaging);
  router.get("/table", isAuth, spdmain.findAllForTable);
  router.get("/table/pagination", isAuth, spdmain.findAllForTablePaging);

  // Retrieve all published SPD Data
  // router.get("/published", spdmain.findAllPublished);

  // Retrieve a single SPD Data with id
  router.get("/:id", isAuth, spdmain.findOne);

  // Update a SPD Data with id
  router.put("/:id", isAuth, spdmain.update);
  router.put("/after-created/:id", isAuth, spdmain.updateAfterCreated);

  // Delete a SPD Data with id
  router.delete("/:id", isAuth, spdmain.delete);

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
