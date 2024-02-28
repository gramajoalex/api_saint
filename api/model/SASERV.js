const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SASERV extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  SASERV.init(
    {
      CodServ: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      CodInst: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      Descrip: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      Descrip2: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      Descrip3: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      Clase: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      Activo: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      Unidad: {
        type: DataTypes.STRING(6),
        allowNull: true,
      },
      Precio1: {
        type: DataTypes.DECIMAL(28, 5),
        allowNull: true,
        defaultValue: 0,
      },
      PrecioI1: {
        type: DataTypes.DECIMAL(28, 5),
        allowNull: true,
        defaultValue: 0,
      },
      Precio2: {
        type: DataTypes.DECIMAL(28, 5),
        allowNull: true,
        defaultValue: 0,
      },
      PrecioI2: {
        type: DataTypes.DECIMAL(28, 5),
        allowNull: true,
        defaultValue: 0,
      },
      Precio3: {
        type: DataTypes.DECIMAL(28, 5),
        allowNull: true,
        defaultValue: 0,
      },
      PrecioI3: {
        type: DataTypes.DECIMAL(28, 5),
        allowNull: true,
        defaultValue: 0,
      },
      Costo: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      EsExento: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsPorCost: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      UsaServ: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      Comision: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      EsPorComi: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      FechaUV: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      FechaUC: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      EsImport: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsReten: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsVenta: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 1,
      },
      EsCompra: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 1,
      },
      PrecioR1: {
        type: DataTypes.DECIMAL(28, 3),
        allowNull: false,
        defaultValue: 0,
      },
      PrecioR2: {
        type: DataTypes.DECIMAL(28, 3),
        allowNull: false,
        defaultValue: 0,
      },
      PrecioR3: {
        type: DataTypes.DECIMAL(28, 3),
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "SASERV",
      tableName: "SASERV",
      timestamps: false,
      underscored: false,
    }
  );

  return SASERV;
};
