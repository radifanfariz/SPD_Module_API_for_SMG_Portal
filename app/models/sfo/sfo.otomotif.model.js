exports.SfoComments = (sequelize, Sequelize) => {
  const SfoComments = sequelize.define(
    "sfo_otomotif_comments",
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

  return SfoComments;
};
exports.SfoWeekly = (sequelize, Sequelize) => {
  const SfoWeekly = sequelize.define(
    "sfo_otomotif_weekly",
    {
      n_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      n_su_id: {
        type: Sequelize.INTEGER,
      },
      d_period: {
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

  return SfoWeekly;
};

exports.SfoSu = (sequelize, Sequelize) => {
  const SfoSu = sequelize.define(
    "sfo_otomotif_su",
    {
      n_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      c_su_name: {
        type: Sequelize.STRING,
      },
      c_su_type: {
        type: Sequelize.STRING,
      },
      n_bu_id: {
        type: Sequelize.INTEGER,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return SfoSu;
};

exports.SfoFields = (sequelize, Sequelize) => {
  const SfoFields = sequelize.define(
    "sfo_otomotif_fields",
    {
      n_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      c_field_name: {
        type: Sequelize.STRING,
      },
      c_field_type: {
        type: Sequelize.STRING,
      },
      c_field_subtype: {
        type: Sequelize.STRING,
      },
      c_field_rule: {
        type: Sequelize.STRING,
      },
      c_field_id: {
        type: Sequelize.STRING,
      },
      c_field_formula: {
        type: Sequelize.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return SfoFields;
};

exports.SfoProducts = (sequelize, Sequelize) => {
  const SfoProducts = sequelize.define(
    "sfo_otomotif_products",
    {
      n_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      n_su_id: {
        type: Sequelize.INTEGER,
      },
      c_product_name: {
        type: Sequelize.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return SfoProducts;
};

exports.SfoSuFields = (sequelize, Sequelize) => {
  const SfoSuFields = sequelize.define(
    "sfo_otomotif_su_fields",
    {
      n_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      n_su_id: {
        type: Sequelize.INTEGER,
      },
      n_field_id: {
        type: Sequelize.INTEGER,
      },
      n_seq: {
        type: Sequelize.INTEGER,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return SfoSuFields;
};

exports.SfoSuProducts = (sequelize, Sequelize) => {
  const SfoSuProducts = sequelize.define(
    "sfo_otomotif_su_products",
    {
      n_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      n_su_id: {
        type: Sequelize.INTEGER,
      },
      n_product_id: {
        type: Sequelize.INTEGER,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return SfoSuProducts;
};

exports.SfoTransactions = (sequelize, Sequelize) => {
    const SfoTransactions = sequelize.define(
      "sfo_otomotif_transactions",
      {
        n_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        d_period: {
          type: Sequelize.DATEONLY,
        },
        n_su_id: {
          type: Sequelize.INTEGER,
        },
        d_created_at: {
          type: Sequelize.DATEONLY,
          defaultValue: Sequelize.NOW,
        },
        d_updated_at: {
          type: Sequelize.DATEONLY,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  
    return SfoTransactions;
  };
exports.SfoTransactionsFields = (sequelize, Sequelize) => {
    const SfoTransactionsFields = sequelize.define(
      "sfo_otomotif_transactions_fields",
      {
        n_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        n_su_field_id: {
          type: Sequelize.INTEGER,
        },
        n_transaction_id: {
          type: Sequelize.INTEGER,
        },
        n_field_value: {
          type: Sequelize.DOUBLE,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  
    return SfoTransactionsFields;
  };
exports.SfoTransactionsProducts = (sequelize, Sequelize) => {
    const SfoTransactionsProducts = sequelize.define(
      "sfo_otomotif_transactions_products",
      {
        n_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        n_su_product_id: {
          type: Sequelize.INTEGER,
        },
        n_transaction_id: {
          type: Sequelize.INTEGER,
        },
        n_total_unit: {
          type: Sequelize.INTEGER,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  
    return SfoTransactionsProducts;
  };
