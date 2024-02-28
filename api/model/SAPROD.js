const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SAPROD extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  SAPROD.init(
    {
      CodProd: {
        type: DataTypes.STRING(15),
        allowNull: false,
        primaryKey: true,
      },
      Descrip: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      CodInst: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      Activo: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      Descrip2: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      Descrip3: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      Refere: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      Marca: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      Unidad: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      UndEmpaq: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      CantEmpaq: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      Precio1: {
        type: DataTypes.DECIMAL(28, 5),
        allowNull: true,
        defaultValue: 0,
      },
      Precio2: {
        type: DataTypes.DECIMAL(28, 5),
        allowNull: true,
        defaultValue: 0,
      },
      PrecioU2: {
        type: DataTypes.DECIMAL(28, 5),
        allowNull: true,
        defaultValue: 0,
      },
      Precio3: {
        type: DataTypes.DECIMAL(28, 5),
        allowNull: true,
        defaultValue: 0,
      },
      PrecioU3: {
        type: DataTypes.DECIMAL(28, 5),
        allowNull: true,
        defaultValue: 0,
      },
      PrecioU: {
        type: DataTypes.DECIMAL(28, 5),
        allowNull: true,
        defaultValue: 0,
      },
      CostAct: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      CostPro: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      CostAnt: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      Existen: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      ExUnidad: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      ExistenCon: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      ExUnidadCon: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      Compro: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      Pedido: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      Minimo: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      Maximo: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      Tara: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      DEsComp: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      DEsComi: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      DEsSeri: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      DEsLote: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      DEsVence: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      DEsImport: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      Seriales: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      FechaUV: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      FechaUC: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "SAPROD",
      tableName: "SAPROD",
      timestamps: false,
      indexes: [
        {
          name: "SAPROD_IX1",
          fields: ["Descrip"],
        },
        {
          name: "SAPROD_IX2",
          fields: ["Refere"],
        },
      ],
    }
  );

  return SAPROD;
};
