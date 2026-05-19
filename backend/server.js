const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars FIRST before anything else
dotenv.config();

// ============================================
// GLOBAL CRASH PREVENTION
// Prevents silent Render crashes
// ============================================
process.on('uncaughtException', (err) => {
  console.error('=== UNCAUGHT EXCEPTION ===');
  console.error('Timestamp:', new Date().toISOString());
  console.error('Error:', err.message);
  console.error('Stack:', err.stack);
  // Don't exit — keep the server alive on Render
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('=== UNHANDLED REJECTION ===');
  console.error('Timestamp:', new Date().toISOString());
  console.error('Reason:', reason);
  // Don't exit — keep the server alive on Render
});

// ============================================
// DATABASE CONNECTION (non-blocking)
// Server starts even if DB is temporarily down
// ============================================
connectDB();

const app = express();

// ============================================
// MIDDLEWARE
// ============================================

// CORS — allow Netlify frontend + local dev
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'https://luminaryacademy.netlify.app',
  // Add any custom domain here
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, Postman, curl, health checks)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    // In production, log but still allow for now (you can make this strict later)
    console.warn(`CORS: Request from unknown origin: ${origin}`);
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Parse JSON and URL-encoded bodies
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Request logging for debugging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// ============================================
// HEALTH CHECK ROUTE (must be BEFORE other routes)
// Render hits GET / to check if server is alive
// ============================================
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Luminary Academy Backend Running Successfully',
    timestamp: new Date().toISOString(),
  });
});

// ============================================
// API ROUTES
// ============================================
app.use('/api', require('./routes/registrationRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

// ============================================
// 404 HANDLER — catch unknown routes
// ============================================
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

// ============================================
// GLOBAL ERROR HANDLER
// ============================================
app.use((err, req, res, next) => {
  console.error('=== EXPRESS ERROR ===');
  console.error('Timestamp:', new Date().toISOString());
  console.error('Route:', req.method, req.originalUrl);
  console.error('Error:', err.message);
  console.error('Stack:', err.stack);

  res.status(err.status || 500).json({
    status: 'error',
    message: process.env.NODE_ENV === 'production'
      ? 'Internal Server Error'
      : err.message,
  });
});

// ============================================
// START SERVER
// Bind to 0.0.0.0 — required for Render
// ============================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log('===========================================');
  console.log(`  Luminary Backend Started`);
  console.log(`  Port: ${PORT}`);
  console.log(`  Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`  Time: ${new Date().toISOString()}`);
  console.log('===========================================');
});
