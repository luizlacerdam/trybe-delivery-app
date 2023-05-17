const jwt = require('jsonwebtoken');
const fs = require('fs');

 function getSecret() {
  const secret = (fs.readFileSync('../../jwt.evaluation.key', 'utf-8')).trim();
  return secret;
}

const secret = process.env.JWT_SECRET || getSecret();
console.log(secret);

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

module.exports = (payload) => jwt.sign(payload, secret, jwtConfig);
