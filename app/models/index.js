const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const { SpdmainAkomodasi, SpdmainJenis, SpdmainStatus, SpdmainTransportasi, SpdmainTujuanDinas, SpdmainUangMuka } = require("./spdmain.parts.model.js");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


// main table
db.spdmain = require("./spdmain.model.js")(sequelize, Sequelize);

// nested table
db.spdmainAkomodasi = SpdmainAkomodasi(sequelize, Sequelize);
db.spdmainJenis = SpdmainJenis(sequelize, Sequelize);
db.spdmainStatus = SpdmainStatus(sequelize, Sequelize);
db.spdmainTransportasi = SpdmainTransportasi(sequelize, Sequelize);
db.spdmainTujuandinas = SpdmainTujuanDinas(sequelize, Sequelize);
db.spdmainUangmuka = SpdmainUangMuka(sequelize, Sequelize);

// akomodasi
db.spdmainAkomodasi.hasMany(db.spdmain,{
  foreignKey: 'n_spd_akomodasi_id'
})
db.spdmain.belongsTo(db.spdmainAkomodasi,{
  foreignKey: 'n_spd_akomodasi_id'
})

// jenis
db.spdmainJenis.hasMany(db.spdmain,{
  foreignKey: 'n_spd_jenis_id',as:"spd_main_jenis"
})
db.spdmain.belongsTo(db.spdmainJenis,{
  foreignKey: 'n_spd_jenis_id', as:"spd_main_jenis"
})

// status
db.spdmainStatus.hasMany(db.spdmain,{
  foreignKey: 'n_spd_status_id'
})
db.spdmain.belongsTo(db.spdmainStatus,{
  foreignKey: 'n_spd_status_id'
})

// transportasi
db.spdmainTransportasi.hasMany(db.spdmain, {
  foreignKey: 'n_spd_transportasi_id'
})
db.spdmain.belongsTo(db.spdmainTransportasi,{
  foreignKey: 'n_spd_transportasi_id'
})

// tujuandinas
db.spdmainTujuandinas.hasMany(db.spdmain,{
  foreignKey: 'n_spd_tujuandinas_id',as:"spd_main_tujuandinas"
})
db.spdmain.belongsTo(db.spdmainTujuandinas,{
  foreignKey: 'n_spd_tujuandinas_id',as:"spd_main_tujuandinas"
})

// uangmuka
db.spdmainUangmuka.hasMany(db.spdmain,{
  foreignKey: 'n_spd_uangmuka_id'
})
db.spdmain.belongsTo(db.spdmainUangmuka,{
  foreignKey: 'n_spd_uangmuka_id'
})

module.exports = db;