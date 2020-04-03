import HealthProfessional from '../models/HealthProfessionals';
import { Op } from 'sequelize';

class HealthProfessionalController {
  async store(req, res) {
    const healthExists = await HealthProfessional.findOne({
      where: {
        [Op.or]: [
          { email: req.body.email },
          { number_registry: req.body.number_registry },
        ],
      },
      attributes: ['email', 'number_registry'],
    });

    if (healthExists) {
      if (healthExists.email === req.body.email) {
        return res.status(400).json({ error: 'E-mail já cadastrado' });
      } else if (healthExists.number_registry === req.body.number_registry) {
        return res
          .status(400)
          .json({ error: 'Número de registro já cadastrado' });
      }
    }

    const { id, name, email } = await HealthProfessional.create(req.body).catch(
      error => {
        return res.status(500).json({
          message: 'Erro! Entre em contato conosco',
          error: error,
        });
      }
    );

    return res.status(201).json({ id, name, email });
  }
}

export default new HealthProfessionalController();
