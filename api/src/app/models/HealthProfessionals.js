import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class HealthProfessionals extends Model {
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

    this.addHook('beforeSave', async health_professionals => {
      if (health_professionals.password) {
        health_professionals.password_hash = await bcrypt.hash(
          health_professionals.password,
          8
        );
      }
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Services, {
      foreignKey: 'health_professional_id',
      as: 'service',
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default HealthProfessionals;
