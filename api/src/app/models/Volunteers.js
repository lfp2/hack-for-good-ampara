import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Volunteers extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        bio: Sequelize.STRING,
        number_registry: Sequelize.STRING,
        city: Sequelize.STRING,
        uf: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        phone: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async volunteer => {
      if (volunteer.dataValues.password) {
        volunteer.dataValues.password_hash = await bcrypt.hash(
          volunteer.dataValues.password,
          8
        );
      }
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Services, {
      foreignKey: 'volunteer_id',
      as: 'service',
    });
    this.hasOne(models.AvaliableTimes, {
      foreignKey: 'volunteer_id',
      as: 'avaliable',
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Volunteers;
