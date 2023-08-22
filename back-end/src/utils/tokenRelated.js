const jwt = require('jsonwebtoken');
const fs = require('fs');

// const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();
const secret = fs.readFileSync('../back-end/jwt.evaluation.key', { encoding: 'utf-8' }) || 'secret';
const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

function tokenGenerator(payload) {
  return jwt.sign(payload, secret, jwtConfig);
}

function tokenValidation(token) {
 return jwt.verify(token, secret);
}

module.exports = {
  tokenGenerator,
  tokenValidation,
};
