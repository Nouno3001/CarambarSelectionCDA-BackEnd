const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const jokeRoutes = require("./routes/jokeRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json");
require("dotenv").config();

const app = express();

// Définir le moteur de vue sur Pug
app.set("view engine", "pug");

// Définir le répertoire des vues
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Accueil",
    message: "Bienvenue sur notre site!",
  });
});
app.use(
  cors({
    origin: "https://nouno3001.github.io/CarambarSelectionCDA/",
  })
);

app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/api", jokeRoutes); // On préfixe les routes par /api

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
