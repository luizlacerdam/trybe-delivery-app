const { ProductService } = require('../services');

const create = async (req, res, next) => {
    try {
        const { name, price, urlImage } = req.body;

    const product = await ProductService.getById(name);

    if (product) {
        return res.status(422).json({ message: 'Produto já cadastrado.' }); 
    }

    const newProduct = await ProductService.create({ name, price, urlImage });
    res.status(201).json({ newProduct });
    } catch (error) {
        next(error);
    }
};

const getAll = async (req, res, next) => {
    try {
       const allProducts = await ProductService.getAll();
       return res.status(200).json({ allProducts });
    } catch (error) {
        next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params; 
        const product = ProductService.getById(id);
        return res.status(200).json({ product });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    create,
    getAll,
    getById,
};