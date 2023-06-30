exports.SpdrealisasiKetJenis = (sequelize, Sequelize) => {
    const SpdrealisasiKetJenis = sequelize.define(
      "spd_realisasi_ket_jenis",
      {
        n_rket_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        e_rket_jenis: {
          type: Sequelize.STRING
        },
        c_rket_ket: {
          type: Sequelize.STRING
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  
    return SpdrealisasiKetJenis;
  };
  
  
  
  
  