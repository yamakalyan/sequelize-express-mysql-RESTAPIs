const { Sequelize } = require("sequelize");
require("dotenv").config();
const config = require("../config/config");

const { username, password, host, dialect, database } = config.development;
const db = new Sequelize(database, username, password, {
  dialect: dialect,
  host: host,
});

db.authenticate()
  .then((result) => {
    console.log("DATABASE CONNECTED SUCCESSFULLY WITH SEQUELIZE ! :)");
  })
  .catch((error) => console.log("FAILED TO CONNECT DATABASE : " + error));

module.exports = db;
