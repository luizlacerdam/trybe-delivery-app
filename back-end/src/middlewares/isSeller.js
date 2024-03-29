const isSeller = (req, res, next) => {
    const { user } = req.body;
    if (user.role !== 'administrator' && user.role !== 'seller') {
        return res.status(403).json({ message: 'Restricted access' });
    }
    next();
    };

module.exports = {
    isSeller,
};