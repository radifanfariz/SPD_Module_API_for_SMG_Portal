module.exports = (sequelize, Sequelize) => {
    const Spdmain = sequelize.define("spd_main", {
      n_spd_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      n_spd_company_id: {
        type: Sequelize.INTEGER
      },
      c_spd_companynama: {
        type: Sequelize.STRING
      },
      n_spd_hrisId: {
        type: Sequelize.INTEGER
      },
      n_spd_userId: {
        type: Sequelize.INTEGER
      },
      c_spd_hashid: {
        type: Sequelize.STRING
      },
      c_spd_nama: {
        type: Sequelize.STRING
      },
      c_spd_nik: {
        type: Sequelize.STRING
      },
      c_spd_unit: {
        type: Sequelize.STRING
      },
      c_spd_costcenterkaryawan: {
        type: Sequelize.STRING
      },
      c_spd_jabatan: {
        type: Sequelize.STRING
      },
      c_spd_nohp: {
        type: Sequelize.STRING
      },
      c_spd_pangkat: {
        type: Sequelize.STRING
      },
      c_spd_grade: {
        type: Sequelize.STRING
      },
      c_spd_tempattujuan: {
        type: Sequelize.STRING
      },
      c_spd_costcenterpenanggung: {
        type: Sequelize.STRING
      },
      d_spd_tanggalberangkat: {
        type: Sequelize.DATEONLY
      },
      d_spd_tanggalkembali: {
        type: Sequelize.DATEONLY
      },
      n_spd_tujuandinas_id: {
        type: Sequelize.INTEGER
      },
      n_spd_transportasi_id: {
        type: Sequelize.INTEGER
      },
      c_spd_keterangantransportasi: {
        type: Sequelize.STRING
      },
      c_spd_keterangandinas: {
        type: Sequelize.STRING
      },
      n_spd_akomodasi_id: {
        type: Sequelize.INTEGER
      },
      c_spd_keteranganakomodasi: {
        type: Sequelize.STRING
      },
      // n_spd_uangjenis: {
      //   type: Sequelize.INTEGER
      // },
      n_spd_uangmuka_id: {
        type: Sequelize.INTEGER
      },
      n_spd_uangsaku: {
        type: Sequelize.DOUBLE
      },
      n_spd_biayapenginapan: {
        type: Sequelize.DOUBLE
      },
      n_spd_biayatransport: {
        type: Sequelize.DOUBLE
      },
      n_spd_biayalain: {
        type: Sequelize.DOUBLE
      },
      n_spd_totalbiaya: {
        type: Sequelize.DOUBLE
      },
      c_spd_banknama: {
        type: Sequelize.STRING
      },
      c_spd_banknorek: {
        type: Sequelize.STRING
      },
      c_spd_bankatasnama: {
        type: Sequelize.STRING
      },
      c_spd_atasannama: {
        type: Sequelize.STRING
      },
      n_spd_atasan_hrisId: {
        type: Sequelize.INTEGER
      },
      n_spd_atasan_userId: {
        type: Sequelize.INTEGER
      },
      c_spd_tempatdiajukan: {
        type: Sequelize.STRING
      },
      n_spd_status_id: {
        type: Sequelize.INTEGER
      },
      d_spd_tanggalajukan: {
        type: Sequelize.DATEONLY
      },
      n_spd_jenis_id: {
        type: Sequelize.INTEGER
      },
      c_spd_nomorsurat: {
        type: Sequelize.STRING
      },
      n_spd_approval_id: {
        type: Sequelize.INTEGER
      },
      // n_realisasi_id: {
      //   type: Sequelize.INTEGER
      // },
    },{
        freezeTableName: true,
        timestamps: false,
    });
  
    return Spdmain;
  };