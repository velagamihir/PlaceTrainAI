// modules import
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const { generateToken } = require("../config/jwt");
const { registerService } = require("../services/authServices");

exports.register = async (req, res, next) => {
  try {
    const { name, email, password, branch, year, career_interest } = req.body;
    const user = await registerService(
      name,
      email,
      password,
      branch,
      year,
      career_interest,
    );
    const token = generateToken({
      id: user.id,
      role: user.role,
    });
    res.status(200).json({
      message: "User registered",
      token,
    });
  } catch (error) {
    const message = error.message || "Internal Server Error";
    const statusCode = error.statusCode || 500;
    res.status(statusCode).send({
      status: "error",
      message: message,
    });
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user);

    res.json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    next(error);
  }
};
