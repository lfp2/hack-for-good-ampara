const firebaseConfig = require("../../config/firebase");

const db = firebaseConfig.firestore();
const agendaRef = db.collection("availableAgenda");

class AgendaController {
  async availableDoctors(req, res) {
    try {
      const { timestamp } = req.body;

      const getDoctorsSnapshot = await agendaRef
        .doc(timestamp)
        .collection("doctors")
        .get();

      if (!getDoctorsSnapshot.empty) {
        return res
          .status(400)
          .json({ error: "Não há voluntários disponíveis nesse horário" });
      }
      var doctors = [];

      getDoctorsSnapshot.forEach((doc) => {
        doctors.push(doc.data());
      });

      return res.json(doctors);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }
}

module.exports = new AgendaController();
