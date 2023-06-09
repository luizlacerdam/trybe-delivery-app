const { Sale } = require('../database/models');
const { SaleProduct } = require('../database/models');
const { User } = require('../database/models');
const { Product } = require('../database/models');

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

const findAll = async (id, role) => {
    const key = {
        customer: 'userId',
        seller: 'sellerId',
    };
    const obj = {};
    obj[key[role]] = id;
    return Sale.findAll({ where: obj });
};

const findByPk = async (id) => {
    const order = await Sale.findAll({ 
        where: { id }, 
        include: [{ model: Product, as: 'products', through: { attributes: ['quantity'] } }],
    });
   
    const seller = await User.findByPk(order[0].sellerId);
    const data = { order: order[0], seller };
    
   return data;
};

const findByUserId = async (userId) => Sale.findAll({ where: { userId } });

const findByStatus = async (status) => Sale.findAll({ where: { status } });

const updateStatus = async (id, newStatus) => Sale.update(
    { status: newStatus },
    { where: { id } },
  );

module.exports = {
    create,
    findAll,
    findByPk,
    findByUserId,
    findByStatus,
    updateStatus,
};