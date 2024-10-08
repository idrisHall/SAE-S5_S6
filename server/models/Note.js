const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Note = sequelize.define('Note', {
    id_note: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    note: {
        type: DataTypes.INTEGER
    },
    id_article: {
        type: DataTypes.INTEGER
    }
    // Ajoutez d'autres champs et options si nécessaire
    // Gérez les relations et clés étrangères selon votre schéma
});

module.exports = Note;
