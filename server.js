const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  failOnErrors: true,
  definition: {
    swagger: "2.0",
    openapi: "3.1.0",
    info: {
      title: "SPD API for SMG Portal with Swagger",
      version: "1.0.0",
      description:
        "SPD API for SMG Portal made with Express and documented with Swagger",
      contact: {
        name: "SPD API",
      },
    },
    servers: [
      {
        url: "http://localhost:9999/api/spdmain",
      },
    ],
  },
  apis: ["./app/routes/spd/spdmain.route.js"],
};

const swaggerspecs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerspecs, { explorer: true })
);

const db = require("./app/models/spd");
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// var corsOptions = {
//   origin: "http://localhost:8080"
// };
let corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
// app.use(bodyParser.json()); //alternative

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true })); //alternative

// routes of api SPD
require("./app/routes/spd/spdmain.route")(app);
require("./app/routes/spd/spdpelaksanaan.route")(app);
require("./app/routes/spd/spdrealisasi.route")(app);
require("./app/routes/spd/spdrealisasidetail.route")(app);
require("./app/routes/spd/spdrealisasipersetujuan.route")(app);
require("./app/routes/spd/spddocs.route")(app);

// routes of api SFO
require("./app/routes/sfo/sfo.otomotif.route")(app);

// routes of api PM-Otomotif
require("./app/routes/pm-otomotif/pm.otomotif.route")(app);

// set port, listen for requests
const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
