const express = require('express');
const { AdminController } = require('../controllers');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateToken, AdminController.create);

module.exports = router;