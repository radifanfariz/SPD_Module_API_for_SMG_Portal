module.exports = (sequelize, Sequelize) => {
    const Spdrealisasipersetujuan = sequelize.define(
      "spd_realisasi_persetujuan",
      {
        n_rpersetujuan_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        n_spd_id: {
          type: Sequelize.INTEGER,
        },
        n_rpersetujuan_uangsaku_total: {
          type: Sequelize.DOUBLE,
        },
        n_rpersetujuan_biayapenginapan_total: {
          type: Sequelize.DOUBLE,
        },
        n_rpersetujuan_biayatransport_total: {
          type: Sequelize.DOUBLE,
        },
        n_rpersetujuan_biayalain_total: {
          type: Sequelize.DOUBLE,
        },
        n_rpersetujuan_totalrealisasi: {
          type: Sequelize.DOUBLE,
        },
        n_rpersetujuan_uangmuka: {
          type: Sequelize.DOUBLE,
        },
        n_rpersetujuan_selisih: {
          type: Sequelize.DOUBLE,
        },
        n_rket_id: {
          type: Sequelize.INTEGER,
        },
        c_rpersetujuan_norek: {
          type: Sequelize.STRING,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  
    return Spdrealisasipersetujuan;
  };
  