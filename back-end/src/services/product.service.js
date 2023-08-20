const { Product } = require('../database/models');

const create = async (newProduct) => Product.create(newProduct);

const findAll = async () => Product.findAll();

const findByPk = async (id) => Product.findByPk(id);

const updateProduct = async (id, product) => {
    const productUpdated = await Product.update(product, {
        where: { id },
    });
    return productUpdated;
};

module.exports = {
    create,
    findAll,
    findByPk,
    updateProduct,
};