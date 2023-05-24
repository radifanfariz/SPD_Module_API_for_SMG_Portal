exports.SpdmainAkomodasi = (sequelize, Sequelize) => {
    const SpdmainAkomodasi = sequelize.define(
      "spd_main_akomodasi",
      {
        n_spd_akomodasi_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        e_spd_akomodasi: {
          type: Sequelize.STRING
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  
    return SpdmainAkomodasi;
  };
  
  exports.SpdmainJenis = (sequelize, Sequelize) => {
    const SpdmainJenis = sequelize.define(
      "spd_main_jenis",
      {
        n_spd_jenis_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        e_spd_jenis: {
          type: Sequelize.STRING
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  
    return SpdmainJenis;
  };

  exports.SpdmainStatus = (sequelize, Sequelize) => {
    const SpdmainStatus = sequelize.define(
      "spd_main_status",
      {
        n_spd_status_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        e_spd_status: {
          type: Sequelize.STRING
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  
    return SpdmainStatus;
  };

  exports.SpdmainTransportasi = (sequelize, Sequelize) => {
    const SpdmainTransportasi = sequelize.define(
      "spd_main_transportasi",
      {
        n_spd_transportasi_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        e_spd_transportasi: {
          type: Sequelize.STRING
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  
    return SpdmainTransportasi;
  };

  exports.SpdmainTujuanDinas = (sequelize, Sequelize) => {
    const SpdmainTujuanDinas = sequelize.define(
      "spd_main_tujuandinas",
      {
        n_spd_tujuandinas_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        e_spd_tujuandinas: {
          type: Sequelize.STRING
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  
    return SpdmainTujuanDinas;
  };

  exports.SpdmainUangMuka = (sequelize, Sequelize) => {
    const SpdmainUangMuka = sequelize.define(
      "spd_main_uangmuka",
      {
        n_spd_uangmuka_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        e_spd_uangmuka: {
          type: Sequelize.STRING
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  
    return SpdmainUangMuka;
  };
  
  
  
  
  