// Importer le module express
const express = require("express");
// Importer le module path
const path = require("path");
// Importer le module body-parser
const bodyParser = require("body-parser");
// Importer le module CORS
const cors = require("cors");
// Importer les routes
const jokeRoutes = require("./routes/jokeRoutes");
// Swagger
const swaggerUi = require("swagger-ui-express");
// Importer le document Swagger
const swaggerDocument = require("./swagger/swagger.json");
// Charger les variables d'environnement
require("dotenv").config();

// Créer une application express
const app = express();

// Définir le répertoire statique
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "index.html")));

// Définir le moteur de vue sur Pug
app.set("view engine", "pug");

// Définir le répertoire des vues
app.set("views", path.join(__dirname, "views"));

// Définir les routes
// Route pour la page d'accueil
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
