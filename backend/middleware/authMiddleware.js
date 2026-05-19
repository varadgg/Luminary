const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');

      if (decoded.id === 'hardcoded-admin') {
        req.admin = { _id: 'hardcoded-admin', email: process.env.ADMIN_EMAIL };
        return next();
      }

      // Get user from the token
      req.admin = await Admin.findById(decoded.id).select('-password');

      if (!req.admin) {
        return res.status(401).json({ message: 'Not authorized, admin not found' });
      }

      return next();
    } catch (error) {
      console.error('Auth middleware error:', error.message);
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  // No token provided at all
  return res.status(401).json({ message: 'Not authorized, no token' });
};

module.exports = { protect };
