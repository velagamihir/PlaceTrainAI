const bcrypt = require("bcrypt");
const crypto = require("node:crypto");
const {
  createUser,
  findUserByEmail,
  returnPassword,
} = require("../models/userModel");
const { isValidEmail } = require("../validations/validation");
exports.registerService = async (
  fullname,
  email,
  password,
  branch,
  year,
  career_interest,
) => {
  try {
    const result = await findUserByEmail(email);
    if (result) {
      const error = new Error("User already exists");
      error.statusCode = 409;
      throw error;
    }
    let emailValidity = isValidEmail(email);
    if (!emailValidity) {
      const error = new Error("Invalid email");
      error.statusCode = 422;
      throw error;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    let uuid = crypto.randomUUID();
    let createdUser = await createUser(
      uuid,
      fullname,
      email,
      hashedPassword,
      branch,
      year,
      career_interest,
    );
    console.log(createdUser);
    return createdUser;
  } catch (error) {
    const message = error.message || "Internal Server Error";
    const statusCode = error.statusCode || 500;
    console.log(error);
    throw error;
  }
};
exports.loginService = async (email, password) => {
  try {
    const result = await findUserByEmail(email);
    if (!result) {
      const error = new Error("Invalid credentials");
      error.statusCode = 401;
      throw error;
    }
    const user = await findUserByEmail(email);
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      const error = new Error("Invalid Credentials");
      error.statusCode = 400;
      throw error;
    }
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
