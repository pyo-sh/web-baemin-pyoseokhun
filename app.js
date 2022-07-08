const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const createError = require("http-errors");

const app = express();

/* View Engine */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

/* Middlewares */
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/* Routers */
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");

/* Connect Routers */
app.use("/", indexRouter);
app.use("/user", userRouter);

/* 404 Error Middleware */
app.use(function (req, res, next) {
  next(createError(404));
});

/* Error Handler */
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // TODO : ERROR PAGES
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
