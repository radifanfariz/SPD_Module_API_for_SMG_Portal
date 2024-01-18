exports.PmComments = (sequelize, Sequelize) => {
  const PmComments = sequelize.define(
    "pm_comments",
    {
      n_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      c_comment_id: {
        type: Sequelize.STRING,
      },
      c_comment_text: {
        type: Sequelize.STRING,
      },
      n_user_id: {
        type: Sequelize.INTEGER,
      },
      c_user_id: {
        type: Sequelize.STRING,
      },
      c_bu_id: {
        type: Sequelize.STRING,
      },
      n_bu_id: {
        type: Sequelize.INTEGER,
      },
      c_type: {
        type: Sequelize.STRING,
      },
      c_flag: {
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

  return PmComments;
};
