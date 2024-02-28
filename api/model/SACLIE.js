const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SACLIE extends Model {
    static associate(models) {
      // Aquí puedes definir relaciones, por ejemplo:
      // models.SACLIE.hasMany(models.OtherModel, { foreignKey: 'CodClie', as: 'otherModels' });
    }
  }
  SACLIE.init(
    {
      CodClie: {
        type: DataTypes.STRING(15),
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
      Activo: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
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
      Email: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      Fax: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      NIT: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      CodZona: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      CodVend: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      CodConv: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      TipoCli: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      TipoPVP: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      IntMora: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsCredito: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      LimiteCred: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      DiasCred: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      EsToleran: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      DiasTole: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      FechaE: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      Observa: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      Saldo: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      SaldoPtos: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      MontoMax: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      MtoMaxCred: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      PagosA: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      PromPago: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      RetenIVA: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      Descto: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      FechaUV: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      MontoUV: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      NumeroUV: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      FechaUP: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      MontoUP: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      NumeroUP: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      EsMoneda: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EdoKC: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      CodAlte: {
        type: DataTypes.STRING(15),
        allowNull: true,
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
      DescripExt: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      TipoID: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsReten: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      TipoReg: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "SACLIE",
      tableName: "SACLIE",
      underscored: false,
      timestamps: false,
    }
  );

  return SACLIE;
};
