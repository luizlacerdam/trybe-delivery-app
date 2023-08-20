const express = require('express');
const { ProductController } = require('../controllers');
const { validateToken } = require('../middlewares/validateToken');
const { isAdmin } = require('../middlewares/isAdmin');

const router = express.Router();

router.post('/', validateToken, isAdmin, ProductController.create);
router.get('/', validateToken, isAdmin, ProductController.findAll);
router.get('/:id', validateToken, isAdmin, ProductController.findByPk);

module.exports = router;