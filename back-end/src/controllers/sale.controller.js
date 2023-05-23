const { SaleService } = require('../services');

const create = async (req, res, next) => {
    const newSale = req.body;
    try {
        const data = await SaleService.create(newSale);
        return res.status(201).json({ data });
    } catch (error) {
        next(error);
    }
};

const findAll = async (req, res, next) => {
    try {
        const { id } = req.body.data;
        const data = await SaleService.findAll(id);
        return res.status(200).json({ data });
    } catch (error) {
        next(error);
    }
};

const findByPk = async (req, res, next) => {
    const { id } = req.params;
    try {
        const data = await SaleService.findByPk(id);
        return res.status(200).json({ data });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    create,
    findAll,
    findByPk,
};