import Service from '../models/Services';

class HealthProfessionalServiceController {
  async index(req, res) {
    const services = await Service.findAll({
      where: {
        health_professional_id: req.params.health_professional_id,
      },
      attribute: ['id', 'date'],
      include: [
        {
          association: 'volunteer',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });
    return res.status(201).json(services);
  }
}

export default new HealthProfessionalServiceController();
