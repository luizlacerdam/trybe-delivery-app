const express = require('express');
const { SaleController } = require('../controllers');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router.post('/customer/orders', validateToken, SaleController.create);
router.get('/customer/orders', validateToken, SaleController.findAll);
router.get('/customer/orders/:id', validateToken, SaleController.findByPk);
router.patch('/customer/orders/:id', validateToken, SaleController.updateStatus);

router.get('/seller/orders', validateToken, SaleController.findAll);

module.exports = router;