const dbConfig = require("../../../config/sfo/pm-monthly/db.config");

const {
PmOtomotifProducts,
PmOtomotifFields,
PmOtomotifProductsTransactions,
PmOtomotifFieldsTransactions
} = require("./pm.otomotif.model.js");

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

// pm table
db.pmOtomotifProducts = PmOtomotifProducts(sequelize, Sequelize)
db.pmOtomotifProductsTransactions = PmOtomotifProductsTransactions(sequelize, Sequelize)
db.pmOtomotifFields = PmOtomotifFields(sequelize, Sequelize)
db.PmOtomotifFieldsTransactions = PmOtomotifFieldsTransactions(sequelize, Sequelize)

// products to products transactions
db.pmOtomotifProducts.hasMany(db.pmOtomotifProductsTransactions, {
  foreignKey: "n_id",
  as: "pm_otomotif_products",
});
db.pmOtomotifProductsTransactions.belongsTo(db.pmOtomotifProducts, {
  foreignKey: "n_product_id",
  as: "pm_otomotif_products",
});

// fields to fields transactions
db.pmOtomotifFields.hasMany(db.PmOtomotifFieldsTransactions, {
  foreignKey: "n_id",
  as: "pm_otomotif_fields",
});
db.PmOtomotifFieldsTransactions.belongsTo(db.pmOtomotifFields, {
  foreignKey: "n_field_id",
  as: "pm_otomotif_fields",
});

module.exports = db;
