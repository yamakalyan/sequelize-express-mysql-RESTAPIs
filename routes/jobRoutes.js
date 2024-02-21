const jobRouter = require("express").Router();
const controllers = require("../controllers/indexController");

jobRouter.get("/", controllers.job.getAll);
jobRouter.get("/by/:job_id", controllers.job.getJob);
jobRouter.post("/create", controllers.job.createNew);
jobRouter.put("/update/:job_id", controllers.job.update);
jobRouter.put("/delete/:job_id", controllers.job.delete);
jobRouter.delete("/delete/parmanent/:job_id", controllers.job.deletePermanent);

// import this in main file and add routes like app.use(jobRouter, 'user')

module.exports = jobRouter;
