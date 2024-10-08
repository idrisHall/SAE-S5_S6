const express = require('express');
const router = express.Router();
const paysController = require('../controllers/PaysController');

/**
 * @swagger
 * tags:
 *   name: Pays
 *   description: Opérations liées aux pays
 */

/**
 * @swagger
 * /pays:
 *   post:
 *     summary: Créer un nouveau pays
 *     tags: [Pays]
 *     requestBody:
 *       description: Données du pays à créer
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nom du pays
 *             required:
 *               - name
 *     responses:
 *       201:
 *         description: Pays créé avec succès
 *       400:
 *         description: Requête incorrecte
 *       500:
 *         description: Erreur interne du serveur
 */
router.post('/', paysController.createPays);

/**
 * @swagger
 * /pays:
 *   get:
 *     summary: Récupérer tous les pays
 *     tags: [Pays]
 *     responses:
 *       200:
 *         description: Liste de tous les pays
 *       500:
 *         description: Erreur interne du serveur
 */
router.get('/', paysController.getAllPays);

/**
 * @swagger
 * /pays/{id}:
 *   get:
 *     summary: Récupérer un pays par ID
 *     tags: [Pays]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du pays à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pays récupéré avec succès
 *       404:
 *         description: Pays non trouvé
 *       500:
 *         description: Erreur interne du serveur
 */
router.get('/:id', paysController.getPaysById);

/**
 * @swagger
 * /pays/{id}:
 *   put:
 *     summary: Mettre à jour un pays existant
 *     tags: [Pays]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du pays à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Nouvelles données du pays
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nouveau nom du pays
 *             required:
 *               - name
 *     responses:
 *       200:
 *         description: Pays mis à jour avec succès
 *       400:
 *         description: Requête incorrecte
 *       404:
 *         description: Pays non trouvé
 *       500:
 *         description: Erreur interne du serveur
 */
router.put('/:id', paysController.updatePays);

/**
 * @swagger
 * /pays/{id}:
 *   delete:
 *     summary: Supprimer un pays
 *     tags: [Pays]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du pays à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pays supprimé avec succès
 *       404:
 *         description: Pays non trouvé
 *       500:
 *         description: Erreur interne du serveur
 */
router.delete('/:id', paysController.deletePays);

module.exports = router;
