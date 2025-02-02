# CarambarSelectionCDA-BackEnd
 # (I) - Structure du projet (Backend)
 <pre>
📂 backend/ (Dossier principal du backend)
├── 📂 src/ (Dossier des fichiers sources)
│   ├── 📂 config/ (Configuration de la BDD SQLite & Sequelize)
│   │   ├── 📄 database.js (Configuration de la connexion à la BDD)
│   ├── 📂 models/ (Modèles Sequelize pour la BDD)
│   │   ├── 📄 Joke.js (Modèle Sequelize pour les blagues)
│   ├── 📂 controllers/ (Gestion des requêtes HTTP)
│   │   ├── 📄 jokeController.js (Contrôleur des endpoints blagues)
│   ├── 📂 routes/ (Définition des routes API)
│   │   ├── 📄 jokeRoutes.js (Routes pour gérer les blagues)
│   ├── 📂 swagger/ (Documentation Swagger pour l’API)
│   │   ├── 📄 swagger.json (Fichier de documentation API)
│   ├── 📄 app.js (Configuration principale d’Express)
│   ├── 📄 server.js (Lancement du serveur Node.js)
├── 📄 package.json (Fichier de configuration Node.js)
├── 📄 README.md (Documentation du projet)
</pre>
<!-- ************************************************************** -->
# (II) - Installation & Configuration du projet
# 1️- Créer le projet et initialiser Node.js

# Crée un dossier pour le projet
mkdir backend && cd backend

# Initialise un projet Node.js avec un fichier package.json
npm init -y

# Cette commande crée un fichier package.json qui va gérer nos dépendances et scripts.

# 2️- Installer les dépendances
# On installe Express (serveur web), Sequelize (ORM pour la base de données), SQLite3 (base de données légère) et Swagger (documentation API).

npm install express sequelize sqlite3 cors body-parser dotenv swagger-ui-express

# Explication des dépendances :
 
 express → Framework web pour gérer notre API
 sequelize → ORM pour interagir avec la BDD SQLite
 sqlite3 → Base de données légère et rapide
 cors → Gère les permissions pour autoriser le Front à appeler l’API
 body-parser → Permet de lire les requêtes JSON
 dotenv → Charge les variables d’environnement
 swagger-ui-express → Documentation API interactive

 

<!-- ************************************************************** -->

# 3️- Explication des fichiers principaux
# Configuration de la BDD avec Sequelize
 
 backend/src/config/database.js
 Ce fichier initialise la connexion avec une base SQLite stockée dans ( database.sqlite ) .