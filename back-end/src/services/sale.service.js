const { Sale } = require('../database/models');

const create = async (newSale) => {
    const { order, cart } = newSale;   
    const createNewSale = await Sale.create(order);

    const productSaleArr = cart.map((p) => ({ 
        saleId: createNewSale.id,
        productId: p.id,
        quantity: p.qty,
    }));
    console.log(productSaleArr);

    return createNewSale;
};

const findAll = async () => Sale.findAll();

const findByPk = async (id) => Sale.findByPk(id);

const findByUserId = async (userId) => Sale.findAll({ where: { userId } });

const findByStatus = async (status) => Sale.findAll({ where: { status } });

module.exports = {
    create,
    findAll,
    findByPk,
    findByUserId,
    findByStatus,
};