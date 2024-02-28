const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class SSUSRS extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  SSUSRS.init(
    {
      CodUsua: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      Descrip: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      Movil: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      UsrDta1: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      UsrDta2: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      UsrDta3: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      UsrDta4: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      UsrDta5: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      SData1: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      SData2: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      SData3: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      CodVend: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      IdUserNot: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      Profile: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "SSUSRS",
      tableName: "SSUSRS",
      timestamps: false,
      freezeTableName: true,
    }
  );

  return SSUSRS;
};
