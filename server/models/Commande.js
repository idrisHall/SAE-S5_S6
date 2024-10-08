const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Commande = sequelize.define('Commande', {
    id_commande: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Status: {
        type: DataTypes.INTEGER
    },
    id_user: {
        type: DataTypes.INTEGER
    }
    // Ajoutez d'autres champs et options si nécessaire
    // Gérez les relations et clés étrangères selon votre schéma
});

module.exports = Commande;
