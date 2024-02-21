const userModel = require("./userModel");
const jobModel = require("./jobModel");
const model = {};
model.user = userModel;
model.job = jobModel;
module.exports = model;
