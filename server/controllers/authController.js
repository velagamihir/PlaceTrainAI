// modules import
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const { generateToken } = require("../config/jwt");
const { registerService, loginService } = require("../services/authServices");

exports.register = async (req, res, next) => {
  try {
    const { fullname, email, password, branch, year, career_interest } =
      req.body;
    const user = await registerService(
      fullname,
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
    const user = await loginService(email, password);
    const token = generateToken(user);
    res.status(200).send({
      status: "ok",
      message: "login successful",
      token: token,
      role: user.role,
    });
  } catch (error) {
    console.log(error);
    res.status(error.statusCode || 500).send({
      status: "error",
      message: error.message || "Internal Sever Error",
    });
    next(error);
  }
};
