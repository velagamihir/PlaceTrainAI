const jwt = require("jsonwebtoken");
const pool = require("../config/db");
const config = require("../config/config");

const authorizeUser = (authorizedUsers = []) => {
  return async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        return res.status(401).json({
          message: "Authorization header missing",
        });
      }

      const token = authHeader.split(" ")[1];

      if (!token) {
        return res.status(401).json({
          message: "Token not provided",
        });
      }

      const decoded = jwt.verify(token, config.jwtSecret);

      const userQuery = await pool.query(
        "SELECT id, email, role FROM users WHERE id=$1",
        [decoded.id],
      );

      if (userQuery.rows.length === 0) {
        return res.status(401).json({
          message: "User not found",
        });
      }

      const user = userQuery.rows[0];

      // check authorization array
      if (
        authorizedUsers.length > 0 &&
        !authorizedUsers.includes(user.role) &&
        !authorizedUsers.includes(user.id)
      ) {
        return res.status(403).json({
          message: "User not authorized",
        });
      }

      req.user = user;

      next();
    } catch (err) {
      return res.status(401).json({
        message: "Invalid or expired token",
      });
    }
  };
};

module.exports = authorizeUser;
