const { Product } = require('../database/models');

const create = async (newProduct) => Product.create(newProduct);