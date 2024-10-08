const { Sequelize } = require('sequelize');
require('dotenv').config();

// Création de l'instance Sequelize
const sequelize = new Sequelize(
    process.env.DB_DATABASE, // Nom de la base de données
    process.env.DB_USER,     // Utilisateur
    process.env.DB_PASSWORD, // Mot de passe
    {
        host: process.env.DB_HOST, // Hôte
        dialect: 'mysql',         // Dialecte de la base de données
        port: process.env.DB_PORT  // Port
        // Vous pouvez ajouter d'autres options de configuration selon vos besoins
    }
);

module.exports = sequelize;
