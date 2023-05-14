const { UserService } = require('../services');
const { hashMd5Encrypt } = require('../utils/md5');
const tokenGenerator = require('../utils/tokenGenerator');

const isBodyValid = (name, email, password) => name && email && password;

const create = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        
        if (!isBodyValid(name, email, password)) {
            return res.status(400).json({ message: 'Some required fields are missing' });
        }

        const user = await UserService.getByEmail(email);
  
        if (user) {
            return res.status(422).json({ message: 'Email já cadastrado.' }); 
        }
        
        const cryptoPass = hashMd5Encrypt(password); 
        
        const createNewUser = await UserService.create({ 
            name, email, password: cryptoPass });

        // token só é gerado após receber a confirmação na db que foi realmente criado um novo user
        
        const token = tokenGenerator({ data: { 
            name: createNewUser.name, email: createNewUser.email } });
        res.status(201).json({ token });
    } catch (err) {
        next(err);
    }
};

module.exports = { 
    create,
 };