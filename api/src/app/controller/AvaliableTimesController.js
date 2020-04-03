import Volunteer from '../models/Volunteers';
import AvaliableTime from '../models/AvaliableTimes';

import { Op, literal } from 'sequelize';

import {} from 'date-fns';

class AvaliableTimeController {
  async store(req, res) {
    const times = await AvaliableTime.create({
      avaliable_hours: req.body.avaliable_hours,
      volunteer_id: req.params.volunteer_id,
    }).catch(error => {
      return res.status(500).json({
        message: 'Erro! Entre em contato conosco',
        error,
      });
    });

    return res.status(201).json({ times });
  }

  async index(req, res) {
    const { date } = req.query;

    const [day, time] = date.split('T');

    const volunteersAvaliablesService = await Volunteer.findAll({
      attributes: ['id', 'name', 'email'],
      include: [
        {
          association: 'service',
          attributes: [],
          where: {
            [Op.not]: {
              date,
            },
          },
        },
        {
          association: 'avaliable',
          attributes: ['avaliable_hours'],
          where: literal(`'${time}' = ANY ("avaliable"."avaliable_hours")`),
        },
      ],
    });

    const volunteersAvaliables = await Volunteer.findAll({
      attributes: ['id', 'name', 'email'],
      where: literal(
        `"Volunteers"."id" NOT IN (SELECT volunteer_id FROM services)`
      ),
      include: [
        {
          association: 'avaliable',
          attributes: ['avaliable_hours'],
          where: literal(`'${time}' = ANY ("avaliable"."avaliable_hours")`),
        },
      ],
    });

    return res
      .status(200)
      .json(volunteersAvaliablesService.concat(volunteersAvaliables));
  }
}

export default new AvaliableTimeController();
