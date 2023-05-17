const { UserService } = require('../services');
const { hashMd5Encrypt } = require('../utils/md5');
const tokenGenerator = require('../utils/tokenGenerator');

const isBodyValid = (name, email, password) => name && email && password;

const create = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;   
        if (!isBodyValid(name, email, password)) {
            return res.status(400).json({ message: 'Some required fields are missing' });
        }
        const user = await UserService.getByEmail(email);
        if (user) {
            return res.status(409).json({ message: 'Email já cadastrado.' }); 
        }
        
        const cryptoPass = hashMd5Encrypt(password); 
        
        const createNewUser = await UserService.create({ 
            name, email, password: cryptoPass, role });

        const token = tokenGenerator({ data: { 
            name: createNewUser.name, email: createNewUser.email, role: createNewUser.role } });
        res.status(201).json({ token, user: { name, email, role } });
    } catch (err) {
        next(err);
    }
};

module.exports = { 
    create,
 };