const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/CategorieController');

/**
 * @swagger
 * tags:
 *   name: Categorie
 *   description: Opérations liées aux catégories
 */

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Créer une nouvelle catégorie
 *     tags: [Categorie]
 *     requestBody:
 *       description: Données de la catégorie à créer
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nom de la catégorie
 *             required:
 *               - name
 *     responses:
 *       201:
 *         description: Catégorie créée avec succès
 *       400:
 *         description: Requête incorrecte
 *       500:
 *         description: Erreur interne du serveur
 */
router.post('/', categorieController.createCategorie);

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Récupérer toutes les catégories
 *     tags: [Categorie]
 *     responses:
 *       200:
 *         description: Liste de toutes les catégories
 *       500:
 *         description: Erreur interne du serveur
 */
router.get('/', categorieController.getAllCategories);

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Récupérer une catégorie par ID
 *     tags: [Categorie]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la catégorie à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Catégorie récupérée avec succès
 *       404:
 *         description: Catégorie non trouvée
 *       500:
 *         description: Erreur interne du serveur
 */
router.get('/:id', categorieController.getCategorieById);

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie existante
 *     tags: [Categorie]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la catégorie à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Nouvelles données de la catégorie
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nouveau nom de la catégorie
 *             required:
 *               - name
 *     responses:
 *       200:
 *         description: Catégorie mise à jour avec succès
 *       400:
 *         description: Requête incorrecte
 *       404:
 *         description: Catégorie non trouvée
 *       500:
 *         description: Erreur interne du serveur
 */
router.put('/:id', categorieController.updateCategorie);

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Supprimer une catégorie
 *     tags: [Categorie]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la catégorie à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Catégorie supprimée avec succès
 *       404:
 *         description: Catégorie non trouvée
 *       500:
 *         description: Erreur interne du serveur
 */
router.delete('/:id', categorieController.deleteCategorie);

module.exports = router;
