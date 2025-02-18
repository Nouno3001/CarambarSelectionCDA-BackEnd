// src/config/bdd.js, Configuration Sequelize et base de données
import { open } from "sqlite";
import sqlite3 from "sqlite3";

const { Sequelize } = require("sequelize");
// const dotenv = require("dotenv");
// dotenv.config();

// Instance de la base de données

let bddInstance = null;

export async function initDB() {
  bddInstance = await open({
    filename: "bdd/database.sqlite",
    driver: sqlite3.Database,
  });

  if (bddInstance) {
    return bddInstance;
  }

  bddInstance = new Sequelize({
    dialect: "sqlite",
    storage: "bdd.sqlite",
  });

  return bddInstance;
}

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
