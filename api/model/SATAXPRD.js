const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class SATAXPRD extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  SATAXPRD.init(
    {
      CodProd: {
        type: DataTypes.STRING(15),
        allowNull: false,
        primaryKey: true,
      },
      CodTaxs: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      Monto: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      EsPorct: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "SATAXPRD",
      tableName: "SATAXPRD",
      freezeTableName: true,
      timestamps: false,
    }
  );

  return SATAXPRD;
};
