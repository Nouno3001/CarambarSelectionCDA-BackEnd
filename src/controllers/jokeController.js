// src/controllers/jokeController.js, Contrôleurs pour gérer les blagues

// const Joke = require("../models/Joke");
const Joke = require("../models");

// Ajouter une blague
exports.addJoke = async (req, res) => {
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
  const jokeId = req.params.id;
  try {
    const joke = await Joke.findByPk(req.params.id);
    if (!joke) return res.status(404).json({ error: "Blague non trouvée" });
    res.status(200).json(joke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

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

export default getRandomJoke;

// module.exports = {
//   getJokes,
//   getJokeById,
//   getRandomJoke,
//   addJoke
// };
