const sequelize = require("sequelize");
const db = require("../config/database");
const job = db.define("job", {
  id: { type: sequelize.INTEGER },
  job_id: { type: sequelize.STRING, primaryKey: true },
  title: { type: sequelize.STRING },
  description: { type: sequelize.STRING },
  location: { type: sequelize.STRING },
  company: { type: sequelize.STRING },
  openings: { type: sequelize.INTEGER },
  experience: { type: sequelize.STRING },
  salary: { type: sequelize.DECIMAL },
  type: { type: sequelize.STRING },
  status: { type: sequelize.INTEGER },
  ifdeleted: { type: sequelize.INTEGER },
});

module.exports = job;
