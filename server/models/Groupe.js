const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Groupe = sequelize.define('Groupe', {
    id_groupe: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nom_Groupe: {
        type: DataTypes.STRING
    },
    photo_groupe: {
        type: DataTypes.STRING
    },
    id_stand: {
        type: DataTypes.INTEGER
    }
    // Ajoutez d'autres champs et options si nécessaire
    // N'oubliez pas de gérer la clé étrangère si nécessaire
});

module.exports = Groupe;
