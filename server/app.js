const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const authRoutes = require("./routes/authRouter");

const app = express();

app.use(express.json());

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/auth", authRoutes);
module.exports = app;
