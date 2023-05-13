const { User } = require('../database/models');

const create = (newUser) => User.create(newUser);

const getByEmail = (email) => User.findOne({ where: { email } });

module.exports = {
    getByEmail,
    create,
};