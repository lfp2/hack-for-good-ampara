const jwt = require('jsonwebtoken')
const firebaseConfig = require('../../config/firebase')

const volunteerRef = firebaseConfig.firestore().collection('volunteers')

class VerifyController {
  async index (req, res) {
    const { email = null, token = null } = req.query

    try {
      jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
        if (err) {
          return res.status(500).send({
            err,
            error: 'A autenticação falhou'
          })
        }

        if (email !== decoded.email) {
          return res.status(500).send({
            error: 'A autenticação falhou'
          })
        }
      })

      const verify = await volunteerRef
        .where('email', '==', email)
        .where('tokenEmailVerify', '==', token)
        .get()

      if (verify.empty) {
        return res.status(400).json({ error: 'Falha na verificação' })
      }

      var id
      verify.forEach((doc) => {
        id = doc.id
      })

      await volunteerRef.doc(id).update({
        verified: true,
        tokenEmailVerify: null
      })

      return res.json({ verificado: 'OK' })
    } catch (err) {
      return res.status(500).json({ err })
    }
  }
}

module.exports = new VerifyController()
