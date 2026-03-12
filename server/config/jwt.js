const jwt = require("jsonwebtoken");
const config = require("../config/config");

exports.generateToken = (user) => {
  return jwt.sign({ id: user.id, role: user.role }, config.jwtSecret, {
    expiresIn: config.jwtExpire,
  });
};
