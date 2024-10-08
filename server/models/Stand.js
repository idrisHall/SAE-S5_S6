const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Stand = sequelize.define('Stand', {
    id_stand: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pos_stand: {
        type: DataTypes.STRING
    }
});

module.exports = Stand;
