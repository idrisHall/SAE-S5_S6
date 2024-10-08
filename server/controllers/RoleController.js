const Role = require('../models/Role');

exports.createRole = async (req, res) => {
    try {
        const role = await Role.create(req.body);
        res.status(201).send(role);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllRoles = async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.status(200).send(roles);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getRoleById = async (req, res) => {
    try {
        const role = await Role.findByPk(req.params.id);
        if (role) {
            res.status(200).send(role);
        } else {
            res.status(404).send({ message: 'Role not found' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateRole = async (req, res) => {
    try {
        const role = await Role.findByPk(req.params.id);
        if (role) {
            await role.update(req.body);
            res.status(200).send(role);
        } else {
            res.status(404).send({ message: 'Role not found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteRole = async (req, res) => {
    try {
        const role = await Role.findByPk(req.params.id);
        if (role) {
            await role.destroy();
            res.status(200).send({ message: 'Role deleted' });
        } else {
            res.status(404).send({ message: 'Role not found' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
