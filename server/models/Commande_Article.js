const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Commande_Article = sequelize.define('Commande_Article', {
    id_commande_article: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_commande: {
        type: DataTypes.INTEGER
    },
    id_article: {
        type: DataTypes.INTEGER
    },
    Quantité: {
        type: DataTypes.INTEGER
    },
    id_groupe: {
        type: DataTypes.INTEGER
    }
});

module.exports = Commande_Article;

