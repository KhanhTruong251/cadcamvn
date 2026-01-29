const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// Import routes and middleware
const productsRouter = require('./routes/products');
const { auth } = require('./middleware/auth');
const { validateProduct } = require('./middleware/validation');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Create data directory if it doesn't exist
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'CADCAM API Server is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// API Routes
app.use('/api/products', auth, productsRouter);

// Auth endpoints (mock)
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  // Mock authentication - accept any email/password
  if (email && password) {
    res.json({
      success: true,
      message: 'Login successful',
      data: {
        user: {
          id: '1',
          name: 'Admin User',
          email: email,
          role: 'admin'
        },
        token: 'mock-jwt-token-' + Date.now()
      }
    });
  } else {
    res.status(400).json({
      success: false,
      message: 'Email and password are required'
    });
  }
});

app.post('/api/auth/logout', (req, res) => {
  res.json({
    success: true,
    message: 'Logout successful'
  });
});

// Statistics endpoint
app.get('/api/stats', auth, (req, res) => {
  try {
    const productsFile = path.join(__dirname, 'data/products.json');
    const products = JSON.parse(fs.readFileSync(productsFile, 'utf8'));
    
    const stats = {
      totalProducts: products.length,
      totalValue: products.reduce((sum, product) => sum + (product.price * product.quantity), 0),
      categories: [...new Set(products.map(p => p.category))].length,
      lowStock: products.filter(p => p.quantity < 10).length
    };
    
    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to get statistics'
    });
  }
});

// File upload endpoint (mock)
app.post('/api/upload', auth, (req, res) => {
  // Mock file upload - return a placeholder URL
  setTimeout(() => {
    res.json({
      success: true,
      message: 'File uploaded successfully',
      data: {
        url: `https://via.placeholder.com/400x300?text=Uploaded+${Date.now()}`
      }
    });
  }, 1000);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
});

// Start server
app.listen(PORT, () => {
  console.log('🚀 CADCAM API Server started successfully!');
  console.log(`📡 Server running on: http://localhost:${PORT}`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
  console.log(`📚 API Base URL: http://localhost:${PORT}/api`);
  console.log('📊 Available endpoints:');
  console.log('  GET  /api/products - Get all products');
  console.log('  GET  /api/products/:id - Get product by ID');
  console.log('  POST /api/products - Create new product');
  console.log('  PUT  /api/products/:id - Update product');
  console.log('  DELETE /api/products/:id - Delete product');
  console.log('  GET  /api/products/categories - Get categories');
  console.log('  GET  /api/products/search - Search products');
  console.log('  POST /api/auth/login - Login');
  console.log('  POST /api/auth/logout - Logout');
  console.log('  GET  /api/stats - Get statistics');
  console.log('  POST /api/upload - Upload file');
});

module.exports = app;