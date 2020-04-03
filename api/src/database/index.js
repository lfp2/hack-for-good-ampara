import Sequelize from 'sequelize';

import Volunteers from '../app/models/Volunteers';
import HealthProfessionals from '../app/models/HealthProfessionals';
import AvaliableTimes from '../app/models/AvaliableTimes';
import Services from '../app/models/Services';

import databaseConfig from '../config/database';

const models = [Volunteers, HealthProfessionals, AvaliableTimes, Services];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
