const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SACONF extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  SACONF.init(
    {
      CodSucu: {
        type: DataTypes.STRING(5),
        allowNull: false,
      },
      Descrip: {
        type: DataTypes.STRING(80),
        allowNull: false,
      },
      Direc1: {
        type: DataTypes.STRING(80),
        allowNull: true,
      },
      Direc2: {
        type: DataTypes.STRING(80),
        allowNull: true,
      },
      Email: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      Telef: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      RIF: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      NIT: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      Ciudad: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      Estado: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      Pais: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      SPais: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      SEstado: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      SCiudad: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      CodTaxs: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      CostoMes: {
        type: DataTypes.DECIMAL(28, 4),
        defaultValue: 0,
        allowNull: false,
      },
      CorrelPrd: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      MesCurso: {
        type: DataTypes.STRING(6),
        allowNull: true,
      },
      MesTran: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      MesOC: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      MesPrf: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      IdVersion: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      IdVerXtra: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      MesesPtos: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      ValorPtos: {
        type: DataTypes.DECIMAL(28, 4),
        defaultValue: 0,
        allowNull: false,
      },
      FechaUC: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      MtoExtraG: {
        type: DataTypes.DECIMAL(28, 4),
        defaultValue: 0,
        allowNull: false,
      },
      ImpFleteV: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      ImpFleteC: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      AutoReten: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      PorctReten: {
        type: DataTypes.DECIMAL(28, 4),
        defaultValue: 0,
        allowNull: false,
      },
      PedirNCtrl: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      RetenIsrl: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      Redond: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      RedTotal: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      ObliOper: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      PaswLim: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      Adicional: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
      Factor: {
        type: DataTypes.DECIMAL(28, 4),
        defaultValue: 0,
        allowNull: false,
      },
      FactorM: {
        type: DataTypes.DECIMAL(28, 4),
        defaultValue: 0,
        allowNull: false,
      },
      UsaFactorM: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      SimbFac: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      EsMoneda: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      UsaNEL: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      InvConsig: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      PrioridadIC: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      CorrelUNC: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      Imagen: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
      RetenIVA: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      Municipio: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      SMunicipio: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      ZipCode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      IdAppNot: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      NroSerial: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      KeySerial: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      NroEstable: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      ValorPtosV: {
        type: DataTypes.DECIMAL(28, 3),
        defaultValue: 0,
        allowNull: false,
      },
      RUCUser: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      RUCPwd: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      TipoFac: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      CorrelEstac: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      IMailHost: {
        type: DataTypes.STRING(70),
        allowNull: true,
      },
      IMailPort: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      IMailUser: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      IMailPwd: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      IMailFrom: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      IMailSSL: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      FecUCambio: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      TipoEstab: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      CodEstab: {
        type: DataTypes.STRING(4),
        allowNull: true,
      },
      Logo: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
      UsaServ: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
        allowNull: false,
      },
      Clave: {
        type: DataTypes.STRING(128),
        allowNull: true,
      },
      Salt: {
        type: DataTypes.STRING(128),
        allowNull: true,
      },
      CodEmp: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      SincroUlt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      SincroRcv: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      CodRcv: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      FechaUP: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "SACONF",
      tableName: "SACONF",
      underscored: false,
      timestamps: false,
    }
  );

  return SACONF;
};
