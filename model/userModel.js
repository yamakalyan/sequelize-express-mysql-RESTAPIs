const sequelize = require("sequelize");
const db = require("../config/database");
let user = db.define("user", {
  id: { type: sequelize.INTEGER },
  user_id: { type: sequelize.STRING, primaryKey: true },
  name: { type: sequelize.STRING },
  mobile: { type: sequelize.STRING },
  email: { type: sequelize.STRING },
  password: { type: sequelize.STRING },
  key: { type: sequelize.STRING },
  status: { type: sequelize.INTEGER },
  ifdeleted: { type: sequelize.INTEGER },
});

module.exports = user;
