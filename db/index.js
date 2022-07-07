const { Level } = require("level");

const db = new Level("/db/database", { valueEncoding: "json" });

const user = db.sublevel("user", { valueEncoding: "json" });
const session = db.sublevel("session", { valueEncoding: "json" });

module.exports = {
  user,
  session,
};
