const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const jokeRoutes = require("./routes/jokeRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json");
require("dotenv").config();

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/api", jokeRoutes); // On préfixe les routes par /api

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
