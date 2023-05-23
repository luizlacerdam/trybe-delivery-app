require('dotenv/config');
const { UserService } = require('../services');
const { tokenGenerator } = require('../utils/tokenRelated');
const { hashMd5Compare } = require('../utils/md5');

const isBodyValid = (email, password) => email && password;

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    
    const user = await UserService.getByEmail(email);
  
    if (!user) {
      return res.status(404).json({ message: 'User not found' }); 
    }

    if (!hashMd5Compare(password, user.password)) {
      return res.status(422).json({ message: 'Password is incorrect' });
    }
    const { id, name, role } = user;
    const token = tokenGenerator({ data: { id, name, role, email } });

    return res.status(200).json({ token, user: { id, name, role, email } });
  } catch (err) {
    next(err);
  }
};

module.exports = {
    login,
};
