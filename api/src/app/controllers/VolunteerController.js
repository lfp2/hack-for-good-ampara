const jwt = require('jsonwebtoken')
const firebaseConfig = require('../../config/firebase')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')

const volunteerRef = firebaseConfig.firestore().collection('volunteers')

class VolunteerController {
  async store (req, res) {
    const { email, phoneNumber, displayName, bio, documentName, documentNumber } = req.body

    const verifyEmailExists = await volunteerRef
      .where('email', '==', req.body.email)
      .get()
      .catch((err) => {
        return res.status(500).json({ err })
      })

    if (!verifyEmailExists.empty) {
      return res.status(400).json({ error: 'Email de registro já cadastrado' })
    }

    const verifyNumberExists = await volunteerRef
      .where('documentNumber', '==', req.body.documentNumber)
      .get()
      .catch((err) => {
        return res.status(500).json({ err })
      })

    if (!verifyNumberExists.empty) {
      return res.status(400).json({ error: 'Numero de registro já cadastrado' })
    }

    const token = jwt.sign({ hash: crypto.randomBytes(10).toString('hex') }, process.env.SECRET_KEY)

    const password = await bcrypt.hash(
      req.body.password,
      8
    )

    const docRef = await volunteerRef.doc(token)

    await docRef.set({
      email,
      phoneNumber,
      displayName,
      password,
      bio,
      documentName,
      documentNumber
    })
      .catch((err) => {
        return res.status(500).json({ err })
      })

    return res.json({
      token,
      displayName,
      phoneNumber,
      email,
      bio,
      documentName,
      documentNumber
    })
  }
}

module.exports = new VolunteerController()
