const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SATAXES extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  SATAXES.init(
    {
      CodTaxs: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      Descrip: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      MtoTax: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      Activo: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsPorct: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsCosto: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      TipoIVA: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsLibroI: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsPartic: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsTaxVenta: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsTaxCompra: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsFijo: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsReten: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      CodOper: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      MontoMax: {
        type: DataTypes.DECIMAL(28, 3),
        allowNull: false,
        defaultValue: 0,
      },
      Sustraendo: {
        type: DataTypes.DECIMAL(28, 3),
        allowNull: false,
        defaultValue: 0,
      },
      MontoMin: {
        type: DataTypes.DECIMAL(28, 3),
        allowNull: false,
        defaultValue: 0,
      },
      CodFacE: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      EsCorrel: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      Formato: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "SATAXES",
      tableName: "SATAXES",
      timestamps: false,
      underscored: false,
    }
  );

  return SATAXES;
};
