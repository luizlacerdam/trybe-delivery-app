const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();

console.log(secret);

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

module.exports = (payload) => jwt.sign(payload, secret, jwtConfig);
