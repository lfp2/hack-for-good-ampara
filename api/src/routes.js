import { Router } from 'express';

import Auth from './app/middlewares/auth';

import VolunteerController from './app/controller/VolunteerController';
import VolunteerSessionController from './app/controller/VolunteerSessionController';
import VolunteerServiceController from './app/controller/VolunteerServiceController';
import HealthProfessionalController from './app/controller/HealthProfessionalController';
import HealthProfessionalSessionController from './app/controller/HealthProfessionalSessionController';
import HealthProfessionalServiceController from './app/controller/HealthProfessionalServiceController';
import AvaliableTimesController from './app/controller/AvaliableTimesController';
import ServiceController from './app/controller/ServiceController';

const routes = new Router();

// cadastro
routes.post(
  '/volunteer',
  VolunteerController.store,
  VolunteerSessionController.store
);
routes.post(
  '/health_professional',
  HealthProfessionalController.store,
  HealthProfessionalSessionController.store
);

// login
routes.post('/auth/volunteer', VolunteerSessionController.store);
routes.post('/auth/health', HealthProfessionalSessionController.store);

// cadastro de horário
routes.post('/avaliable/:volunteer_id', AvaliableTimesController.store);

// cadastro de consulta
routes.post('/service', ServiceController.store);

// listar consultas
routes.get(
  '/service/volunteer/:volunteer_id',
  Auth.volunteer,
  VolunteerServiceController.index
);
routes.get(
  'service/health/:health_professional_id',
  Auth.healthProfessional,
  HealthProfessionalServiceController.index
);

// cancelar consulta
routes.delete('/service/:service_id', ServiceController.delete);

export default routes;
