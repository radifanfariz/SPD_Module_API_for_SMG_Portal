const dbConfig = require("../../../config/sfo/pm-weekly/db.config.js");

const {
  PmCommentsOtomotif,
  PmOtomotifBu,
  PmOtomotifFields,
  PmOtomotifFieldsTransactions,
  PmOtomotifDashboardWeekly
} = require("./pm.otomotif.model.js");
const {
  PmCommentsFinser,
  PmFinserBu,
  PmFinserFields,
  PmFinserFieldsTransactions,
  PmFinserDashboardWeekly,
  PmFinserDashboardWeeklyBooking
} = require("./pm.finser.model.js");
const { PmComments } = require("./pm.comments.model.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// sfo pm-otomotif table
db.pmCommentsOtomotif = PmCommentsOtomotif(sequelize, Sequelize);
db.pmOtomotifBu = PmOtomotifBu(sequelize, Sequelize);
db.pmOtomotifFields = PmOtomotifFields(sequelize, Sequelize);
db.pmOtomotifFieldsTransactions = PmOtomotifFieldsTransactions(sequelize, Sequelize);
db.pmOtomotifDashboardWeekly = PmOtomotifDashboardWeekly(sequelize, Sequelize);
// sfo pm-finser table
db.pmCommentsFinser = PmCommentsFinser(sequelize, Sequelize);
db.pmFinserBu = PmFinserBu(sequelize, Sequelize);
db.pmFinserFields = PmFinserFields(sequelize, Sequelize);
db.pmFinserFieldsTransactions = PmFinserFieldsTransactions(sequelize, Sequelize);
db.pmFinserDashboardWeekly = PmFinserDashboardWeekly(sequelize, Sequelize);
db.PmFinserDashboardWeeklyBooking = PmFinserDashboardWeeklyBooking(sequelize, Sequelize);
// sfo pm-comments table
db.pmComments = PmComments(sequelize, Sequelize);

////////////////////////////////////////////////////////////////

module.exports = db;
