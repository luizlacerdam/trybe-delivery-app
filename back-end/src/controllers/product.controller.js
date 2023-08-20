const { ProductService } = require('../services');

const create = async (req, res, next) => {
    try {
        const product = req.body;

    const newProduct = await ProductService.create(product);
    return res.status(201).json({ newProduct });
    } catch (error) {
        next(error);
    }
};

const findAll = async (req, res, next) => {
    try {
       const allProducts = await ProductService.findAll();
       return res.status(200).json({ allProducts });
    } catch (error) {
        next(error);
    }
};

const findByPk = async (req, res, next) => {
    try {
        const { id } = req.params; 
        console.log(id);
        const product = await ProductService.findByPk(id);
        return res.status(200).json({ product });
    } catch (error) {
        next(error);
    }
};

const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = req.body;
        const productUpdated = await ProductService.updateProduct(id, product);
        return res.status(200).json({ productUpdated });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    create,
    findAll,
    findByPk,
    updateProduct,
};