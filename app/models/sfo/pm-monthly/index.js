const dbConfig = require("../../../config/sfo/pm-monthly/db.config");

const {
  PmOtomotifProducts,
  PmOtomotifFields,
  PmOtomotifProductsTransactions,
  PmOtomotifFieldsTransactions,
  PmOtomotifBu,
} = require("./pm.otomotif.model.js");
const {
  PmFinserProducts,
  PmFinserFields,
  PmFinserProductsTransactions,
  PmFinserFieldsTransactions,
  PmFinserBu,
} = require("./pm.finser.model");

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
////otomotif////
db.pmOtomotifProducts = PmOtomotifProducts(sequelize, Sequelize);
db.pmOtomotifProductsTransactions = PmOtomotifProductsTransactions(
  sequelize,
  Sequelize
);
db.pmOtomotifFields = PmOtomotifFields(sequelize, Sequelize);
db.pmOtomotifFieldsTransactions = PmOtomotifFieldsTransactions(
  sequelize,
  Sequelize
);
db.pmOtomotifBu = PmOtomotifBu(sequelize, Sequelize);
/////finser////
db.pmFinserProducts = PmFinserProducts(sequelize, Sequelize);
db.pmFinserProductsTransactions = PmFinserProductsTransactions(
  sequelize,
  Sequelize
);
db.pmFinserFields = PmFinserFields(sequelize, Sequelize);
db.pmFinserFieldsTransactions = PmFinserFieldsTransactions(
  sequelize,
  Sequelize
);
db.pmFinserBu = PmFinserBu(sequelize, Sequelize);

/////otomotif/////////////
// products to products transactions
db.pmOtomotifProducts.hasMany(db.pmOtomotifProductsTransactions, {
  foreignKey: "c_product_id", 
  sourceKey:"c_product_id", 
  as: "pm_otomotif_product_transactions",
});
db.pmOtomotifProductsTransactions.belongsTo(db.pmOtomotifProducts, {
  foreignKey: "c_product_id",
  targetKey:"c_product_id",
  as: "pm_otomotif_products",
});
db.pmOtomotifProductsTransactions.hasMany(db.pmOtomotifProducts, {
  foreignKey: "c_product_id",
  sourceKey:"c_product_id", 
});
db.pmOtomotifProducts.belongsTo(db.pmOtomotifProductsTransactions, {
  foreignKey: "c_product_id",
  targetKey:"c_product_id"
});
db.pmOtomotifProductsTransactions.hasMany(db.pmOtomotifBu, {
  foreignKey: "n_bu_id",
  sourceKey:"n_bu_id", 
  as: "pm_otomotif_bu",
});
db.pmOtomotifBu.belongsTo(db.pmOtomotifProductsTransactions, {
  foreignKey: "n_bu_id",
  targetKey:"n_bu_id"
});

// fields to fields transactions
db.pmOtomotifFields.hasMany(db.pmOtomotifFieldsTransactions, {
  foreignKey: "c_field_id",
  sourceKey:"c_field_id", 
  as: "pm_otomotif_field_transactions",
});
db.pmOtomotifFieldsTransactions.belongsTo(db.pmOtomotifFields, {
  foreignKey: "c_field_id",
  targetKey:"c_field_id",
  as: "pm_otomotif_fields",
});
db.pmOtomotifFieldsTransactions.hasMany(db.pmOtomotifFields, {
  foreignKey: "c_field_id",
  sourceKey:"c_field_id", 
});
db.pmOtomotifFields.belongsTo(db.pmOtomotifFieldsTransactions, {
  foreignKey: "c_field_id",
  targetKey:"c_field_id"
});
db.pmOtomotifFieldsTransactions.hasMany(db.pmOtomotifBu, {
  foreignKey: "n_bu_id",
  sourceKey:"n_bu_id", 
  as: "pm_otomotif_bu",
});
db.pmOtomotifBu.belongsTo(db.pmOtomotifFieldsTransactions, {
  foreignKey: "n_bu_id",
  targetKey:"n_bu_id"
});

////finser////////
// products to products transactions
db.pmFinserProducts.hasMany(db.pmOtomotifProductsTransactions, {
  foreignKey: "c_product_id",
  sourceKey:"c_product_id", 
  as: "pm_finser_products_transactions",
});
db.pmFinserProductsTransactions.belongsTo(db.pmFinserProducts, {
  foreignKey: "c_product_id",
  targetKey:"c_product_id",
  as: "pm_finser_products",
});
db.pmFinserProductsTransactions.hasMany(db.pmFinserProducts, {
  foreignKey: "c_product_id",
  sourceKey:"c_product_id", 
});
db.pmFinserProducts.belongsTo(db.pmFinserProductsTransactions, {
  foreignKey: "c_product_id",
  targetKey:"c_product_id",
});
db.pmFinserProductsTransactions.hasMany(db.pmFinserBu, {
  foreignKey: "n_bu_id",
  sourceKey:"n_bu_id", 
  as: "pm_finser_bu",
});
db.pmFinserBu.belongsTo(db.pmFinserProductsTransactions, {
  foreignKey: "n_bu_id",
  targetKey:"n_bu_id"
});

// fields to fields transactions
db.pmFinserFields.hasMany(db.pmFinserFieldsTransactions, {
  foreignKey: "c_field_id",
  sourceKey:"c_field_id", 
  as: "pm_finser_field_transactions",
});
db.pmFinserFieldsTransactions.belongsTo(db.pmFinserFields, {
  foreignKey: "c_field_id",
  targetKey:"c_field_id",
  as: "pm_finser_field",
});
db.pmFinserFieldsTransactions.hasMany(db.pmFinserFields, {
  foreignKey: "c_field_id",
  sourceKey:"c_field_id", 
});
db.pmFinserFields.belongsTo(db.pmFinserFieldsTransactions, {
  foreignKey: "c_field_id",
  targetKey:"c_field_id",
});
db.pmFinserFieldsTransactions.hasMany(db.pmFinserBu, {
  foreignKey: "n_bu_id",
  sourceKey:"n_bu_id", 
  as: "pm_finser_bu",
});
db.pmFinserBu.belongsTo(db.pmFinserFieldsTransactions, {
  foreignKey: "n_bu_id",
  targetKey:"n_bu_id"
});

module.exports = db;
