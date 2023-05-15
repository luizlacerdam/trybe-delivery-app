const express = require('express');
const { ProductController } = require('../controllers');

const router = express.Router();

router.post('/', ProductController.create);
router.get('/', ProductController.findAll);
router.get('/:id', ProductController.findByPk);

module.exports = router;