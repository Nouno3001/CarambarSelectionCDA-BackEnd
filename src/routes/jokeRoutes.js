const express = require("express");
const router = express.Router();
const jokeController = require("../controllers/jokeController");

// Ajouter une blague
router.post("/blagues", jokeController.addJoke);

// Obtenir toutes les blagues
router.get("/blagues", jokeController.getAllJokes);

// Obtenir une blague par ID
router.get("/blagues/:id", jokeController.getJokeById);

// Obtenir une blague aléatoire
router.get("/blagues/random", jokeController.getRandomJoke);

module.exports = router;
