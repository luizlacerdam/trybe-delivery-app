const { Product } = require('../database/models');

const create = async (newProduct) => Product.create(newProduct);

const getAll = async () => Product.getAll();

const getById = async (id) => Product.getById(id);

module.exports = {
    create,
    getAll,
    getById,
};