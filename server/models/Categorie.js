const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Categorie extends Model {
  static async getall() {
    return await this.findAll();
  }

  static async findById(id_categorie) {
    return await this.findOne({ where: { id_categorie } });
  }

  static async createOrUpdate(ArticleData) {
    let article = await this.findOne({ where: { id_categorie: ArticleData.id_categorie } });
    if (article) {
      await article.update(ArticleData);
    } else {
      article = await this.create(ArticleData);
    }
    return article;
  }

  static async deleteById(id_categorie) {
    return await this.destroy({ where: { id_categorie } });
  }
}

Categorie.init({
    id_categorie: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nom: {
        type: DataTypes.STRING
    }
}, {
  sequelize, // Pass your Sequelize instance
  modelName: 'Categorie', // Use the same model name
  tableName: 'Categorie', // Replace with your actual table name
  timestamps: false
});

module.exports = Categorie;
