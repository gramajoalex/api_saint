const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SATAXVTA extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  SATAXVTA.init(
    {
      TipoFac: {
        type: DataTypes.STRING(1),
        allowNull: false,
        primaryKey: true,
      },
      NumeroD: {
        type: DataTypes.STRING(20),
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
      MtoTax: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      TGravable: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      CodSucu: {
        type: DataTypes.STRING(5),
        allowNull: false,
        defaultValue: "00000",
        primaryKey: true,
      },
      EsReten: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "SATAXVTA",
      tableName: "SATAXVTA",
      freezeTableName: true,
      timestamps: false, // Assuming you do not want automatic timestamp columns
    }
  );

  return SATAXVTA;
};
