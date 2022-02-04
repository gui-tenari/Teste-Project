const jwt = require('jsonwebtoken');
const errorConstructor = require('../../helpers/errorConstructor');
require('dotenv').config();

const decodeToken = (token) => {
    const user = jwt.decode(token, process.env.JWT_SECRET);
    if (!user || !user.email || !user.displayName) { 
      throw errorConstructor('unauthorized', 'Expired or invalid token'); 
    }
    return user;
};

module.exports = decodeToken;