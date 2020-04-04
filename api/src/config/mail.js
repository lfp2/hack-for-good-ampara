import dotenv from 'dotenv/config';

export default {
  host: 'smtp.sendgrid.net',
  port: '587',
  secure: false,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY,
  },
  default: {
    from: 'Equipe Ampara <noreply@ampara.com>',
  },
};
