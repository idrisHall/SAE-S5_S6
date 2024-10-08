const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Pays extends Model {
  static async getAll() {
    return await this.findAll();
  }

  static async findById(id_pays) {
    return await this.findOne({ where: { id_pays } });
  }

  static async createOrUpdate(PaysData) {
    let pays = await this.findOne({ where: { id_pays: PaysData.id_pays } });
    if (pays) {
      await pays.update(PaysData);
    } else {
      pays = await this.create(PaysData);
    }
    return pays;
  }

  static async deleteById(id_pays) {
    return await this.destroy({ where: { id_pays } });
  }
}

Pays.init({
    id_pays: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nom_Pays: {
        type: DataTypes.STRING
    },
    Continent: {
        type: DataTypes.STRING
    }
}, {
  sequelize, // Pass your Sequelize instance
  modelName: 'Pays', // Use the same model name
  tableName: 'Pays', // Replace with your actual table name
  timestamps: false
});

module.exports = Pays;
