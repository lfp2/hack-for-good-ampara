const jwt = require('jsonwebtoken')
const firebaseConfig = require('../../config/firebase')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')

const Mail = require('../../lib/Mail')

const db =  firebaseConfig.firestore()
const healthProfessionalRef = db.collection('healthprofessionals')

class HealthProfessionalController {
  async store (req, res) {
    try {
      const {
        email,
        phoneNumber,
        displayName,
        bio,
        profession,
        uf,
        city
      } = req.body

      const verifyEmailExists = await healthProfessionalRef
        .where('email', '==', req.body.email)
        .get()

      if (!verifyEmailExists.empty) {
        return res.status(400).json({ error: 'Email de registro já cadastrado' })
      }

      const verifyNumberExists = await healthProfessionalRef
        .where('documentNumber', '==', req.body.documentNumber)
        .where('verified', '==', true)
        .get()

      if (!verifyNumberExists.empty) {
        return res
          .status(400)
          .json({ error: 'Numero de registro já cadastrado' })
      }

      const token = jwt.sign(
        { hash: crypto.randomBytes(10).toString('hex') },
        process.env.SECRET_KEY
      )

      const tokenEmailVerify = jwt.sign(
        { email },
        process.env.SECRET_KEY
      )

      const password = await bcrypt.hash(req.body.password, 8)

      const docRef = healthProfessionalRef.doc(token)

      await docRef
        .set({
          email,
          phoneNumber,
          displayName,
          password,
          bio,
          profession,
          tokenEmailVerify,
          uf,
          city,
          verified: false
        })

      Mail.sendMail({
        to: email,
        subject: 'Ampara - Verifique sua conta',
        template: 'verified',
        context: {
          volunteer_name: displayName,
          link_verify: `http://localhost:3333/verify/healthprofessional?email=${email}&token=${tokenEmailVerify}`
        }
      })

      return res.json({
        token
      })
    } catch (err) {
      console.log(err)
      return res.status(500).json({ err })
    }
  }

  async login (req, res) {
    try {
      const verifyEmailExists = await healthProfessionalRef
        .where('email', '==', req.body.email)
        .get()

      if (verifyEmailExists.empty) {
        return res.status(400).json({ error: 'Email ou senha incorreta' })
      }

      var token,
        displayName,
        phoneNumber,
        password,
        email,
        bio,
        profession,
        uf,
        city

      verifyEmailExists.forEach((doc) => {
        token = doc.id
        displayName = doc.data().displayName
        phoneNumber = doc.data().phoneNumber
        password = doc.data().password
        email = doc.data().email
        bio = doc.data().bio
        profession = doc.data().profession
        uf = doc.data().uf
        city = doc.data().city
      })

      const passwordValidation = await bcrypt.compare(
        req.body.password,
        password
      )

      if (!passwordValidation) { return res.status(400).json({ error: 'Email ou senha incorreta' }) }

      return res.json({
        token,
        displayName,
        phoneNumber,
        email,
        bio,
        profession,
        uf,
        city
      })
    } catch (err) {
      return res.status(500).json({ err })
    }
  }
}

module.exports = new HealthProfessionalController()
