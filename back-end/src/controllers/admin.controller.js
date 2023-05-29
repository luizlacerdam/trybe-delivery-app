const { UserService } = require('../services');
const { hashMd5Encrypt } = require('../utils/md5');
const { tokenGenerator } = require('../utils/tokenRelated');

const isBodyValid = (name, email, password) => name && email && password;

const create = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;   
        if (!isBodyValid(name, email, password)) {
            return res.status(400).json({ message: 'Some required fields are missing' });
        }
        const userE = await UserService.getByEmail(email);
        const userN = await UserService.getByName(name);
        if (userE || userN) { return res.status(409).json({ message: 'Usuario já cadastrado.' }); }
        
        const cryptoPass = hashMd5Encrypt(password); 
        const newUser = await UserService.create({ 
            name, email, password: cryptoPass, role });
        const userObj = { 
            id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role };
        const token = tokenGenerator({ data: { ...userObj } });
        return res.status(201).json({ token, user: { ...userObj } });
    } catch (err) {
        next(err);
    }
};

const findAll = async (req, res, next) => {
    try {
        const users = await UserService.findAll();
        return res.status(200).json({ users });
    } catch (error) {
        next(error);
    }
};

module.exports = { 
    create,
    findAll,
 };