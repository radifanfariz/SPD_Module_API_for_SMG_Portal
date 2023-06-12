module.exports = (sequelize, Sequelize) => {
    const Spdrealisasidetail = sequelize.define(
      "spd_realisasi_detail",
      {
        n_rdetail_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        n_spd_id: {
          type: Sequelize.INTEGER,
        },
        n_rdetail_uangsaku_total: {
          type: Sequelize.DOUBLE,
        },
        n_rdetail_biayapenginapan_total: {
          type: Sequelize.DOUBLE,
        },
        n_rdetail_biayatransport_total: {
          type: Sequelize.DOUBLE,
        },
        n_rdetail_biayalain_total: {
          type: Sequelize.DOUBLE,
        },
        n_rdetail_totalrealisasi: {
          type: Sequelize.DOUBLE,
        },
        n_rdetail_uangmuka: {
          type: Sequelize.DOUBLE,
        },
        n_rdetail_selisih: {
          type: Sequelize.DOUBLE,
        },
        n_rket_id: {
          type: Sequelize.INTEGER,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  
    return Spdrealisasidetail;
  };
  