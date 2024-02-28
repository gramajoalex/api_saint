const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SAITEMFAC extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  SAITEMFAC.init(
    {
      TipoFac: {
        type: DataTypes.STRING(1),
        allowNull: false,
      },
      NumeroD: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      OTipo: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      ONumero: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      Status: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      NroLinea: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      NroLineaC: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      CodItem: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      CodUbic: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      CodMeca: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      CodVend: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      Descrip1: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      Descrip2: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      Descrip3: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      Descrip4: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      Descrip5: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      Descrip6: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      Descrip7: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      Descrip8: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      Descrip9: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      Descrip10: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      Refere: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      Signo: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      CantMayor: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      Cantidad: {
        type: DataTypes.DECIMAL(28, 5),
        allowNull: true,
        defaultValue: 0,
      },
      CantidadO: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      Tara: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      ExistAntU: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      ExistAnt: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      CantidadU: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      CantidadC: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      CantidadA: {
        type: DataTypes.DECIMAL(28, 5),
        allowNull: true,
        defaultValue: 0,
      },
      CantidadUA: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      TotalItem: {
        type: DataTypes.DECIMAL(28, 4),
        allowNull: false,
        defaultValue: 0,
      },
      Costo: {
        type: DataTypes.DECIMAL(28, 5),
        allowNull: true,
        defaultValue: 0,
      },
      Precio: {
        type: DataTypes.DECIMAL(28, 5),
        allowNull: true,
        defaultValue: 0,
      },
      Descto: {
        type: DataTypes.DECIMAL(28, 5),
        allowNull: true,
        defaultValue: 0,
      },
      NroUnicoL: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      NroLote: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      FechaE: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      FechaL: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      FechaV: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      EsServ: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsUnid: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsFreeP: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsPesa: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      EsExento: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      UsaServ: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      DEsLote: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      DEsSeri: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      DEsComp: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      NumeroE: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      CodSucu: {
        type: DataTypes.STRING(5),
        allowNull: false,
        defaultValue: "00000",
      },
      MtoTax: {
        type: DataTypes.DECIMAL(28, 3),
        allowNull: false,
        defaultValue: 0,
      },
      PriceO: {
        type: DataTypes.DECIMAL(28, 3),
        allowNull: false,
        defaultValue: 0,
      },
      MtoTaxO: {
        type: DataTypes.DECIMAL(28, 3),
        allowNull: false,
        defaultValue: 0,
      },
      TipoPVP: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      Factor: {
        type: DataTypes.DECIMAL(28, 3),
        allowNull: false,
        defaultValue: 0,
      },
      ONroLinea: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      ONroLineaC: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      CantidadT: {
        type: DataTypes.DECIMAL(28, 3),
        allowNull: false,
        defaultValue: 0,
      },
      CodUsua: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      TipoData: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      PrecioI: {
        type: DataTypes.DECIMAL(28, 3),
        allowNull: false,
        defaultValue: 0,
      },
      CodAuth: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "SAITEMFAC",
      tableName: "SAITEMFAC",
      timestamps: false,
      underscored: false,
    }
  );

  return SAITEMFAC;
};
