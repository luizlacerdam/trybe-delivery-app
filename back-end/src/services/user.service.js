const { User } = require('../database/models');

const create = async (newUser) => User.create(newUser);

const getByEmail = async (email) => User.findOne({ where: { email } });

const getByName = async (name) => User.findOne({ where: { name } });

const getSellers = async () => User.findAll({ where: { role: 'seller' } });

const findAll = async () => {
   const users = await User.findAll(); 
   return users.map(({ dataValues }) => {
    const { password, ...rest } = dataValues;
    return rest;
   });
};

module.exports = {
    getByEmail,
    create,
    getByName,
    getSellers,
    findAll,
};