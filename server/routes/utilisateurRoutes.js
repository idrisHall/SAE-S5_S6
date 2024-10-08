const express = require('express');
const usersController = require('../controllers/UtilisateurController');
const isAuthenticated = require('../middlewares/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Opérations d'utilisateur
 */

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Inscription d'un nouvel utilisateur
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Nom
 *               - Prénom
 *               - mail
 *               - password
 *               - id_groupe
 *               - id_role
 *             properties:
 *               Nom:
 *                 type: string
 *                 example: Dupont
 *               Prénom:
 *                 type: string
 *                 example: Jean
 *               mail:
 *                 type: string
 *                 format: email
 *                 example: jean.dupont@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "VotreMotDePasse123!"
 *               id_groupe:
 *                 type: integer
 *                 example: 1
 *               id_role:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Inscription réussie
 *       400:
 *         description: Erreur lors de l'inscription
 */

router.post('/register', usersController.register);

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Authentification d'un utilisateur
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: Authentification réussie
 *       400:
 *         description: Email ou mot de passe incorrect
 */
router.post('/login', usersController.login);

/**
 * @swagger
 * /user/logout:
 *   post:
 *     summary: Déconnexion de l'utilisateur
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Déconnexion réussie
 */
router.post('/logout', usersController.logout);

// /**
//  * @swagger
//  * /user/users:
//  *   get:
//  *     summary: Obtenir tous les utilisateurs.
//  *     description: Cette route permet de récupérer la liste de tous les utilisateurs.
//  *     responses:
//  *       200:
//  *         description: Liste des utilisateurs récupérée avec succès.
//  *       500:
//  *         description: Erreur interne du serveur.
//  */
// router.get('/users', usersController.getAllUsers)

/**
 * @swagger
 * /user/userinfo:
 *   get:
 *     summary: Récupérer les informations de l'utilisateur connecté
 *     tags: [User]
 *     security:
 *       - sessionAuth: []
 *     responses:
 *       200:
 *         description: Informations de l'utilisateur
 *       401:
 *         description: Non autorisé
 */
router.get('/userinfo', usersController.getUserInfo);

module.exports = router;
