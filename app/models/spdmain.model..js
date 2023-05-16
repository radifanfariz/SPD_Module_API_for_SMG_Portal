module.exports = (sequelize, Sequelize) => {
    const Spdmain = sequelize.define("spd_main", {
      n_spd_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      n_company_id: {
        type: Sequelize.INTEGER
      },
      n_employee_id: {
        type: Sequelize.INTEGER
      },
      c_spd_hashid: {
        type: Sequelize.STRING
      },
      c_spd_businessunit: {
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
      c_spd_costcenterbeban: {
        type: Sequelize.STRING
      },
      d_spd_tanggalberangkat: {
        type: Sequelize.DATEONLY
      },
      d_spd_tanggalkembali: {
        type: Sequelize.DATEONLY
      },
      c_spd_tujuandinas: {
        type: Sequelize.STRING
      },
      c_spd_keterangandinas: {
        type: Sequelize.STRING
      },
      c_spd_akomodasi: {
        type: Sequelize.STRING
      },
      c_spd_keteranganakomodasi: {
        type: Sequelize.STRING
      },
      n_spd_uangmukajenis: {
        type: Sequelize.INTEGER
      },
      n_spd_uangsaku: {
        type: Sequelize.DOUBLE
      },
      n_spd_uangpenginapan: {
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
      c_spd_atasan: {
        type: Sequelize.STRING
      },
      c_spd_tempatdiajukan: {
        type: Sequelize.STRING
      },
      c_spd_status: {
        type: Sequelize.STRING
      },
      d_spd_tanggalajukan: {
        type: Sequelize.DATEONLY
      },
      c_spd_jenis: {
        type: Sequelize.STRING
      },
      c_spd_identifikasi: {
        type: Sequelize.STRING
      },
    },{
        freezeTableName: true,
        timestamps: false,
    });
  
    return Spdmain;
  };