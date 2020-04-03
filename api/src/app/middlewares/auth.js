import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

class Auth {
  async volunteer(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).send({ error: 'Token não enviado' });
    }

    const token = authHeader.split(' ');

    try {
      const decoded = await promisify(jwt.verify)(token[1], authConfig.secret);

      if (decoded.is === 'volunteer') {
        return next();
      } else {
        return res
          .status(401)
          .send({ error: 'Função disponível somente para voluntários' });
      }
    } catch (err) {
      return res.status(401).json({ err });
    }
  }

  async healthProfessional(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).send({ error: 'Token não enviado' });
    }

    const token = authHeader.split(' ');

    try {
      const decoded = await promisify(jwt.verify)(token[1], authConfig.secret);
      console.log(decoded);
      if (decoded.is === 'health_professional') {
        return next();
      } else {
        return res.status(401).send({
          error: 'Função disponível somente para profissionais da saúde',
        });
      }
    } catch (err) {
      return res.status(401).json({ err });
    }
  }
}

export default new Auth();
