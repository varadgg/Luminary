const Registration = require('../models/Registration');
const mongoose = require('mongoose');

// @desc    Register a new user
// @route   POST /api/register
// @access  Public
const createRegistration = async (req, res) => {
  try {
    // Check if MongoDB is connected
    if (mongoose.connection.readyState !== 1) {
      console.error('Registration attempt failed: MongoDB not connected');
      return res.status(503).json({
        message: 'Database temporarily unavailable. Please try again in a moment.',
      });
    }

    const { name, mobile, email, domain, college, city } = req.body;

    // Validate required fields
    if (!name || !mobile || !email || !domain || !college || !city) {
      return res.status(400).json({
        message: 'Please include all required fields: name, mobile, email, domain, college, city',
      });
    }

    // Check for duplicate email
    const existingRegistration = await Registration.findOne({ email: email.trim().toLowerCase() });
    if (existingRegistration) {
      return res.status(409).json({
        message: 'A registration with this email already exists.',
        applicationId: existingRegistration.applicationId,
      });
    }

    // Generate Application ID
    const applicationId = 'LUM-' + Date.now().toString().slice(-6);

    // Create registration
    const registration = await Registration.create({
      name: name.trim(),
      mobile: mobile.trim(),
      email: email.trim().toLowerCase(),
      domain: domain.trim(),
      college: college.trim(),
      city: city.trim(),
      applicationId,
    });

    console.log('New Registration Saved:', {
      id: registration._id,
      email: registration.email,
      applicationId: registration.applicationId,
    });

    res.status(201).json({
      success: true,
      data: registration,
    });
  } catch (error) {
    console.error('=== REGISTRATION ERROR ===');
    console.error('Timestamp:', new Date().toISOString());
    console.error('Error:', error.message);

    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ message: messages.join(', ') });
    }

    // Handle duplicate key errors (MongoDB E11000)
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(409).json({
        message: `Duplicate value for: ${field}. This ${field} is already registered.`,
      });
    }

    res.status(500).json({ message: 'Server Error. Please try again later.' });
  }
};

// @desc    Get all registrations
// @route   GET /api/registrations
// @access  Private/Admin
const getAllRegistrations = async (req, res) => {
  try {
    // Check if MongoDB is connected
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        message: 'Database temporarily unavailable.',
      });
    }

    const registrations = await Registration.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: registrations.length,
      data: registrations,
    });
  } catch (error) {
    console.error('Fetch Registrations Error:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createRegistration,
  getAllRegistrations,
};
