const jwt = require('jsonwebtoken');
const fs = require('fs');

// const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();
const secret = fs.readFileSync('../back-end/jwt.evaluation.key', { encoding: 'utf-8' });
console.log(secret);

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

module.exports = (payload) => jwt.sign(payload, secret, jwtConfig);
