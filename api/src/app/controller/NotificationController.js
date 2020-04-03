import Notification from '../schemas/Notification';
import User from '../models/User';

class NotificationController {
  async index(req, res) {
    const isProvider = await User.findOne({
      where: { id: req.body.userId, provider: true },
    });

    if (!isProvider) {
      res.status(401).json({
        error: 'Somente o prestador de serviço pode carregar as notificações',
      });
    }

    const notifications = await Notification.find({
      user: req.body.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);

    return res.json(notifications);
  }

  async update(req, res) {
    const notification = await Notification.findOneAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );

    return res.json(notification);
  }
}

export default new NotificationController();
