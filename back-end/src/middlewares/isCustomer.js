const isCustomer = (req, res, next) => {
    const { user } = req.body;
    if (user.role !== 'customer' && user.role !== 'administrator') {
        return res.status(403).json({ message: 'Restricted access' });
    }
    next();
    };
module.exports = {
    isCustomer,
};
