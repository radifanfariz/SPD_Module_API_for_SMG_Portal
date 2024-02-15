const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

module.exports = (app) => {
  const router = require("express").Router();

  // middleware
  const spdMainDocument = YAML.load(process.env.PATH_ROOT +"/docs/spd/spd_main.yml");
  const spdMainPartDocument = YAML.load(process.env.PATH_ROOT +"/docs/spd/spd_main_parts.yml");
  const spdPelaksanaanDocument = YAML.load(process.env.PATH_ROOT +"/docs/spd/spd_main_pelaksanaan.yml");
  const spdRealisasiDocument = YAML.load(process.env.PATH_ROOT +"/docs/spd/spd_main_realisasi.yml");
  const spdRealisasiDetailDocument = YAML.load(process.env.PATH_ROOT +"/docs/spd/spd_main_realisasi_detail.yml");
  const spdRealisasiPersetujuanDocument = YAML.load(process.env.PATH_ROOT +"/docs/spd/spd_main_realisasi_persetujuan.yml");

 
  router.use(
    "/spdmain",
    swaggerUi.serve,
    (...args) => swaggerUi.setup(spdMainDocument)(...args)
  );
  router.use(
    "/spdmain-parts",
    swaggerUi.serve,
    (...args) => swaggerUi.setup(spdMainPartDocument)(...args)
  );
  router.use(
    "/spdpelaksanaan",
    swaggerUi.serve,
    (...args) => swaggerUi.setup(spdPelaksanaanDocument)(...args)
  );
  router.use(
    "/spdrealisasi",
    swaggerUi.serve,
    (...args) => swaggerUi.setup(spdRealisasiDocument)(...args)
  );
  router.use(
    "/spdrealisasi-detail",
    swaggerUi.serve,
    (...args) => swaggerUi.setup(spdRealisasiDetailDocument)(...args)
  );
  router.use(
    "/spdrealisasi-persetujuan",
    swaggerUi.serve,
    (...args) => swaggerUi.setup(spdRealisasiPersetujuanDocument)(...args)
  );

  app.use("/api/docs", router);
};