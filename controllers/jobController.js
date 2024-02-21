const model = require("../model/indexModel");
const { Op } = require("sequelize");
const controller = {};

controller.getAll = async function (req, res, next) {
  try {
    const jobData = await model.job.findAll();
    if (jobData.length != 0) {
      res.status(200).json({
        message: "DataFound Successfully",
        results: jobData,
      });
    }
  } catch (error) {
    next(error);
  }
};

controller.getJob = async (req, res, next) => {
  try {
    const uniquejobData = await model.job.findAll;
    ({ where: { job_id: { [Op.like]: `${req.params.job_id}` } } });
    if (uniquejobData.length != 0) {
      res.status(200).json({
        message: `${req.params.job_id} dataFound`,
        results: uniquejobData,
      });
    }
  } catch (error) {
    next(error);
  }
};

controller.createNew = async (req, res, next) => {
  try {
    const values = {
      job_id: "JOB" + new Date.now(),
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      company: req.body.company,
      openings: req.body.openings,
    };
    await model.job
      .create(values)
      .then((result) => {
        res.status(200).json({
          message: "Successfully created",
          results: values,
        });
      })
      .catch((error) => console.log(error));
  } catch (error) {
    next(error);
  }
};

controller.update = async (req, res, next) => {
  try {
    const values = {
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      company: req.body.company,
      openings: req.body.openings,
    };
    await model.job
      .findAll({ where: { job_id: req.params.job_id } })
      .then(async (result) => {
        if (result != 0) {
          await model.job
            .update(values, {
              where: { job_id: req.params.job_id },
            })
            .then((updateResult) => {
              res.status(200).json({
                message: "Updated successfully",
                results: values,
              });
            });
        } else {
        }
      });
  } catch (error) {
    next(error);
  }
};

controller.deletePermanent = async (req, res, next) => {
  try {
    await model.job
      .findAll({ where: { job_id: req.params.job_id } })
      .then(async (result) => {
        if (result != 0) {
          await model.job
            .destroy({
              where: { job_id: req.params.job_id },
            })
            .then((updateResult) => {
              res.status(200).json({
                message: "Deleted successfully",
                results: values,
              });
            });
        } else {
        }
      });
  } catch (error) {
    next(error);
  }
};

controller.delete = async (req, res, next) => {
  try {
    await model.job
      .findAll({ where: { job_id: req.params.job_id } })
      .then(async (result) => {
        if (result != 0) {
          await model.job
            .update(
              { ifdeleted: 1 },
              {
                where: { job_id: req.params.job_id },
              }
            )
            .then((updateResult) => {
              res.status(200).json({
                message: "Deleted successfully",
                results: values,
              });
            });
        } else {
        }
      });
  } catch (error) {
    next(error);
  }
};

module.exports = controller;
