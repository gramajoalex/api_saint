const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SAINSTA extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  SAINSTA.init(
    {
      CodInst: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Descrip: {
        type: DataTypes.STRING(40),
      },
      CodAlte: {
        type: DataTypes.STRING(200),
      },
      Nivel: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      InsPadre: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      Descto: {
        type: DataTypes.DECIMAL(28, 4),
        defaultValue: 0.0,
        allowNull: false,
      },
      DEsComp: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      DEsSeri: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      DEsLote: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      DEsComi: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      DEsCorrel: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      DigitosC: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      DEsTabla: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      TipoIns: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      EdoKC: {
        type: DataTypes.STRING(3),
      },
    },
    {
      sequelize,
      modelName: "SAINSTA",
      tableName: "SAINSTA",
      freezeTableName: true,
      timestamps: false,
    }
  );

  return SAINSTA;
};
