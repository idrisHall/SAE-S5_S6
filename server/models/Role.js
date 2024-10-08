const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assurez-vous que ce chemin est correct

class Role extends Model {
    /**
     * Trouve un rôle par son ID.
     * @param {number} id_role - L'ID du rôle à rechercher.
     * @returns {Promise<Role>} Une promesse qui résout avec le rôle trouvé.
     */
    static async findById(id_role) {
        return await this.findOne({ where: { id_role } });
    }

    /**
     * Crée ou met à jour un rôle en fonction de l'ID.
     * @param {Object} roleData - Les données du rôle.
     * @returns {Promise<Role>} Une promesse qui résout avec le rôle créé ou mis à jour.
     */
    static async createOrUpdate(roleData) {
        let role = await this.findOne({ where: { id_role: roleData.id_role } });
        if (role) {
            await role.update(roleData);
        } else {
            role = await this.create(roleData);
        }
        return role;
    }

    /**
     * Supprime un rôle en fonction de son ID.
     * @param {number} id_role - L'ID du rôle à supprimer.
     * @returns {Promise<void>}
     */
    static async deleteById(id_role) {
        return await this.destroy({ where: { id_role } });
    }
}

// Initialisation du modèle Role
Role.init({
    id_role: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nom: {
        type: DataTypes.STRING,
        allowNull: false
    }
    // Ajoutez d'autres champs ici selon votre schéma de base de données
}, {
    sequelize, // Instance de connexion Sequelize
    tableName: 'role', // Replace with your actual table name
    modelName: 'Role',// Nom du modèle
    timestamps: false

});

module.exports = Role;
