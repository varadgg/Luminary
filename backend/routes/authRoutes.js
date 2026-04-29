const express = require('express');
const router = express.Router();
const { loginAdmin, registerAdmin } = require('../controllers/authController');

router.post('/login', loginAdmin);
router.post('/create-admin', registerAdmin); // Temporary route for initial setup

module.exports = router;
