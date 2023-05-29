const express = require('express');
const { AdminController } = require('../controllers');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateToken, AdminController.create);
router.get('/', validateToken, AdminController.findAll);

module.exports = router;