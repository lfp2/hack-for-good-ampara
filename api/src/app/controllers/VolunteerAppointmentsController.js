const firebaseConfig = require("../../config/firebase");

const db = firebaseConfig.firestore();

class VolunteerAppointmentsController {
  async store(req, res) {
    try {
      const { token } = req.body;

      const appointmentRef = db.collection("appointmentAgenda");

      const getAppointmentsSnapshot = await appointmentRef
        .where("volunteerToken", "==", token)
        .orderBy("timestamp", "desc")
        .get();

      var appointments = [];

      getAppointmentsSnapshot.forEach((doc) => {
        appointments.push(doc.data());
      });

      return res.json(appointments);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err });
    }
  }
}

module.exports = new VolunteerAppointmentsController();
