const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  console.log('Authorization Header:', req.headers.authorization);

  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).send('Access Denied');
  }

  try {
    const verified = jwt.verify(token, 'secret');
    req.user = verified;
    next();
  } catch (error) {    res.status(400).send('Invalid Token');
  }
};

module.exports = authMiddleware;