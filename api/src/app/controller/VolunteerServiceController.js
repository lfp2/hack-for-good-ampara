import Service from '../models/Services';

class VolunteerServiceController {
  async index(req, res) {
    const services = await Service.findAll({
      where: {
        volunteer_id: req.params.volunteer_id,
      },
      attribute: ['id', 'date'],
      include: [
        {
          association: 'health_professionals',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });
    return res.status(201).json(services);
  }
}

export default new VolunteerServiceController();
