exports.PmCommentsFinser = (sequelize, Sequelize) => {
  const PmCommentsFinser = sequelize.define(
    "pm_finser_comments",
    {
      n_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      c_weekly_reference: {
        type: Sequelize.STRING,
      },
      c_weekly_reference_id: {
        type: Sequelize.STRING,
      },
      c_weekly_cell_id: {
        type: Sequelize.STRING,
      },
      c_comments: {
        type: Sequelize.INTEGER,
      },
      n_weekly_id: {
        type: Sequelize.INTEGER,
      },
      d_created_at: {
        type: Sequelize.DATEONLY,
      },
      d_updated_at: {
        type: Sequelize.DATEONLY,
      },
      n_created_by: {
        type: Sequelize.INTEGER,
      },
      n_updated_by: {
        type: Sequelize.INTEGER,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return PmCommentsFinser;
};
exports.PmWeeklyFinser = (sequelize, Sequelize) => {
  const PmWeeklyFinser = sequelize.define(
    "pm_finser_weekly",
    {
      n_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      n_bu_id: {
        type: Sequelize.INTEGER,
      },
      c_bu_name: {
        type: Sequelize.STRING,
      },
      n_weekField_id: {
        type: Sequelize.INTEGER,
      },
      c_weekField_name: {
        type: Sequelize.STRING,
      },
      d_periode: {
        type: Sequelize.DATEONLY,
      },
      n_monthlyBudgetBooking: {
        type: Sequelize.DOUBLE,
      },
      n_achBudgetBooking: {
        type: Sequelize.DOUBLE,
      },
      n_booking: {
        type: Sequelize.DOUBLE,
      },
      n_monthlyBudgetOsar: {
        type: Sequelize.DOUBLE,
      },
      n_achBudgetOsar: {
        type: Sequelize.DOUBLE,
      },
      n_osar130: {
        type: Sequelize.DOUBLE,
      },
      n_osar3190: {
        type: Sequelize.DOUBLE,
      },
      n_osar90: {
        type: Sequelize.DOUBLE,
      },
      n_osarCurrent: {
        type: Sequelize.DOUBLE,
      },
      n_osarKospin: {
        type: Sequelize.DOUBLE,
      },
      n_osarKsu: {
        type: Sequelize.DOUBLE,
      },
      n_osarOthers: {
        type: Sequelize.DOUBLE,
      },
      n_osarInstitusi: {
        type: Sequelize.DOUBLE,
      },
      n_osarIndividu: {
        type: Sequelize.DOUBLE,
      },
      n_osar: {
        type: Sequelize.DOUBLE,
      },
      n_dpkEkternal: {
        type: Sequelize.DOUBLE,
      },
      n_dpkFamily: {
        type: Sequelize.DOUBLE,
      },
      n_totalDPK: {
        type: Sequelize.DOUBLE,
      },
      n_totalBudgetBooking: {
        type: Sequelize.DOUBLE,
      },
      c_cell_id: {
        type: Sequelize.STRING,
      },
      d_created_at: {
        type: Sequelize.DATEONLY,
      },
      d_updated_at: {
        type: Sequelize.DATEONLY,
      },
      n_created_by: {
        type: Sequelize.INTEGER,
      },
      n_updated_by: {
        type: Sequelize.INTEGER,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return PmWeeklyFinser;
};

exports.PmFinserBu = (sequelize, Sequelize) => {
  const PmFinserBu = sequelize.define(
    "pm_finser_bu",
    {
      n_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      n_bu_id: {
        type: Sequelize.INTEGER,
        unique: true,
      },
      c_bu_name: {
        type: Sequelize.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return PmFinserBu;
};
