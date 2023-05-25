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
        const { id, role } = req.body.user;
        const data = await SaleService.findAll(id, role);
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

const updateStatus = async (req, res, next) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const data = await SaleService.updateStatus(id, status);
        return res.status(200).json({ data });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    create,
    findAll,
    findByPk,
    updateStatus,
};