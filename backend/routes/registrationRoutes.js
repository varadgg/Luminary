const express = require('express');
const router = express.Router();
const { createRegistration, getAllRegistrations } = require('../controllers/registrationController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', createRegistration);
router.get('/registrations', protect, getAllRegistrations);

module.exports = router;
