const Utilisateur = require('../models/Utilisateur'); // Importez votre modèle Utilisateur
const bcrypt = require('bcrypt');
const session = require('express-session');

const userService = require('../services/userServices');

const usersController = {
  register: async (req, res) => {
      try {
          const { Nom, Prénom, mail, password, } = req.body;
          // Valider et enregistrer l'utilisateur
          const user = await userService.register(Nom, Prénom, mail, password);
          res.status(201).json({ message: "Utilisateur créé", user });
      } catch (error) {
          res.status(400).json({ message: error.message });
      }
  },

  login: async (req, res) => {
      try {
          const { email, password } = req.body;

          // Vérifier si l'utilisateur est déjà connecté
          if (req.session.user && req.session.user.email === email) {
              return res.status(400).json({ message: "Déjà connecté" });
          }

          const user = await userService.login(email, password);
          if (user) {
              // Créer une session pour l'utilisateur
              req.session.user = user;
              res.status(200).json({ message: "Connecté avec succès" , user });
          } else {
              res.status(401).json({ message: "Identifiants invalides" });

          }
      } catch (error) {
          res.status(500).json({ message: error.message });
      }
  },

  logout: (req, res) => {
      req.session.destroy((err) => {
          if (err) {
            console.log('ah')
              res.status(500).json({ message: "Erreur lors de la déconnexion" });
          } else {
            console.log('je')
              res.status(200).json({ message: "Déconnecté avec succès" });
          }
      });
  },

  getUserInfo: (req, res) => {
      if (req.session.user) {
          res.status(200).json(req.session.user);
      } else {
          res.status(401).json({ message: "Non authentifié" });
      }
  }
};

module.exports = usersController;
