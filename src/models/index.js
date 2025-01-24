const { Sequelize } = require("sequelize");
const config = require("../config/config");

const sequelize = new Sequelize(config.development);

sequelize
  .authenticate()
  .then(() => console.log("Connexion à SQLite réussie"))
  .catch((err) => console.error("Erreur de connexion :", err));

module.exports = sequelize;
