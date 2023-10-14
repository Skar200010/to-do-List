const jwt = require('jsonwebtoken');
const secretKey  = "todolistuser"
// Middleware function to check for a valid JWT token
const authenticateToken = (req, res, next) => {
  
  const token = req.headers.authorization.split(' ')[1];
  
  console.log(token)

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    //console.log(err)
    if (err) {
      console.log(err)
      return res.status(403).json({ error: 'Forbidden: Invalid token' });
    }
    
    // If token is valid, attach the user data to the request for further use
    req.user = user;
    console.log(user)
    next();
  });
};

module.exports = authenticateToken;