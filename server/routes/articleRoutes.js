const express = require('express');
const router = express.Router();
const articleController = require('../controllers/ArticleController');

/**
 * @swagger
 * tags:
 *   name: Articles
 *   description: Opérations liées aux articles
 */

/**
 * @swagger
 * /articles:
 *   get:
 *     summary: Récupérer tous les articles
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: Liste de tous les articles
 *       500:
 *         description: Erreur interne du serveur
 */
router.get('/', articleController.getAllArticles);

/**
 * @swagger
 * /articles/{id}:
 *   get:
 *     summary: Récupérer un article par ID
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'article à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Article récupéré avec succès
 *       404:
 *         description: Article non trouvé
 *       500:
 *         description: Erreur interne du serveur
 */
router.get('/:id', articleController.getArticleById);

/**
 * @swagger
 * /articles:
 *   post:
 *     summary: Créer un nouvel article
 *     tags: [Articles]
 *     requestBody:
 *       description: Données de l'article à créer
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Titre de l'article
 *               content:
 *                 type: string
 *                 description: Contenu de l'article
 *             required:
 *               - title
 *               - content
 *     responses:
 *       201:
 *         description: Article créé avec succès
 *       400:
 *         description: Requête incorrecte
 *       500:
 *         description: Erreur interne du serveur
 */
router.post('/', articleController.createArticle);

/**
 * @swagger
 * /articles/{id}:
 *   put:
 *     summary: Mettre à jour un article existant
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'article à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Nouvelles données de l'article
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Nouveau titre de l'article
 *               content:
 *                 type: string
 *                 description: Nouveau contenu de l'article
 *             required:
 *               - title
 *               - content
 *     responses:
 *       200:
 *         description: Article mis à jour avec succès
 *       400:
 *         description: Requête incorrecte
 *       404:
 *         description: Article non trouvé
 *       500:
 *         description: Erreur interne du serveur
 */
router.put('/:id', articleController.updateArticle);

/**
 * @swagger
 * /articles/{id}:
 *   delete:
 *     summary: Supprimer un article
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'article à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Article supprimé avec succès
 *       404:
 *         description: Article non trouvé
 *       500:
 *         description: Erreur interne du serveur
 */
router.delete('/:id', articleController.deleteArticle);

module.exports = router;
