const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'secret', {
    expiresIn: '30d',
  });
};

// @desc    Auth admin & get token
// @route   POST /api/auth/login
// @access  Public
const loginAdmin = async (req, res) => {
  try {
    let { email, password } = req.body;
    
    // Trim credentials to prevent whitespace errors
    email = email?.trim();
    password = password?.trim();

    // Hardcoded fallback admin check from .env
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      return res.json({
        _id: 'hardcoded-admin',
        email: email,
        token: generateToken('hardcoded-admin'),
      });
    }

    // Check for admin email in DB
    const admin = await Admin.findOne({ email });

    if (admin && (await admin.matchPassword(password))) {
      res.json({
        _id: admin.id,
        email: admin.email,
        token: generateToken(admin._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Register a new admin (Temporary endpoint)
// @route   POST /api/auth/register
// @access  Public (Should be removed or secured in production)
const registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const adminExists = await Admin.findOne({ email });

    if (adminExists) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    const admin = await Admin.create({
      email,
      password,
    });

    if (admin) {
      res.status(201).json({
        _id: admin.id,
        email: admin.email,
        token: generateToken(admin._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid admin data' });
    }
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  loginAdmin,
  registerAdmin,
};
