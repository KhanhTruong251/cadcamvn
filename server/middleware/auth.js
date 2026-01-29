// Simple authentication middleware for demo purposes
const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  // For demo purposes, we'll accept any token or no token
  // In production, you would validate JWT tokens here
  if (token) {
    req.user = { id: '1', name: 'Admin User', role: 'admin' };
  }
  
  next();
};

// Admin only middleware
const adminOnly = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Access denied. Admin privileges required.'
    });
  }
  next();
};

module.exports = { auth, adminOnly };