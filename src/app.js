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

// Middleware

// Middleware pour logger les requêtes
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Middleware pour gérer les erreurs 404
app.use((req, res, next) => {
  res.status(404).send("Désolé, la page demandée n'existe pas");
});

// Middleware pour gérer les erreurs 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Quelque chose s'est mal passé!");
});

// Autoriser les requêtes CORS
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
