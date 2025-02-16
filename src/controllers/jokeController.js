// src/controllers/jokeController.js, Contrôleurs pour gérer les blagues

// const Joke = require("../models/Joke");
// const Joke = require("../models");
const sequelize = require("sequelize");

// ****************************************************************************

const Joke = require("../models/Joke");

// ****************************************************************************
// Ajouter une blague
const addJoke = async (req, res) => {
  try {
    // Extraction des champs 'question' et 'answer' du corps de la requête
    const { question, answer } = req.body;

    // Vérification que les champs requis sont présents
    if (!question || !answer) {
      return res
        .status(400)
        .json({ error: "Les champs 'question' et 'answer' sont requis." });
    }

    // Création de la nouvelle blague dans la base de données
    const newJoke = await Joke.create({ question, answer });

    // Envoi de la réponse avec la blague créée et un statut 201 (Created)
    res.status(201).json(newJoke);
  } catch (error) {
    // Gestion des erreurs et envoi d'une réponse avec un statut 500 (Internal Server Error)
    res.status(500).json({ error: error.message });
  }
};

// ****************************************************************************
// Obtenir toutes les blagues
const getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.status(200).json(jokes);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des blagues" });
  }
};
// ****************************************************************************
// ****************************************************************************
// Obtenir une blague par ID
const getJokeById = async (req, res) => {
  const jokeId = req.params.id;
  try {
    const joke = await Joke.findByPk(req.params.id);
    if (!joke) return res.status(404).json({ error: "Blague non trouvée" });
    res.status(200).json(joke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ****************************************************************************
// Supprimer une blague par ID
const deleteJokeById = async (req, res) => {
  const jokeId = req.params.id;
  try {
    const joke = await Joke.findByPk(jokeId);
    if (!joke) return res.status(404).json({ error: "Blague non trouvée" });
    await joke.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ****************************************************************************
// Mettre à jour une blague par ID
const updateJokeById = async (req, res) => {
  const jokeId = req.params.id;
  try {
    const joke = await Joke.findByPk(jokeId);
    if (!joke) return res.status(404).json({ error: "Blague non trouvée" });
    await joke.update(req.body);
    res.status(200).json(joke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ****************************************************************************
// Obtenir une blague aléatoire
const getRandomJoke = async (req, res) => {
  try {
    // Récupération d'une blague aléatoire directement depuis la base de données
    const randomJoke = await Joke.findOne({ order: sequelize.random() });

    // Vérification si une blague a été trouvée
    if (!randomJoke) {
      return res.status(404).json({ error: "Aucune blague disponible" });
    }

    // Envoi de la blague trouvée en réponse
    res.status(200).json(randomJoke);
  } catch (error) {
    // Gestion des erreurs lors de la récupération
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération d’une blague aléatoire" });
  }
};

module.exports = {
  addJoke,
  getAllJokes,
  getJokeById,
  deleteJokeById,
  updateJokeById,
  getRandomJoke,
};
