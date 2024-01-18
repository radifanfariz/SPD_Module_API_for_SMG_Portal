exports.PmOtomotifProducts = (sequelize, Sequelize) => {
  const PmOtomotifProducts = sequelize.define(
    "pm_otomotif_products",
    {
      n_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      n_bu_id: {
        type: Sequelize.INTEGER,
      },
      c_rule: {
        type: Sequelize.STRING,
      },
      c_product_name: {
        type: Sequelize.STRING,
      },
      c_product_id: {
        type: Sequelize.STRING,
        unique: true,
      },
      c_identification_id: {
        type: Sequelize.STRING,
      },
      c_product_type: {
        type: Sequelize.STRING,
      },
      b_product_isshow: {
        type: Sequelize.BOOLEAN,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ["c_product_id", "c_product_type", "n_bu_id"],
        },
      ],
    }
  );

  return PmOtomotifProducts;
};
exports.PmOtomotifProductsTransactions = (sequelize, Sequelize) => {
  const PmOtomotifProductsTransactions = sequelize.define(
    "pm_otomotif_products_transactions",
    {
      n_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      d_periode: {
        type: Sequelize.DATEONLY,
        unique: true,
      },
      n_bu_id: {
        type: Sequelize.INTEGER,
      },
      n_product_id: {
        type: Sequelize.INTEGER,
      },
      c_product_id: {
        type: Sequelize.STRING,
      },
      n_product_value: {
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
      indexes: [
        {
          unique: true,
          fields: ["d_periode", "c_product_id", "n_product_id", "n_bu_id"],
        },
      ],
    }
  );

  return PmOtomotifProductsTransactions;
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
      n_bu_id: {
        type: Sequelize.INTEGER,
      },
      c_rule: {
        type: Sequelize.STRING,
      },
      c_field_name: {
        type: Sequelize.STRING,
      },
      c_field_id: {
        type: Sequelize.STRING,
        unique: true,
      },
      c_field_type: {
        type: Sequelize.STRING,
      },
      c_identification_id: {
        type: Sequelize.STRING,
      },
      b_field_isshow: {
        type: Sequelize.BOOLEAN,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ["c_field_id", "c_field_type", "n_bu_id"],
        },
      ],
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
      d_periode: {
        type: Sequelize.DATEONLY,
        unique:true
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
      n_field_value: {
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
      indexes: [
        {
          unique: true,
          fields: ["d_periode", "c_field_id", "n_field_id", "n_bu_id"],
        },
      ],
    }
  );

  return PmOtomotifFieldsTransactions;
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
