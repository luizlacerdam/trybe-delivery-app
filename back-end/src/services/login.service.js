const User = require('../database/models/User.model');

const getByEmail = (email) => User.findOne({ where: { email } });

module.exports = {
    getByEmail,
};