const firebaseConfig = require("../../config/firebase");

const db = firebaseConfig.firestore();
const volunteerRef = db.collection("volunteers");
const agendaRef = db.collection("availableAgenda");

class AvailableHourController {
  async store(req, res) {
    try {
      const {
        token,
        displayName,
        bio,
        documentNumber,
        timestamp,
        phoneNumber,
        email,
        uf,
        city,
      } = req.body;

      const appointmentRef = db.collection("appointmentAgenda");

      const verifyHealthAppointmentSnapshot = await appointmentRef
        .where("timestamp", "==", timestamp)
        .get();

      let findAnotherAppointment = false;

      verifyHealthAppointmentSnapshot.forEach((doc) => {
        if (doc.data().status != "Consulta cancelada") {
          findAnotherAppointment = true;
        }
      });

      if (findAnotherAppointment) {
        return res.status(400).json({
          error: "Já existe uma consulta marcada para este horário",
        });
      }

      let batch = db.batch();

      let availableAgendaRef = agendaRef
        .doc(timestamp)
        .collection("doctors")
        .doc(token);
      batch.set(availableAgendaRef, {
        token,
        displayName,
        bio,
        documentNumber,
        phoneNumber,
        email,
        uf,
        city,
      });

      let volunteerAgendaRef = volunteerRef
        .doc(token)
        .collection("availableAgenda")
        .doc(timestamp);
      batch.set(volunteerAgendaRef, {
        timestamp,
      });

      await batch.commit();

      return res.json({
        timestamp,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err });
    }
  }

  async destroy(req, res) {
    try {
      const { token, timestamp } = req.body;

      const appointmentRef = db.collection("appointmentAgenda");

      const verifyHealthAppointmentSnapshot = await appointmentRef
        .where("timestamp", "==", timestamp)
        .get();

      if(verifyHealthAppointmentSnapshot){
        let findAnotherAppointment = false;
      verifyHealthAppointmentSnapshot.forEach((doc) => {
        if (doc.data().status != "Consulta cancelada") {
          findAnotherAppointment = true;
        }
      });

      if (findAnotherAppointment) {
        return res.status(400).json({
          error: "Já existe uma consulta marcada para este horário",
        });
      }
    }
      let batch = db.batch();

      let volunteerAgendaRef = volunteerRef
        .doc(token)
        .collection("availableAgenda")
        .doc(timestamp);

      batch.delete(volunteerAgendaRef);

      let availableAgendaRef = agendaRef
        .doc(timestamp)
        .collection("doctors")
        .doc(token);

      batch.delete(availableAgendaRef);

      await batch.commit();

      return res.json({
        token,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err });
    }
  }

  async index(req, res) {
    try {
      const { token } = req.body;

      let volunteerAgenda = await volunteerRef
        .doc(token)
        .collection("availableAgenda")
        .get();

      var timestamps = [];

      volunteerAgenda.forEach((doc) => {
        timestamps.push(doc.data());
      });

      return res.json(timestamps);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }
}

module.exports = new AvailableHourController();
