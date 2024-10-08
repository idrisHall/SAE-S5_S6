const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Commentaire = sequelize.define('Commentaire', {
    id_commentaire: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    commentaire: {
        type: DataTypes.TEXT
    },
    date_heure_commentaire: {
        type: DataTypes.DATE
    },
    id_user: {
        type: DataTypes.INTEGER
    },
    id_article: {
        type: DataTypes.INTEGER
    }
    // Ajoutez d'autres champs et options si nécessaire
    // Gérez les relations et clés étrangères selon votre schéma
});

module.exports = Commentaire;
