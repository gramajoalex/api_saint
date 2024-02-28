const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SAITEO extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  SAITEO.init(
    {
      NumeroD: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      NroUnico: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      CodItem: {
        type: DataTypes.STRING(15),
        allowNull: false,
        primaryKey: true,
      },
      TipoOfe: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      Medida: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      Monto: {
        type: DataTypes.DECIMAL(28, 4),
        defaultValue: 0.0,
        allowNull: false,
      },
      Comision: {
        type: DataTypes.DECIMAL(28, 4),
        defaultValue: 0.0,
        allowNull: false,
      },
      Desde: {
        type: DataTypes.DECIMAL(28, 4),
        defaultValue: 0.0,
        allowNull: false,
      },
      Hasta: {
        type: DataTypes.DECIMAL(28, 4),
        defaultValue: 0.0,
        allowNull: false,
      },
      TipoAtr: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      EsUnid: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      CodAlte: {
        type: DataTypes.STRING(15),
      },
      CodSucu: {
        type: DataTypes.STRING(5),
      },
      CantidadO: {
        type: DataTypes.DECIMAL(28, 3),
        defaultValue: 0.0,
        allowNull: false,
      },
      TipoTra: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      PrecioI: {
        type: DataTypes.DECIMAL(28, 3),
        defaultValue: 0.0,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "SAITEO",
      tableName: "SAITEO",
      freezeTableName: true,
      timestamps: false,
    }
  );

  return SAITEO;
};
