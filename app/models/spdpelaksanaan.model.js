module.exports = (sequelize, Sequelize) => {
  const Spdpelaksanaan = sequelize.define(
    "spd_pelaksanaan",
    {
      n_pelaksanaan_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      n_spd_id: {
        type: Sequelize.INTEGER,
      },
      d_pelaksanaan_tanggal: {
        type: Sequelize.DATEONLY,
      },
      c_pelaksanaan_aktifitas: {
        type: Sequelize.STRING,
      },
      c_pelaksanaan_keterangan: {
        type: Sequelize.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Spdpelaksanaan;
};
