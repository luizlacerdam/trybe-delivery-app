const express = require('express');
const { SaleController } = require('../controllers');
const { validateToken } = require('../middlewares/validateToken');
const { isSeller } = require('../middlewares/isSeller');

const router = express.Router();

router.post('/customer/orders', validateToken, SaleController.create);
router.get('/customer/orders', validateToken, SaleController.findAll);
router.get('/customer/orders/:id', validateToken, SaleController.findByPk);
router.patch('/customer/orders/:id', validateToken, SaleController.updateStatus);

router.get('/seller/orders', validateToken, isSeller, SaleController.findAll);
router.get('/seller/orders/:id', validateToken, isSeller, SaleController.findByPk);
router.patch('/seller/orders/:id', validateToken, isSeller, SaleController.updateStatus);

module.exports = router;