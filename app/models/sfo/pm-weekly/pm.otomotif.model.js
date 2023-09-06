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

exports.PmOtomotifBu = (sequelize, Sequelize) => {
  const PmOtomotifBu = sequelize.define(
    "pm_otomotif_bu",
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

  return PmOtomotifBu;
};

exports.PmOtomotifFields = (sequelize, Sequelize) => {
  const PmOtomotifFields = sequelize.define(
    "pm_otomotif_fields",
    {
      n_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      n_field_id: {
        type: Sequelize.INTEGER,
      },
      c_field_id: {
        type: Sequelize.STRING,
      },
      c_field_name: {
        type: Sequelize.STRING,
      },
      j_field_rules: {
        type: Sequelize.JSON,
      },
      j_field_bu: {
        type: Sequelize.JSON,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return PmOtomotifFields;
};
exports.PmOtomotifFieldsTransactions = (sequelize, Sequelize) => {
  const PmOtomotifFieldsTransactions = sequelize.define(
    "pm_otomotif_fields_transactions",
    {
      n_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      n_bu_id: {
        type: Sequelize.INTEGER,
      },
      n_field_id: {
        type: Sequelize.INTEGER,
      },
      c_field_id: {
        type: Sequelize.STRING,
      },
      c_periode: {
        type: Sequelize.STRING,
      },
      d_periode: {
        type: Sequelize.DATEONLY,
      },
      n_field_value: {
        type: Sequelize.DOUBLE,
      },
      // d_created_at: {
      //   type: Sequelize.DATEONLY,
      // },
      // d_updated_at: {
      //   type: Sequelize.DATEONLY,
      // },
      // n_created_by: {
      //   type: Sequelize.INTEGER,
      // },
      // n_updated_by: {
      //   type: Sequelize.INTEGER,
      // },
    },
    {
      freezeTableName: true,
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ["c_periode", "c_field_id", "n_field_id", "n_bu_id"],
        },
      ],
    }
  );

  return PmOtomotifFieldsTransactions;
};

exports.PmOtomotifDashboardWeekly = (sequelize, Sequelize) => {
  const PmOtomotifDashboardWeekly = sequelize.define(
    "dashboard_pm_otomotif_weekly",
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
      n_field_id: {
        type: Sequelize.INTEGER,
      },
      c_field_id: {
        type: Sequelize.STRING,
      },
      c_field_name: {
        type: Sequelize.STRING,
      },
      c_periode: {
        type: Sequelize.STRING,
      },
      d_periode: {
        type: Sequelize.DATEONLY,
      },
      n_field_value: {
        type: Sequelize.DOUBLE,
      },
      j_field_rules: {
        type: Sequelize.JSON,
      },
      j_field_bu: {
        type: Sequelize.JSON,
      },
      // d_created_at: {
      //   type: Sequelize.DATEONLY,
      // },
      // d_updated_at: {
      //   type: Sequelize.DATEONLY,
      // },
      // n_created_by: {
      //   type: Sequelize.INTEGER,
      // },
      // n_updated_by: {
      //   type: Sequelize.INTEGER,
      // },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return PmOtomotifDashboardWeekly;
};
