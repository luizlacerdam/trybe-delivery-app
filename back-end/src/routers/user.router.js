const express = require('express');
const { ProductController, UserController } = require('../controllers');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router.get('/', validateToken, UserController.userValidation);
router.post('/products', ProductController.create);
router.get('/products', validateToken, ProductController.findAll);
router.get('/products/:id', ProductController.findByPk);
module.exports = router;