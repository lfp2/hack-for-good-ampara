import { QueryTypes } from 'sequelize';

import {
  parseISO,
  isBefore,
  subDays,
  endOfDay,
  addHours,
  format,
} from 'date-fns';
import pt from 'date-fns/locale/pt';

import Mail from '../../lib/Mail';

import Volunteer from '../models/Volunteers';
import HealthProfessionals from '../models/HealthProfessionals';
import Service from '../models/Services';

class ServiceController {
  async store(req, res) {
    const {
      appt_time,
      appt_date,
      appt_phone_number,
    } = req.body.Memory.twilio.collected_data.schedule_appt.answers;

    const date = appt_date.answer + 'T' + appt_time.answer;
    const health_professional_email = appt_phone_number.answer;

    const parsedDay = parseISO(date);
    const time = format(addHours(parsedDay, 3), 'H:mm');
    const datePlusThree = format(addHours(parsedDay, 3), "yyyy-MM-dd'T'H:mm");

    if (isBefore(parsedDay, new Date())) {
      return res.status(400).json({
        valid: false,
      });
    }

    if (isBefore(subDays(endOfDay(parsedDay), 1), new Date())) {
      return res.status(400).json({
        valid: false,
      });
    }

    const health_professional = await HealthProfessionals.findOne({
      where: {
        email: health_professional_email,
      },
      attributes: ['id', 'name'],
    }).catch(error => {
      return res.status(500).json({
        valid: false,
      });
    });

    if (health_professional === null) {
      return res.status(400).json({
        valid: false,
      });
    }

    let volunteer = await Volunteer.sequelize.query(
      `SELECT v.id, v.name, v.email FROM volunteers AS v INNER JOIN services AS s ON v.id = s.volunteer_id AND NOT date = '${datePlusThree}' INNER JOIN avaliable_times AS av ON v.id = av.id AND '${time}' = ANY (av.avaliable_hours);`,
      { type: QueryTypes.SELECT }
    );

    let volunteersNeverAttended = await Volunteer.sequelize.query(
      `SELECT v.id, v.name, v.email FROM volunteers AS v INNER JOIN avaliable_times AS av ON v.id = av.id AND '${time}' = ANY (av.avaliable_hours) WHERE v.id NOT IN (SELECT volunteer_id FROM services);`,
      { type: QueryTypes.SELECT }
    );

    volunteer = volunteer.concat(volunteersNeverAttended);

    if (volunteer.length === 0) {
      return res.status(400).json({
        valid: false,
      });
    }

    const aleatorio = Math.floor(
      Math.random() * (Math.floor(volunteer.length - 1) - Math.ceil(0) + 1)
    );

    await Service.create({
      date,
      volunteer_id: volunteer[aleatorio].id,
      health_professional_id: health_professional.id,
    }).catch(error => {
      return res.status(500).json({
        valid: false,
      });
    });

    Mail.sendMail({
      to: [volunteer[aleatorio].email, health_professional_email],
      subject: 'Ampara - Nova consulta agendada',
      template: 'created',
      context: {
        email_health: health_professional_email,
        email_volunteer: volunteer[aleatorio].email,
        date: format(parsedDay, "dd 'de' MMMM', às' H:mm'h'", {
          locale: pt,
        }),
      },
    });

    return res.status(201).json({
      actions: [
        {
          redirect: 'task://complete_booking',
        },
      ],
    });
  }

  async delete(req, res) {
    const { service_id } = req.params;

    const service = await Service.findByPk(service_id, {
      attributes: ['date', 'status'],
      include: [
        {
          association: 'volunteer',
          attributes: ['id', 'name', 'email'],
        },
        {
          association: 'health_professionals',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    if (service === null) {
      return res.status(400).json({ error: 'Consulta não cadastrada!' });
    }

    if (service.status === 'canceled') {
      return res.status(400).json({ error: 'Consulta já cancelada!' });
    }

    const canceledService = await Service.update(
      {
        status: 'canceled',
      },
      {
        where: {
          id: service_id,
        },
      }
    );

    if (canceledService === false) {
      return res
        .status(500)
        .json({ error: 'Não foi possivel cancelar a sua consulta!' });
    }

    Mail.sendMail({
      to: [service.volunteer.email, service.health_professionals.email],
      subject: 'Ampara - Nova consulta cancelada',
      template: 'canceled',
      context: {
        date: format(service.date, "dd 'de' MMMM', às' H:mm'h'", {
          locale: pt,
        }),
      },
    });

    return res
      .status(200)
      .json({ message: 'A consulta foi cancelada com sucesso!' });
  }
}

export default new ServiceController();
