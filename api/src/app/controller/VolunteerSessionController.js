import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

import Volunteer from '../models/Volunteers';

class VolunteerSessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const volunteer = await Volunteer.findOne({
      where: { email },
      attributes: ['id', 'name', 'bio', 'number_registry', 'password_hash'],
    });

    if (!volunteer) {
      return res.status(401).json({ error: 'Email não cadastrado' });
    }

    if (!(await volunteer.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha inválida' });
    }

    const { id, name, bio, number_registry } = volunteer;

    return res.json({
      volunteer: { id, name, email, bio, number_registry },
      token: jwt.sign({ id, is: 'volunteer' }, authConfig.secret),
    });
  }
}

export default new VolunteerSessionController();
