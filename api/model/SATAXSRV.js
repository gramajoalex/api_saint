const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SATAXSRV extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  SATAXSRV.init(
    {
      CodServ: {
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
      modelName: "SATAXSRV",
      tableName: "SATAXSRV",
      timestamps: false,
      underscored: false,
    }
  );

  return SATAXSRV;
};
