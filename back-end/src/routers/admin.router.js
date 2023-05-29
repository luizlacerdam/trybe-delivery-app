const express = require('express');
const { AdminController } = require('../controllers');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router.post('/manage', validateToken, AdminController.create);
router.get('/manage', validateToken, AdminController.findAll);

module.exports = router;