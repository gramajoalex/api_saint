const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SAFACT extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  SAFACT.init(
    {
      TipoFac: {
        type: DataTypes.STRING(1),
        allowNull: false,
      },
      NumeroD: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      NroUnico: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      NroCtrol: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      Status: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      CodSucu: {
        type: DataTypes.STRING(5),
        allowNull: false,
      },
      CodEsta: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      CodUsua: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      Signo: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      FechaT: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      OTipo: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      ONumero: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      TipoTra: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      NumeroC: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      NumeroT: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      NumeroR: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      FechaD1: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      NumeroD1: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      NumeroK: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      NumeroF: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      NumeroP: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      NumeroZ: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      EsExPickup: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      Moneda: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      Factor: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      MontoMEx: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      CodClie: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      CodVend: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      CodUbic: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      Descrip: {
        type: DataTypes.STRING(60),
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
      Direc3: {
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
      ID3: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      NIT: {
        type: DataTypes.STRING(15),
        allowNull: true,
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
      Fletes: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      TGravable: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      TExento: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      CostoPrd: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      CostoSrv: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      DesctoP: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      RetenIVA: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      FechaR: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      FechaI: {
        type: DataTypes.DATE,
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
      MtoTotal: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      Contado: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      Credito: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      CancelI: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      CancelA: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      CancelE: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      CancelC: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      CancelT: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      CancelG: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      CancelP: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      Cambio: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      EsConsig: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      MtoExtra: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      ValorPtos: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      Descto1: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      PctAnual: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      MtoInt1: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      Descto2: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      PctManejo: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      MtoInt2: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      SaldoAct: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      MtoPagos: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      MtoNCredito: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      MtoNDebito: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      MtoFinanc: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      DetalChq: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      TotalPrd: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      TotalSrv: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      OrdenC: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      CodOper: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      NGiros: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      NMeses: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      MtoComiVta: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      MtoComiCob: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      MtoComiVtaD: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      MtoComiCobD: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      Notas1: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      Notas2: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      Notas3: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      Notas4: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      Notas5: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      Notas6: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      Notas7: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      Notas8: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      Notas9: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      Notas10: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      NumeroE: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      Municipio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      CodConv: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      ZipCode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      EsCorrel: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      AutSRI: {
        type: DataTypes.STRING(80),
        allowNull: true,
      },
      NroEstable: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      PtoEmision: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      TipoTraE: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      TGravable0: {
        type: DataTypes.DECIMAL(28, 3),
        allowNull: false,
        defaultValue: 0,
      },
      EstadoFE: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      CodTran: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      FromTran: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      TipoDev: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      CodTarj: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      NroTurno: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      CancelTips: {
        type: DataTypes.DECIMAL(28, 3),
        allowNull: false,
        defaultValue: 0,
      },
      NroUnicoL: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      CodAlte: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      Parcial: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      NumeroU: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      ImpuestoD: {
        type: DataTypes.DECIMAL(28, 3),
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "SAFACT",
      tableName: "SAFACT",
      timestamps: false,
      underscored: false,
    }
  );

  return SAFACT;
};
