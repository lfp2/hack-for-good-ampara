const firebaseConfig = require("../../config/firebase");
const FieldValue = require('firebase-admin').firestore.FieldValue;

const db = firebaseConfig.firestore();
const emergencyLineRef = db.collection("emergencyLine");

class EmergencyLineController {
  async store(req, res) {
    try {
      const { 
        displayName,
        phoneNumber,
        token
      } = req.body;

      const timestamp = FieldValue.serverTimestamp();

      await emergencyLineRef.doc(token).set({
        displayName,
        timestamp,
        phoneNumber: "+55" + phoneNumber
      })

      return res.json({ displayName, phoneNumber, token })

    } catch (err) {
      console.log(err);
      return res.status(500).json({ err });
    }
  }

  async destroy(req, res) {
    try{
      const {
        token
      } = req.body;

      await emergencyLineRef.doc(token).delete();

      return res.json({token})
    } catch (err) {
      return res.status(500).json({err});
    }
  }
}

module.exports = new EmergencyLineController();
