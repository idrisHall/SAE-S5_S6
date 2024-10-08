const express = require('express');
const router = express.Router();
const roleController = require('../controllers/RoleController');

/**
 * @swagger
 * tags:
 *   name: Role
 *   description: Opérations liées aux rôles
 */

/**
 * @swagger
 * /roles:
 *   post:
 *     summary: Créer un nouveau rôle
 *     tags: [Role]
 *     requestBody:
 *       description: Données du rôle à créer
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nom du rôle
 *             required:
 *               - name
 *     responses:
 *       201:
 *         description: Rôle créé avec succès
 *       400:
 *         description: Requête incorrecte
 *       500:
 *         description: Erreur interne du serveur
 */
router.post('/', roleController.createRole);

/**
 * @swagger
 * /roles:
 *   get:
 *     summary: Récupérer tous les rôles
 *     tags: [Role]
 *     responses:
 *       200:
 *         description: Liste de tous les rôles
 *       500:
 *         description: Erreur interne du serveur
 */
router.get('/', roleController.getAllRoles);

/**
 * @swagger
 * /roles/{id}:
 *   get:
 *     summary: Récupérer un rôle par ID
 *     tags: [Role]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du rôle à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Rôle récupéré avec succès
 *       404:
 *         description: Rôle non trouvé
 *       500:
 *         description: Erreur interne du serveur
 */
router.get('/:id', roleController.getRoleById);

/**
 * @swagger
 * /roles/{id}:
 *   put:
 *     summary: Mettre à jour un rôle existant
 *     tags: [Role]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du rôle à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Nouvelles données du rôle
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nouveau nom du rôle
 *             required:
 *               - name
 *     responses:
 *       200:
 *         description: Rôle mis à jour avec succès
 *       400:
 *         description: Requête incorrecte
 *       404:
 *         description: Rôle non trouvé
 *       500:
 *         description: Erreur interne du serveur
 */
router.put('/:id', roleController.updateRole);

/**
 * @swagger
 * /roles/{id}:
 *   delete:
 *     summary: Supprimer un rôle
 *     tags: [Role]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du rôle à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Rôle supprimé avec succès
 *       404:
 *         description: Rôle non trouvé
 *       500:
 *         description: Erreur interne du serveur
 */
router.delete('/:id', roleController.deleteRole);

module.exports = router;
