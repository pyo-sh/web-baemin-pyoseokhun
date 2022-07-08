const express = require("express");
const router = express.Router();
const db = require("../db/index");

router.post("/signup", async function (req, res, next) {
  const { email, password } = req.body;
  await db.user.put(email, { password });
  res.status(200).send();
});

router.post("/login", async function (req, res, next) {
  const { email, password } = req.body;
  const user = await db.user.get(email);
  if (user.password === password) return res.status(200).send();
  res.status(401).send();
});

module.exports = router;
