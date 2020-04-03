import Sequelize, { Model } from 'sequelize';

class AvaliableTimes extends Model {
  static init(sequelize) {
    super.init(
      {
        avaliable_hours: Sequelize.ARRAY(Sequelize.TIME),
        volunteer_id: Sequelize.INTEGER,
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
  }
}

export default AvaliableTimes;
