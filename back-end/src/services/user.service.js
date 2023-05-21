const { User } = require('../database/models');

const create = async (newUser) => User.create(newUser);

const getByEmail = async (email) => User.findOne({ where: { email } });

const login = async () => {
    
};

const getSellers = async () => User.findAll({ where: { role: 'seller' } });

module.exports = {
    getByEmail,
    create,
    login,
    getSellers,
};