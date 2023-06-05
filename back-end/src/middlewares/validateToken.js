const { tokenValidation } = require('../utils/tokenRelated');

const validateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  try {
    const decoded = tokenValidation(token);
    console.log(decoded);
    // const user = await UserService.getById(decoded.data.userId);
    req.body.user = { ...decoded.data };
    next();
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = {
  validateToken,
};
