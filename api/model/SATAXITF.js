const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SATAXITF extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  SATAXITF.init(
    {
      TipoFac: {
        type: DataTypes.STRING(1),
        allowNull: false,
      },
      NumeroD: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      NroLinea: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      NroLineaC: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      CodTaxs: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      CodItem: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      Monto: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      TGravable: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      MtoTax: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      CodSucu: {
        type: DataTypes.STRING(5),
        allowNull: false,
        defaultValue: "00000",
      },
    },
    {
      sequelize,
      modelName: "SATAXITF",
      tableName: "SATAXITF",
      timestamps: false,
      underscored: false,
    }
  );

  return SATAXITF;
};
