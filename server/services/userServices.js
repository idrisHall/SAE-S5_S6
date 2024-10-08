const bcrypt = require('bcrypt');

// Modèle utilisateur - assurez-vous d'importer correctement votre modèle d'utilisateur ici
const UserModel = require('../models/Utilisateur');

const userService = {
    register: async (Nom, Prénom, mail, password) => {
        try {
            const hashedPassword = password; // Hachage du mot de passe avec un coût de 10

            const user = await UserModel.create({
                Nom,
                Prénom,
                mail,
                password: hashedPassword,
            });

            return user;
        } catch (error) {
            throw new Error("Erreur lors de l'enregistrement de l'utilisateur : " + error.message);
        }
    },

    login: async (email, password) => {
        try {
            const user = await UserModel.findOne({ where: { mail: email } });

            if (user && (password == user.password)) {
                return user;
            } else {
                return null;
            }
        } catch (error) {
            throw new Error("Erreur lors de l'authentification de l'utilisateur : " + error.message);
        }
    },
};

module.exports = userService;
