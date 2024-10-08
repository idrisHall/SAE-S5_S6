const Categorie = require('../models/Categorie');

exports.createCategorie = async (req, res) => {
    try {
        const categorie = await Categorie.createOrUpdate(req.body);
        res.status(201).send(categorie);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Categorie.findAll();
        res.status(200).send(categories);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getCategorieById = async (req, res) => {
    try {
        const categorie = await Categorie.findById(req.params.id);
        if (categorie) {
            res.status(200).send(categorie);
        } else {
            res.status(404).send({ message: 'Categorie not found' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateCategorie = async (req, res) => {
    try {
        const categorie = await Categorie.findById(req.params.id);
        if (categorie) {
            await categorie.update(req.body);
            res.status(200).send(categorie);
        } else {
            res.status(404).send({ message: 'Categorie not found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteCategorie = async (req, res) => {
    try {
        const categorie = await Categorie.findById(req.params.id);
        if (categorie) {
            await categorie.destroy();
            res.status(200).send({ message: 'Categorie deleted' });
        } else {
            res.status(404).send({ message: 'Categorie not found' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
