const express = require('express');
const { SaleController } = require('../controllers');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router.post('/orders', validateToken, SaleController.create);
router.get('/orders', validateToken, SaleController.findAll);
router.get('/orders/:id', validateToken, SaleController.findByPk);
router.patch('/orders/:id', validateToken, SaleController.updateStatus);

module.exports = router;