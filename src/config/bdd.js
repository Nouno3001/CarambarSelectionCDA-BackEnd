// src/config/bdd.js, Configuration Sequelize et base de données

const { Sequelize } = require("sequelize");

// Connexion à la base de données SQLite
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "sqlite",
    storage: ".src/config/jokes.sqlite",
    logging: false,
  }
);

module.exports = sequelize;
