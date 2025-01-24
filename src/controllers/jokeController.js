// src/controllers/jokeController.js, Contrôleurs pour gérer les blagues

const Joke = require("../models/Joke");

// Ajouter une blague
exports.addJoke = async (req, res) => {
  try {
    // const { content } = req.body;
    const { question, answer } = req.body;
    // const joke = await Joke.create({ content });
    const newjoke = await Joke.create({ question, answer });
    res.status(201).json(newJoke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir toutes les blagues
exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.status(200).json(jokes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir une blague par ID
exports.getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findByPk(req.params.id);
    if (!joke) return res.status(404).json({ error: "Blague non trouvée" });
    res.status(200).json(joke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir une blague aléatoire
exports.getRandomJoke = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    if (!jokes.length)
      return res.status(404).json({ message: "Aucune blague disponible" });
    const randomIndex = Math.floor(Math.random() * jokes.length);
    res.status(200).json(jokes[randomIndex]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
