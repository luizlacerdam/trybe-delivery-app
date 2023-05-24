const { Sale } = require('../database/models');
const { SaleProduct } = require('../database/models');
const { User } = require('../database/models');

const create = async (newSale) => {
    const { order, cart } = newSale;   
    const createNewSale = await Sale.create(order);

    const productSaleArr = cart.map((p) => ({ 
        saleId: createNewSale.id,
        productId: p.id,
        quantity: p.qty,
    }));
    await SaleProduct.bulkCreate(productSaleArr);

    return createNewSale;
};

const findAll = async (id) => Sale.findAll({ where: { userId: id } });

const findByPk = async (id) => {
    const order = await Sale.findByPk(id);
    
    const cart = await SaleProduct.findAll({ where: { saleId: order.id } });

    const seller = await User.findByPk(order.sellerId);

    const data = { order, cart, seller };
    
   return data;
};

const findByUserId = async (userId) => Sale.findAll({ where: { userId } });

const findByStatus = async (status) => Sale.findAll({ where: { status } });

module.exports = {
    create,
    findAll,
    findByPk,
    findByUserId,
    findByStatus,
};