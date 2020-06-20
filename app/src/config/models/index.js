import userDataModel from '../models/userData';
import volunteerModel from '../models/volunteerModel';
import healthModel from '../models/healthModel';
import rootModel from '../models/rootModel';

const model = {
  volunteer: volunteerModel,
  user: userDataModel,
  health: healthModel,
  ...rootModel,
};

export default model;
