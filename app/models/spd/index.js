const dbConfig = require("../../config/spd/db.config.js");

const Sequelize = require("sequelize");
const { SpdmainAkomodasi, SpdmainJenis, SpdmainStatus, SpdmainTransportasi, SpdmainTujuanDinas, SpdmainUangMuka, SpdmainJenisBiaya } = require("./spdmain.parts.model.js");
const { SpdrealisasiKetJenis } = require("./spdrealisasi.parts.model.js");
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

// support table
db.spdpelaksanaan = require("./spdpelaksanaan.model.js")(sequelize, Sequelize);
db.spdrealisasi = require("./spdrealisasi.model.js")(sequelize, Sequelize);
db.spdrealisasidetail = require("./spdrealisasidetail.model.js")(sequelize, Sequelize);
db.spdrealisasipersetujuan = require("./spdrealisasipersetujuan.model.js")(sequelize, Sequelize);

// spdmain part table
db.spdmainAkomodasi = SpdmainAkomodasi(sequelize, Sequelize);
db.spdmainJenis = SpdmainJenis(sequelize, Sequelize);
db.spdmainStatus = SpdmainStatus(sequelize, Sequelize);
db.spdmainTransportasi = SpdmainTransportasi(sequelize, Sequelize);
db.spdmainTujuandinas = SpdmainTujuanDinas(sequelize, Sequelize);
db.spdmainUangmuka = SpdmainUangMuka(sequelize, Sequelize);
db.spdmainJenisBiaya = SpdmainJenisBiaya(sequelize, Sequelize);

// spdrealisasi part table
db.spdrealisasiKetJenis = SpdrealisasiKetJenis(sequelize,Sequelize);

////////////////////////////////////////////////////////////////

// pelaksanaan to spdmain
db.spdmain.hasMany(db.spdpelaksanaan,{
  foreignKey: 'n_spd_id', as: "spd_main"
})
db.spdpelaksanaan.belongsTo(db.spdmain,{
  foreignKey: 'n_spd_id',as: "spd_main"
})

// realisasi to spdmain
db.spdmain.hasMany(db.spdrealisasi,{
  foreignKey: 'n_spd_id'
})
db.spdrealisasi.belongsTo(db.spdmain,{
  foreignKey: 'n_spd_id'
})

// realisasidetail to spdmain
db.spdmain.hasMany(db.spdrealisasidetail,{
  foreignKey: 'n_spd_id'
})
db.spdrealisasidetail.belongsTo(db.spdmain,{
  foreignKey: 'n_spd_id'
})

// realisasipersetujuan to spdmain
db.spdmain.hasMany(db.spdrealisasipersetujuan,{
  foreignKey: 'n_spd_id'
})
db.spdrealisasipersetujuan.belongsTo(db.spdmain,{
  foreignKey: 'n_spd_id'
})

// realisasiketjenis to realisasidetail
db.spdrealisasiKetJenis.hasMany(db.spdrealisasidetail,{
  foreignKey: 'n_rket_id', as: "spd_realisasi_ketjenis"
})
db.spdrealisasidetail.belongsTo(db.spdrealisasiKetJenis,{
  foreignKey: 'n_rket_id', as: "spd_realisasi_ketjenis"
})
// realisasiketjenis to realisasipersetujuan
db.spdrealisasiKetJenis.hasMany(db.spdrealisasipersetujuan,{
  foreignKey: 'n_rket_id'
})
db.spdrealisasipersetujuan.belongsTo(db.spdrealisasiKetJenis,{
  foreignKey: 'n_rket_id', as: "spd_realisasi_ketjenis"
})


///////////////////////////////////////////////////////
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