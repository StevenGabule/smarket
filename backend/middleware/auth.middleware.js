const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const config = require('config')
const JWT_SECRET = config.get('JWT_SECRET')

// check if the authentication user
exports.checkAuthUser = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      try {
        token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
      } catch (e) {
        return res.status(401).json({message: e.message})
      }
    }
    if (!token) return res.status(401).json({message: "Not authorized. No token!"})
  } catch (e) {
    console.log(e.message)
    return res.status(401).json({message: e.message})
  }
}
