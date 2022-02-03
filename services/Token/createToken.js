const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtConfig = {
expiresIn: '1h',
algorithm: 'HS256',
};

const createToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, jwtConfig);
  return token;
};

module.exports = createToken;