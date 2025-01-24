require("dotenv").config();

module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./bdd.sqlite",
  },
};
