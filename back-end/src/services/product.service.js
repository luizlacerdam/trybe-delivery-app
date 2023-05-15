const { Product } = require('../database/models');

const create = async (newProduct) => Product.create(newProduct);

const findAll = async () => Product.findAll();

const findByPk = async (id) => Product.findByPk(id);

module.exports = {
    create,
    findAll,
    findByPk,
};