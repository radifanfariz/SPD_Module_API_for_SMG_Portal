const dbConfig = require("../../config/sfo/db.config.js");

const {
  SfoSu,
  SfoFields,
  SfoProducts,
  SfoSuFields,
  SfoSuProducts,
  SfoTransactions,
  SfoTransactionsFields,
  SfoTransactionsProducts,
} = require("./sfo.otomotif.model.js");

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

// sfo  table
db.sfoSu = SfoSu(sequelize, Sequelize);
db.sfoFields = SfoFields(sequelize, Sequelize);
db.sfoProducts = SfoProducts(sequelize, Sequelize);
db.sfoSuFields = SfoSuFields(sequelize, Sequelize);
db.sfoSuProducts = SfoSuProducts(sequelize, Sequelize);
db.sfoTransactions = SfoTransactions(sequelize, Sequelize);
db.sfoTransactionsFields = SfoTransactionsFields(sequelize, Sequelize);
db.sfoTransactionsProducts = SfoTransactionsProducts(sequelize, Sequelize);

////////////////////////////////////////////////////////////////

// su to suFields
db.sfoSu.hasMany(db.sfoSuFields, {
  foreignKey: "n_id",
  as: "sfo_fields",
});
db.sfoSuFields.belongsTo(db.sfoSu, {
  foreignKey: "n_su_id",
  as: "sfo_fields",
});

// su to products
db.sfoSu.hasMany(db.sfoProducts, {
  foreignKey: "n_id",
  as: "sfo_products",
});
db.sfoProducts.belongsTo(db.sfoSu, {
  foreignKey: "n_su_id",
  as: "sfo_products",
});

// su to suProducts
db.sfoSu.hasMany(db.sfoSuProducts, {
  foreignKey: "n_id",
});
db.sfoSuProducts.belongsTo(db.sfoSu, {
  foreignKey: "n_su_id",
});

// products to suProducts
db.sfoProducts.hasMany(db.sfoSuProducts, {
  foreignKey: "n_id",
});
db.sfoSuProducts.belongsTo(db.sfoProducts, {
  foreignKey: "n_product_id",
});

// su to suFields
db.sfoSu.hasMany(db.sfoSuFields, {
  foreignKey: "n_id",
});
db.sfoSuFields.belongsTo(db.sfoSu, {
  foreignKey: "n_su_id",
});

// fields to suFields
db.sfoFields.hasMany(db.sfoSuFields, {
  foreignKey: "n_id",
});
db.sfoSuFields.belongsTo(db.sfoFields, {
  foreignKey: "n_field_id",
});

// su to transactions
db.sfoSu.hasMany(db.sfoTransactions, {
  foreignKey: "n_id",
});
db.sfoTransactions.belongsTo(db.sfoSu, {
  foreignKey: "n_su_id",
});

// suFields to transactionsFields
db.sfoSuFields.hasMany(db.sfoTransactionsFields, {
  foreignKey: "n_id",
});
db.sfoTransactionsFields.belongsTo(db.sfoSuFields, {
  foreignKey: "n_su_field_id",
});
// transactions to transactionsFields
db.sfoSuFields.hasMany(db.sfoTransactionsFields, {
  foreignKey: "n_id",
});
db.sfoTransactionsFields.belongsTo(db.sfoSuFields, {
  foreignKey: "n_transaction_id",
});

// suProducts to transactionsProducts
db.sfoSuProducts.hasMany(db.sfoTransactionsProducts, {
  foreignKey: "n_id",
});
db.sfoTransactionsProducts.belongsTo(db.sfoSuProducts, {
  foreignKey: "n_su_product_id",
});
// transactions to transactionsProducts
db.sfoSuProducts.hasMany(db.sfoTransactionsProducts, {
  foreignKey: "n_id",
});
db.sfoTransactionsProducts.belongsTo(db.sfoSuProducts, {
  foreignKey: "n_transaction_id",
});

module.exports = db;
