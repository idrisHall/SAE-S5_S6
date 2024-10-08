const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Utilisateur extends Model {
  static async getAll() {
    return await this.findAll();
  }

  static async findById(id_user) {
    return await this.findOne({ where: { id_user } });
  }

  static async findByEmail(email) {
    return await this.findOne({ where: { mail: email } });
  }

  static async findByFullName(firstName, lastName) {
    return await this.findOne({ where: { Prénom: firstName, Nom: lastName } });
  }
  
  static async createOrUpdate(userData) {
    let user = await this.findOne({ where: { id_user: userData.id_user } });
    if (user) {
      await user.update(userData);
    } else {
      user = await this.create(userData);
    }
    return user;
  }

  static async deleteById(id_user) {
    return await this.destroy({ where: { id_user } });
  }


  static async authenticate(email, password) {
    const user = await this.findByEmail(email);
    if (!user) {
      return null; // Utilisateur non trouvé
    }
  
    // Comparaison du mot de passe hashé stocké en base de données avec le mot de passe fourni
    const isPasswordValid = comparePasswords(password, user.password);
  
    if (isPasswordValid) {
      return user; // Authentification réussie
    }
  
    return null; // Mot de passe incorrect
  }
  
}

Utilisateur.init(
  {
    id_user: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    Nom: {
      type: DataTypes.STRING,
    },
    Prénom: {
      type: DataTypes.STRING,
    },
    mail: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING(255),
    },
    id_groupe: {
      type: DataTypes.INTEGER,
    },
    id_role: {
      type: DataTypes.INTEGER,
      defaultValue: 2
    },
  },
  {
    sequelize,
    modelName: 'utilisateur',
    tableName: 'utilisateur',
    timestamps: false,
  }
);

module.exports = Utilisateur;
