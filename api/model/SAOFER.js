const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SAOFER extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  SAOFER.init(
    {
      NumeroD: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      Descrip: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      CodSucu: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      CodEsta: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      CodUsua: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      TipoOfe: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      Activo: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      Autori: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      Respon: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      FechaE: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      FechaV: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      Frecuencia: {
        type: DataTypes.STRING(7),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "SAOFER",
      tableName: "SAOFER",
      timestamps: false,
      underscored: false,
    }
  );

  return SAOFER;
};
