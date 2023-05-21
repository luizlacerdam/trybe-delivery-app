const { Sale } = require('../database/models');

const create = async (newSale) => Sale.create(newSale);

const findAll = async () => Sale.findAll();

const findByPk = async (id) => Sale.findByPk(id);

const findByUserId = async (userId) => Sale.findAll({ where: { userId } });

const findByStatus = async (status) => Sale.findAll({ where: { status } });

module.exports = {
    create,
    findAll,
    findByPk,
    findByUserId,
    findByStatus,
};