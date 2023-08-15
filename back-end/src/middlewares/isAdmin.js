const isAdmin = (req, res, next) => {
    const { user } = req.body;
    if (user.role !== 'administrator') {
        return res.status(403).json({ message: 'Restricted access' });
    }
    next();
    };
module.exports = {
    isAdmin,
};