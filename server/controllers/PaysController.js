const Pays = require('../models/Pays');

exports.createPays = async (req, res) => {
    try {
        const Pays = await Pays.createOrUpdate(req.body);
        res.status(201).send(Pays);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllPays = async (req, res) => {
    try {
        const Payss = await Pays.findAll();
        res.status(200).send(Payss);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getPaysById = async (req, res) => {
    try {
        const Pays = await Pays.findById(req.params.id);
        if (Pays) {
            res.status(200).send(Pays);
        } else {
            res.status(404).send({ message: 'Pays not found' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updatePays = async (req, res) => {
    try {
        const Pays = await Pays.findById(req.params.id);
        if (Pays) {
            await Pays.update(req.body);
            res.status(200).send(Pays);
        } else {
            res.status(404).send({ message: 'Pays not found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deletePays = async (req, res) => {
    try {
        const Pays = await Pays.findById(req.params.id);
        if (Pays) {
            await Pays.destroy();
            res.status(200).send({ message: 'Pays deleted' });
        } else {
            res.status(404).send({ message: 'Pays not found' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
