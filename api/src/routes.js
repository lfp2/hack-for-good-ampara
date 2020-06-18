const { Router } = require("express");

const HealthProfessionalController = require("./app/controllers/HealthProfessionalController");
const VolunteerController = require("./app/controllers/VolunteerController");
const VolunteerVerifyController = require("./app/controllers/VolunteerVerifyController");
const AvailableHoursController = require("./app/controllers/AvailableHoursController");
const AppointmentsController = require("./app/controllers/AppointmentsController");

const routes = new Router();

routes.post("/volunteer", VolunteerController.store);

routes.put("/volunteer", VolunteerController.update);

routes.get("/appointments", AppointmentsController.index);

routes.delete("/appointments", AppointmentsController.destroy);

routes.post("/appointments", AppointmentsController.store);

routes.post("/volunteer/signIn", VolunteerController.login);

routes.post("/available_hours", AvailableHoursController.store);

routes.delete("/available_hours", AvailableHoursController.destroy);

routes.get("/available_hours", AvailableHoursController.index);

routes.post(
  "/volunteer/listAppointments",
  VolunteerController.listAppointments
);

routes.post("/healthprofessional", HealthProfessionalController.store);

routes.post("/healthprofessional/signIn", HealthProfessionalController.login);

routes.get("/verify/volunteer", VolunteerVerifyController.index);

module.exports = routes;
