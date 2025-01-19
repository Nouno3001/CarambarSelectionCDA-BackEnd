// src/config/bdd.js, Configuration Sequelize et base de données

const { Sequelize } = require("sequelize");

// Connexion à la base de données SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "jokes.sqlite",
});

module.exports = sequelize;
