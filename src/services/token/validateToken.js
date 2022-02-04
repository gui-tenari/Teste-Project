const decodeToken = require('./decodeToken');
const errorConstructor = require('../../helpers/errorConstructor');

const validateToken = (token) => {
  if (!token) throw errorConstructor('unauthorized', 'Token not found');
  
    const userInfos = decodeToken(token);
    return userInfos;
};

module.exports = validateToken;