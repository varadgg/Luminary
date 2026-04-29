const Registration = require('../models/Registration');

// @desc    Register a new user
// @route   POST /api/register
// @access  Public
const createRegistration = async (req, res) => {
  try {
    const { name, mobile, email, domain, college, city } = req.body;

    // Validate required fields
    if (!name || !mobile || !email || !domain || !college || !city) {
      return res.status(400).json({ message: 'Please include all required fields' });
    }

    // Generate Application ID
    const applicationId = "LUM-" + Date.now().toString().slice(-6);

    // Create registration
    const registration = await Registration.create({
      name,
      mobile,
      email,
      domain,
      college,
      city,
      applicationId
    });

    if (registration) {
      console.log('New Registration Saved:', registration);
      res.status(201).json({
        success: true,
        data: registration
      });
    } else {
      res.status(400).json({ message: 'Invalid registration data' });
    }
  } catch (error) {
    console.error('Registration Error:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get all registrations
// @route   GET /api/registrations
// @access  Private/Admin
const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: registrations.length,
      data: registrations
    });
  } catch (error) {
    console.error('Fetch Registrations Error:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createRegistration,
  getAllRegistrations
};
