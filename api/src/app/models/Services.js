import Sequelize, { Model } from 'sequelize';

class Services extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        volunteer_id: Sequelize.INTEGER,
        health_professional_id: Sequelize.INTEGER,
        status: {
          type: Sequelize.ENUM('scheduled', 'canceled'),
          defaultValue: 'scheduled',
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Volunteers, {
      foreignKey: 'volunteer_id',
      as: 'volunteer',
    });
    this.belongsTo(models.HealthProfessionals, {
      foreignKey: 'health_professional_id',
      as: 'health_professionals',
    });
  }
}

export default Services;
