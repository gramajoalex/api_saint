const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SAVEND extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  SAVEND.init(
    {
      CodVend: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      Descrip: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      CodSucu: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      ID3: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      Clase: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      Direc1: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      Direc2: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      Pais: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      Estado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      Ciudad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      Telef: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      Movil: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      Activo: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      Email: {
        type: DataTypes.STRING(60),
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
      EsComiPV: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsComiTV: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsComiTC: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsComiTU: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsComiUT: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsComiDT: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsComiTM: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      TipoID3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      DescOrder: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      Municipio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      ZipCode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      TipoID: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "SAVEND",
      tableName: "SAVEND",
      timestamps: false,
      underscored: false,
    }
  );

  return SAVEND;
};
