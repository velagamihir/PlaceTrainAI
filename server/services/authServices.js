const bcrypt = require("bcrypt");
const crypto = require("node:crypto");
const { createUser, findUserByEmail } = require("../models/userModel");
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
