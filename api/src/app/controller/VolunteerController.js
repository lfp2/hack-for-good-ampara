import Volunteer from '../models/Volunteers';
import { Op } from 'sequelize';

class VolunteerController {
  async store(req, res, next) {
    const volunteerExists = await Volunteer.findOne({
      where: {
        [Op.or]: [
          { email: req.body.email },
          { number_registry: req.body.number_registry },
        ],
      },
      attributes: ['email', 'number_registry'],
    });

    if (volunteerExists) {
      if (volunteerExists.email === req.body.email) {
        return res.status(400).json({ error: 'E-mail já cadastrado' });
      } else if (volunteerExists.number_registry === req.body.number_registry) {
        return res
          .status(400)
          .json({ error: 'Número de registro já cadastrado' });
      }
    }

    const { id, name, email } = await Volunteer.create(req.body).catch(
      error => {
        return res.status(500).json({
          message: 'Erro! Entre em contato conosco',
          error,
        });
      }
    );

    return next();
  }
}

export default new VolunteerController();
