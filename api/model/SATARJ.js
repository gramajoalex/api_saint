const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SATARJ extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  SATARJ.init(
    {
      CodTarj: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      Descrip: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      Clase: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      Activo: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      Impuesto: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      DiasDif: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      BaseReten: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      RetenIVA: {
        type: DataTypes.DECIMAL(28, 3),
        allowNull: false,
        defaultValue: 0,
      },
      TipoIns: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      Monto: {
        type: DataTypes.DECIMAL(28, 3),
        allowNull: false,
        defaultValue: 0,
      },
      TipoTra: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      Moneda: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      Minimo: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      TipoAtr: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      TipoPag: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      CodAlte: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      TipoDef: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      ImpuestoD: {
        type: DataTypes.DECIMAL(28, 3),
        allowNull: false,
        defaultValue: 0,
      },
      TipoData: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      Settings: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "SATARJ",
      tableName: "SATARJ",
      timestamps: false,
      underscored: false,
    }
  );

  return SATARJ;
};
