module.exports = (sequelize, Sequelize) => {
  const Spdrealisasi = sequelize.define(
    "spd_realisasi",
    {
      n_realisasi_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      n_spd_id: {
        type: Sequelize.INTEGER,
      },
      d_realisasi_tanggal: {
        type: Sequelize.DATEONLY,
      },
      n_realisasi_uangsaku: {
        type: Sequelize.DOUBLE,
      },
      n_realisasi_biayapenginapan: {
        type: Sequelize.DOUBLE,
      },
      n_realisasi_biayatransportasi: {
        type: Sequelize.DOUBLE,
      },
      n_realisasi_biayalain: {
        type: Sequelize.DOUBLE,
      },
      n_realisasi_totalbiaya: {
        type: Sequelize.DOUBLE,
      },
      n_realisasi_hrd_uangsaku: {
        type: Sequelize.DOUBLE,
      },
      n_realisasi_hrd_biayapenginapan: {
        type: Sequelize.DOUBLE,
      },
      n_realisasi_hrd_biayatransportasi: {
        type: Sequelize.DOUBLE,
      },
      n_realisasi_hrd_biayalain: {
        type: Sequelize.DOUBLE,
      },
      n_realisasi_hrd_totalbiaya: {
        type: Sequelize.DOUBLE,
      },
      c_realisasi_keterangan: {
        type: Sequelize.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Spdrealisasi;
};
