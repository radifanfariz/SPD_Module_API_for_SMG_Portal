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
      n_realisasi_uangsaku: {
        type: Sequelize.DOUBLE,
      },
      c_realisasi_uangsaku_ket: {
        type: Sequelize.STRING,
      },
      n_realisasi_biayapenginapan: {
        type: Sequelize.DOUBLE,
      },
      c_realisasi_biayapenginapan_ket: {
        type: Sequelize.STRING,
      },
      n_realisasi_biayatransport: {
        type: Sequelize.DOUBLE,
      },
      c_realisasi_biayatransport_ket: {
        type: Sequelize.STRING,
      },
      n_realisasi_biayalain: {
        type: Sequelize.DOUBLE,
      },
      c_realisasi_biayalain_ket: {
        type: Sequelize.STRING,
      },
      d_realisasi_tanggal: {
        type: Sequelize.DATEONLY,
      },
      n_realisasi_subtotal: {
        type: Sequelize.DOUBLE,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Spdrealisasi;
};
