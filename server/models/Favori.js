const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Favori = sequelize.define('Favori', {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_article: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
    // Ajoutez d'autres champs et options si nécessaire
    // Gérez les relations et clés étrangères selon votre schéma
});

module.exports = Favori;
