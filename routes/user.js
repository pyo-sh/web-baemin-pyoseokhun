const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const db = require("../db/index");

router.post("/signup", async function (req, res, next) {
  try {
    const { email, password } = req.body;
    await db.user.put(email, { password });
    res.redirect("/");
  } catch (e) {
    next(createError(404));
  }
});

router.post("/login", async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await db.user.get(email);
    if (user.password === password) return res.redirect("/");
    throw Error("Unauthorized");
  } catch (e) {
    if (e.message === "Unauthorized") next(createError(401));
    else next(createError(404));
  }
});

module.exports = router;
