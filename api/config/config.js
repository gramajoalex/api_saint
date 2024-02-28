require("dotenv").config();

// config/config.js
module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    dialectOptions: {
      options: {
        encrypt: true,
        trustServerCertificate: true, // Necesario para SQL Server. No recomendado para producción
      },
    },
  },
  // Puedes agregar más entornos aquí (test, production, etc.)
};
