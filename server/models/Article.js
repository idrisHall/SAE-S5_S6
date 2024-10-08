const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Article extends Model {
  static async getall() {
    return await this.findAll();
  }

  static async findById(id_article) {
    return await this.findOne({ where: { id_article } });
  }

  static async createOrUpdate(ArticleData) {
    let article = await this.findOne({ where: { id_article: ArticleData.id_article } });
    if (article) {
      await article.update(ArticleData);
    } else {
      article = await this.create(ArticleData);
    }
    return article;
  }

  static async deleteById(id_article) {
    return await this.destroy({ where: { id_article } });
  }
}

Article.init({
  id_article: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  Nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Prix: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  Description: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: ""
  },
  Quantité: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_pays: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_categorie: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_groupe: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize, // Pass your Sequelize instance
  modelName: 'Article', // Use the same model name
  tableName: 'Article', // Replace with your actual table name
  timestamps: false
});

module.exports = Article;
