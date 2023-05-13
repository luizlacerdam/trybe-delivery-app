const { User } = require('../database/models');

const create = async (newUser) => User.create(newUser);

const getByEmail = async (email) => User.findOne({ where: { email } });

const login = async () => {
    
};

module.exports = {
    getByEmail,
    create,
    login,
};