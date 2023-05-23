const { SaleProduct } = require('../database/models');

const create = async (newProduct) => SaleProduct.create(newProduct);

const createMany = async (ArrP) => SaleProduct.bulkCreate(ArrP);

const findAll = async () => SaleProduct.findAll();

const findByPk = async (id) => SaleProduct.findByPk(id);

module.exports = {
    create,
    findAll,
    findByPk,
    createMany,
};