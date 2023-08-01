exports.PmCommentsOtomotif = (sequelize, Sequelize) => {
  const PmCommentsOtomotif = sequelize.define(
    "pm_otomotif_comments",
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

  return PmCommentsOtomotif;
};
exports.PmWeeklyOtomotif = (sequelize, Sequelize) => {
  const PmWeeklyOtomotif = sequelize.define(
    "pm_otomotif_weekly",
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
      d_periode: {
        type: Sequelize.DATEONLY,
      },
      n_monthlyBudget: {
        type: Sequelize.INTEGER,
      },
      n_w1: {
        type: Sequelize.INTEGER,
      },
      n_w2: {
        type: Sequelize.INTEGER,
      },
      n_w3: {
        type: Sequelize.INTEGER,
      },
      n_w4: {
        type: Sequelize.INTEGER,
      },
      n_totalBudget: {
        type: Sequelize.INTEGER,
      },
      n_achBudget: {
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

  return PmWeeklyOtomotif;
};
