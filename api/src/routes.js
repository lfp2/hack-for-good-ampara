const { Router } = require('express')

const HealthProfessionalController = require("./app/controllers/HealthProfessionalController");
const VolunteerController = require('./app/controllers/VolunteerController')
const VolunteerVerifyController = require('./app/controllers/VolunteerVerifyController')
const AgendaController = require('./app/controllers/AgendaController')

const routes = new Router()

routes.post('/agenda/availableDoctors', AgendaController.availableDoctors)

routes.post('/volunteer', VolunteerController.store)

routes.post('/volunteer/signIn', VolunteerController.login)

routes.post("/volunteer/availableHours", VolunteerController.availableHours);

routes.post("/healthprofessional", HealthProfessionalController.store);

routes.post("/healthprofessional/signIn", HealthProfessionalController.login)

routes.get('/verify/volunteer', VolunteerVerifyController.index)

module.exports = routes
