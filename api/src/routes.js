import { Router } from 'express';

import Auth from './app/middlewares/auth';

import VolunteerController from './app/controller/VolunteerController';
import HealthProfessionalController from './app/controller/HealthProfessionalController';
import VolunteerSessionController from './app/controller/VolunteerSessionController';
import HealthProfessionalSessionController from './app/controller/HealthProfessionalSessionController';
import AvaliableTimesController from './app/controller/AvaliableTimesController';
import ServiceController from './app/controller/ServiceController';
import VolunteerServiceController from './app/controller/VolunteerServiceController';
import HealthProfessionalServiceController from './app/controller/HealthProfessionalServiceController';

const routes = new Router();

routes.post('/volunteer', VolunteerController.store);

routes.post('/auth/volunteer', VolunteerSessionController.store);

routes.get(
  '/service/volunteer/:volunteer_id',
  Auth.volunteer,
  VolunteerServiceController.index
);

routes.post('/auth/health', HealthProfessionalSessionController.store);

routes.post('/health_professional', HealthProfessionalController.store);

routes.get(
  '/service/health/:health_professional_id',
  Auth.healthProfessional,
  HealthProfessionalServiceController.index
);

routes.post('/avaliable/:volunteer_id', AvaliableTimesController.store);

routes.post('/service', ServiceController.store);

routes.delete('/service/:service_id', ServiceController.delete);

export default routes;
