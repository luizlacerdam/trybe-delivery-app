const { UserService } = require('../services');
const { hashMd5Encrypt } = require('../utils/md5');
const { tokenGenerator } = require('../utils/tokenRelated');

const isBodyValid = (name, email, password) => name && email && password;

const create = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;   
        if (!isBodyValid(name, email, password)) {
            return res.status(400).json({ message: 'Some required fields are missing.' });
        }
        const user = await UserService.getByEmail(email);
        if (user) { return res.status(409).json({ message: 'Email já cadastrado.' }); }
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

const getSellers = async (req, res, next) => {
    try {
        const sellers = await UserService.getSellers();
        return res.status(200).json({ sellers });
    } catch (error) {
        next(error);
    }
};

const userValidation = async (req, res) => 
res.status(200).json({ message: 'User validado com sucesso.' });

module.exports = { 
    create,
    getSellers,
    userValidation,
 };