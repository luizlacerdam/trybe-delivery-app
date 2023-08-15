const express = require('express');
const { AdminController } = require('../controllers');
const { validateToken } = require('../middlewares/validateToken');
const { isAdmin } = require('../middlewares/isAdmin');

const router = express.Router();

router.post('/manage', validateToken, isAdmin, AdminController.create);
router.get('/manage', validateToken, isAdmin, AdminController.findAll);
router.post('/manage/destroy', validateToken, isAdmin, AdminController.destroy);

module.exports = router;