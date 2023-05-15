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

module.exports = {
    create,
};