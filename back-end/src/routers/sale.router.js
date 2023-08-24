const express = require('express');
const { SaleController } = require('../controllers');
const { validateToken } = require('../middlewares/validateToken');
const { isSeller } = require('../middlewares/isSeller');
const { isCustomer } = require('../middlewares/isCustomer');

const router = express.Router();

router.post('/customer/orders', validateToken, isCustomer, SaleController.create);
router.get('/customer/orders', validateToken, isCustomer, SaleController.findAll);
router.get('/customer/orders/:id', validateToken, isCustomer, SaleController.findByPkCustomer); //
router.patch('/customer/orders/:id', validateToken, isCustomer, SaleController.updateStatus);

router.get('/seller/orders', validateToken, isSeller, SaleController.findAll);
router.get('/seller/orders/:id', validateToken, isSeller, SaleController.findByPkSeller); //
router.patch('/seller/orders/:id', validateToken, isSeller, SaleController.updateStatus);

module.exports = router;