const { Router } = require("express");

const VolunteerController = require("./app/controllers/VolunteerController");

const routes = new Router();

routes.post("/volunteer", VolunteerController.store);

routes.post("/volunteer/signIn", VolunteerController.login);

module.exports = routes;
