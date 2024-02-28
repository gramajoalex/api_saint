const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SADEPO extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  SADEPO.init(
    {
      CodUbic: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
      },
      Descrip: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      CodSucu: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      Clase: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      Activo: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      Represent: {
        type: DataTypes.STRING(40),
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
      Telef: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      Pais: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      Estado: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      Ciudad: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      EsVirtual: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      CodAlte: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      Printer: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      Municipio: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      ZipCode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "SADEPO",
      tableName: "SADEPO",
      underscored: false,
      timestamps: false,
    }
  );

  return SADEPO;
};
