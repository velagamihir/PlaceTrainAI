const pool = require("../config/db");

exports.findUserByEmail = async (email) => {
  const result = await pool.query("SELECT * FROM users WHERE email=$1", [
    email,
  ]);

  return result.rows[0];
};

exports.createUser = async (
  uuid,
  fullname,
  email,
  password,
  branch,
  year,
  career_interest,
) => {
  const result = await pool.query(
    `INSERT INTO users(id,fullname,email,password,branch,year,career_interest,role)
     VALUES($1,$2,$3,$4,$5,$6,$7,$8) returning *`,
    [uuid, fullname, email, password, branch, year, career_interest, "student"],
  );

  return result.rows[0];
};
