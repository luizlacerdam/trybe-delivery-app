const express = require('express');
const { ProductController } = require('../controllers');

const router = express.Router();

router.post('/', ProductController.create);
router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getById);

module.exports = router;