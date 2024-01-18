const dbConfig = require("../../../config/sfo/pm-weekly/db.config.js");

const {
  PmCommentsOtomotif,
  PmWeeklyOtomotif,
  PmOtomotifBu
} = require("./pm.otomotif.model.js");
const {
  PmCommentsFinser,
  PmWeeklyFinser,
  PmFinserBu
} = require("./pm.finser.model.js");

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
db.pmWeeklyOtomotif = PmWeeklyOtomotif(sequelize, Sequelize);
db.pmCommentsOtomotif = PmCommentsOtomotif(sequelize, Sequelize);
db.pmOtomotifBu = PmOtomotifBu(sequelize, Sequelize);
// sfo pm-finser table
db.pmWeeklyFinser = PmWeeklyFinser(sequelize, Sequelize);
db.pmCommentsFinser = PmCommentsFinser(sequelize, Sequelize);
db.pmFinserBu = PmFinserBu(sequelize, Sequelize);

////////////////////////////////////////////////////////////////

// weekly to comments otomotif
db.pmWeeklyOtomotif.hasMany(db.pmCommentsOtomotif, {
  foreignKey: "n_id",
  as: "pm_weekly",
});
db.pmCommentsOtomotif.belongsTo(db.pmWeeklyOtomotif, {
  foreignKey: "n_weekly_id",
  as: "pm_weekly",
});
db.pmWeeklyOtomotif.hasMany(db.pmCommentsOtomotif, {
  foreignKey: "n_weekly_id",
  as: "pm_comments",
});
db.pmCommentsOtomotif.belongsTo(db.pmWeeklyOtomotif, {
  foreignKey: "n_id",
  as: "pm_comments",
});
// weekly to comments finser
db.pmWeeklyFinser.hasMany(db.pmCommentsFinser, {
  foreignKey: "n_id",
  as: "pm_weekly",
});
db.pmCommentsFinser.belongsTo(db.pmWeeklyFinser, {
  foreignKey: "n_weekly_id",
  as: "pm_weekly",
});
db.pmWeeklyFinser.hasMany(db.pmCommentsFinser, {
  foreignKey: "n_weekly_id",
  as: "pm_comments",
});
db.pmCommentsFinser.belongsTo(db.pmWeeklyFinser, {
  foreignKey: "n_id",
  as: "pm_comments",
});

module.exports = db;
