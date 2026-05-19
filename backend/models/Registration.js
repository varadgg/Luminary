const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  mobile: {
    type: String,
    required: [true, 'Please add a mobile number']
  },
  email: {
    type: String,
    required: [true, 'Please add an email']
  },
  domain: {
    type: String,
    required: [true, 'Please select a domain']
  },
  college: {
    type: String,
    required: [true, 'Please add your college or university name']
  },
  city: {
    type: String,
    required: [true, 'Please add your city']
  },
  applicationId: {
    type: String,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Registration', registrationSchema);
