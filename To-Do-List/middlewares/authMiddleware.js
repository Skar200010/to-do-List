const jwt = require('jsonwebtoken');
const { secretKey } = require('../config'); // Replace with your secret key configuration

// Middleware function to check for a valid JWT token
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden: Invalid token' });
    }

    // If token is valid, attach the user data to the request for further use
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;