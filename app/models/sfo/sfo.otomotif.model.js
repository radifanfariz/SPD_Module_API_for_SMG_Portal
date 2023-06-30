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
