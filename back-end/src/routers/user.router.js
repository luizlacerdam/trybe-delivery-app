const express = require('express');
const { ProductController } = require('../controllers');

const router = express.Router();

router.post('/products', ProductController.create);
router.get('/products', ProductController.findAll);
router.get('/products/:id', ProductController.findByPk);
module.exports = router;