// src/models/Joke.js , Modèle Sequelize pour les blagues

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Joke = sequelize.define("Joke", {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Joke;
