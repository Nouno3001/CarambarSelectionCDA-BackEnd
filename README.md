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

<!-- ************************************************************** -->

# 2️- Installer les dépendances
# On installe Express (serveur web), Sequelize (ORM pour la base de données), SQLite3 (base de données légère) et Swagger (documentation API).

npm install express sequelize sqlite3 cors body-parser dotenv swagger-ui-express

# Explication des dépendances :
 <pre>
 express → Framework web pour gérer notre API.
 sequelize → ORM pour interagir avec la BDD SQLite.
 sqlite3 → Base de données légère et rapide.
 cors → Gère les permissions pour autoriser le Front à appeler l’API.
 body-parser → Permet de lire les requêtes JSON.
 dotenv → Charge les variables d’environnement.
 swagger-ui-express → Documentation API interactive. 
 </pre>
<!-- ************************************************************** -->

# 3️- Explication des fichiers principaux

# Configuration de la BDD avec Sequelize
 backend/src/config/database.js.
 Ce fichier initialise la connexion avec une base SQLite stockée dans ( database.sqlite ).

# Modèle Sequelize pour les blagues
 backend/src/models/Joke.js.
 On définit ici la table Joke avec un id et un champ content.

# Contrôleur des blagues
 backend/src/controllers/jokeController.js.
 Ajouter une blague, Récupérer toutes les blagues, Récupérer une blague par ID, et Récupérer une blague aléatoire.

# Routes de l’API
 backend/src/routes/jokeRoutes.js.
 Ici, on définit les routes API demandées.

# Configuration Express
 backend/src/app.js.

# Lancement du serveur
 backend/src/server.js.
 Cette configuration s’assure que la BDD est prête avant de lancer le serveur.

<!-- ************************************************************** -->

# 4 - Lancer et tester l’API
 # 4/1️- Lancer le serveur
 node src/server.js
 # 4/2️- Tester avec Postman
 <pre>
 POST /api/blagues → Ajouter une blague
 GET /api/blagues → Récupérer toutes les blagues
 GET /api/blagues/:id → Récupérer une blague par ID
 GET /api/blagues/random → Récupérer une blague aléatoire
 </pre>

<!-- ************************************************************** -->

# 5️ - Déploiement sur Render.com
 <pre>
 Crée un compte sur Render.com.
 Crée un service Web.
 Ajoute le repo GitHub.
 Configure l’environnement.
 Déploie. 
 </pre>

<!-- ************************************************************** -->

 # API complète avec Sequelize, SQLite, et une structure MVC propre

<!-- ************************************************************** -->
