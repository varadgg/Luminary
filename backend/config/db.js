const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Validate that MONGO_URI exists
    if (!process.env.MONGO_URI) {
      console.error('=== MONGODB ERROR ===');
      console.error('MONGO_URI is not defined in environment variables.');
      console.error('Server will continue running but database operations will fail.');
      return;
    }

    console.log('Connecting to MongoDB Atlas...');

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Connection pool settings for production
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 10000, // 10 seconds to find a server
      socketTimeoutMS: 45000, // 45 seconds before timeout
    });

    console.log('=== MONGODB CONNECTED ===');
    console.log(`Host: ${conn.connection.host}`);
    console.log(`Database: ${conn.connection.name}`);
    console.log('=========================');

    // Monitor connection events
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err.message);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('MongoDB disconnected. Attempting reconnect...');
    });

    mongoose.connection.on('reconnected', () => {
      console.log('MongoDB reconnected successfully.');
    });

  } catch (error) {
    console.error('=== MONGODB CONNECTION FAILED ===');
    console.error(`Error: ${error.message}`);
    console.error('================================');
    // DO NOT call process.exit(1) — let the server stay alive on Render
    // The server will return 500 on DB operations, but Render won't show 502
  }
};

module.exports = connectDB;
