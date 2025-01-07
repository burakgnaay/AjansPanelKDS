const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/login', authController.showLoginPage);
router.post('/login', authController.handleLogin);
router.get('/dashboard', authController.showDashboard);
router.get('/logout', authController.handleLogout);

module.exports = router;
