const nodemailer = require('nodemailer')
const { resolve } = require('path')
const exphbs = require('express-handlebars')
const nodemailerhbs = require('nodemailer-express-handlebars')

const mailConfig = require('../config/mail')

class Mail {
  constructor () {
    const { host, port, auth, secure } = mailConfig

    this.transporter = nodemailer.createTransport({
      host,
      port,
      auth: auth.user ? auth : null,
      secure
    })
    this.configureTemplates()
  }

  configureTemplates () {
    const viewPath = resolve(__dirname, '..', 'app', 'views', 'emails')

    this.transporter.use(
      'compile',
      nodemailerhbs({
        viewEngine: exphbs.create({
          layoutsDir: resolve(__dirname, viewPath, 'layouts'),
          partialsDir: resolve(viewPath, 'partials'),
          defaultLayout: 'default',
          extname: '.hbs'
        }),
        viewPath,
        extName: '.hbs'
      })
    )
  }

  sendMail (message) {
    return this.transporter.sendMail({
      ...mailConfig.default,
      ...message
    })
  }
}

module.exports = new Mail()
