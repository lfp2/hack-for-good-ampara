import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

import HealthProfessional from '../models/HealthProfessionals';

class HealthProfessionalController {
  async store(req, res) {
    const { email, password } = req.body;

    const health_professional = await HealthProfessional.findOne({
      where: { email },
      attributes: ['id', 'name', 'bio', 'number_registry', 'password_hash'],
    });

    if (!health_professional) {
      return res.status(401).json({ error: 'Email não cadastrado' });
    }

    if (!(await health_professional.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha inválida' });
    }

    const { id, name } = health_professional;

    return res.json({
      health_professional: { id, name, email, bio, number_registry },
      token: jwt.sign({ id, is: 'health_professional' }, authConfig.secret),
    });
  }
}

export default new HealthProfessionalController();
