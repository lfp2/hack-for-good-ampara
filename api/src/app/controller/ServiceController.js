import Volunteer from '../models/Volunteers';
import Service from '../models/Services';

import { literal } from 'sequelize';

import {
  parseISO,
  isBefore,
  subDays,
  endOfDay,
  addHours,
  format,
} from 'date-fns';

class ServiceController {
  async store(req, res) {
    const { date } = req.body;
    const { volunteer_id, health_professional_id } = req.params;

    const time = format(parseISO(date), 'HH:mm');

    const endDay = endOfDay(parseISO(date));
    const lastDay = subDays(endDay, 1);

    if (isBefore(parseISO(date), new Date())) {
      return res
        .status(400)
        .json({ error: 'Datas passadas nao são permitidas' });
    }

    if (isBefore(lastDay, new Date())) {
      return res.status(400).json({
        error: 'Só é possivel marcar um atendimento com um dia de antecedência',
      });
    }

    const volunteer = await Volunteer.findOne({
      where: {
        id: volunteer_id,
      },
      attributes: ['id', 'name', 'email'],
      include: [
        {
          association: 'service',
          attributes: [],
          where: {
            date,
          },
        },
        {
          association: 'avaliable',
          attributes: [],
          where: literal(`'${time}' = ANY ("avaliable"."avaliable_hours")`),
        },
      ],
    }).catch(error => {
      return res.status(500).json({
        message: 'Erro! Entre em contato conosco',
        error,
      });
    });

    if (volunteer !== null) {
      return res.status(400).json({
        error: 'Voluntário já esta com horário vago! Tente novamente.',
      });
    }

    const service = await Service.create({
      date,
      volunteer_id,
      health_professional_id,
    }).catch(error => {
      return res.status(500).json({
        message: 'Erro! Entre em contato conosco',
        error,
      });
    });

    return res.status(201).json(service);
  }
}

export default new ServiceController();
