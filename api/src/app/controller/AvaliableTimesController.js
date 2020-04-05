import AvaliableTime from '../models/AvaliableTimes';

import { addHours, format } from 'date-fns';

class AvaliableTimeController {
  async store(req, res) {
    const { avaliable_hours } = req.body;
    const { volunteer_id } = req.params;

    const volunteerAvaliable = await AvaliableTime.findOne({
      where: {
        volunteer_id,
      },
    });

    if (volunteerAvaliable !== null) {
      return res.status(400).json({ error: 'Horas já cadastradas!' });
    }

    const hours = avaliable_hours.map(hour => {
      return format(addHours(parseInt(hour) * 60 * 60 * 1000, 6), 'H:mm');
    });

    const times = await AvaliableTime.create({
      avaliable_hours: hours,
      volunteer_id,
    }).catch(error => {
      return res.status(500).json({
        message: 'Erro! Entre em contato conosco',
        error,
      });
    });

    return res.status(201).json({ times });
  }
}

export default new AvaliableTimeController();
