const { Router } = require("express");

const HealthController = require("./app/controllers/HealthController");
const VolunteerController = require("./app/controllers/VolunteerController");
const VolunteerSessionController = require("./app/controllers/VolunteerSessionController");
const HealthSessionController = require("./app/controllers/HealthSessionController");
const VolunteerVerifyController = require("./app/controllers/VolunteerVerifyController");
const AvailableHoursController = require("./app/controllers/AvailableHoursController");
const AppointmentsController = require("./app/controllers/AppointmentsController");
const EmergencyLineController = require("./app/controllers/EmergencyLineController");
const VolunteerAppointmentsController = require("./app/controllers/VolunteerAppointmentsController");
const HealthAppointmentsController = require("./app/controllers/HealthAppointmentsController");
const Twilio = require("./app/twilio/Twilio");

const routes = new Router();

routes.post("/volunteer", VolunteerController.store);

routes.put("/volunteer", VolunteerController.update);

routes.post("/appointments/list", AppointmentsController.index);

routes.delete("/appointments", AppointmentsController.destroy);

routes.post("/appointments", AppointmentsController.store);

routes.put("/appointments", AppointmentsController.update);

routes.post("/volunteer/sign_in", VolunteerSessionController.store);

routes.post("/available_hours", AvailableHoursController.store);

routes.delete("/available_hours", AvailableHoursController.destroy);

routes.post("/available_hours/list", AvailableHoursController.index);

routes.post(
  "/volunteer/list_appointments",
  VolunteerAppointmentsController.store
);

routes.post("/health", HealthController.store);

routes.post(
  "/health/list_appointments",
  HealthAppointmentsController.store
);

routes.post("/health/sign_in", HealthSessionController.store);

routes.post("/verify/volunteer", VolunteerVerifyController.index);

routes.post("/emergency_line", EmergencyLineController.store);

routes.delete("/emergency_line", EmergencyLineController.destroy);

routes.post("/call_volunteer/welcome", Twilio.welcome);

routes.post("/call_volunteer/goodbye", Twilio.goodbye);

module.exports = routes;
