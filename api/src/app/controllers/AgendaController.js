const firebaseConfig = require("../../config/firebase");
const Mail = require("../../lib/Mail");

const db = firebaseConfig.firestore();
const agendaRef = db.collection("availableAgenda");
const appointmentRef = db.collection("appointmentAgenda");
const validStatus = "Consulta agendada";


class AgendaController {
  async availableDoctors(req, res) {
    try {
      const { timestamp } = req.body;

      const getDoctorsSnapshot = await agendaRef
        .doc(timestamp)
        .collection("doctors")
        .get();

      if (getDoctorsSnapshot.empty) {
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

  async appointmentDoctor(req, res) {
    try {
      const {
        timestamp,
        volunteerToken,
        volunteerDisplayName,
        volunteerEmail,
        healthToken,
        healthDisplayName,
        healthPhone,
        healthEmail,
      } = req.body;

      const verifyHealthAppointmentSnapshot = await appointmentRef
        .where("healthToken", "==", healthToken)
        .where("status", "==", validStatus)
        .get();

      if (!verifyHealthAppointmentSnapshot.empty) {
        return res
          .status(400)
          .json({ error: "Já existe consulta marcada com este email" });
      }

      let batch = db.batch();
      const volunteerRef = db.collection("volunteers");

      const getVolunteerSnapshot = await volunteerRef
        .doc(volunteerToken)
        .collection("availableAgenda")
        .doc(timestamp)
        .get();

      if (!getVolunteerSnapshot.exists) {
        return res
          .status(400)
          .json({ error: "Horário não está mais disponível" });
      }

      let volunteerAgendaRef = volunteerRef
        .doc(volunteerToken)
        .collection("availableAgenda")
        .doc(timestamp);

      batch.delete(volunteerAgendaRef);

      let availableAgendaRef = agendaRef
        .doc(timestamp)
        .collection("doctors")
        .doc(volunteerToken);

      batch.delete(availableAgendaRef);

      let appointmentAgendaRef = appointmentRef.doc();

      batch.set(appointmentAgendaRef, {
        timestamp,
        volunteerToken,
        volunteerDisplayName,
        volunteerEmail,
        healthToken,
        healthDisplayName,
        healthPhone,
        healthEmail,
        status: validStatus
      });

      await batch.commit();

      Mail.sendMail({
        to: [volunteerEmail, healthEmail],
        subject: "Ampara - Consulta agendada",
        template: "created",
        context: {
          email_volunteer: volunteerEmail,
          email_health: healthEmail,
          date: timestamp,
        },
      });

      return res.json({
        timestamp,
        volunteerToken,
        volunteerDisplayName,
        volunteerEmail,
        healthToken,
        healthDisplayName,
        healthPhone,
        healthEmail,
        status: validStatus
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err });
    }
  }

  async cancelAppointmentDoctor(req, res) {
    try {
      const { timestamp, healthEmail, accountType } = req.body;

      const verifyHealthAppointmentSnapshot = await appointmentRef
        .where("healthEmail", "==", healthEmail)
        .where("timestamp", "==", timestamp)
        .where("status", "==", validStatus)
        .get();

      if (verifyHealthAppointmentSnapshot.empty) {
        return res.status(400).json({ error: "Consulta não encontrada" });
      }

      var token;
      var volunteerEmail;

      const status = "Consulta cancelada";

      verifyHealthAppointmentSnapshot.forEach((doc) => {
        token = doc.id;
        volunteerEmail = doc.data().volunteerEmail;
      });

      await appointmentRef.doc(token).update({
        status,
      });

      if (accountType == "healthProfessional") {
        Mail.sendMail({
          to: [volunteerEmail, healthEmail],
          subject: "Ampara - Consulta cancelada",
          template: "canceledHealth",
          context: {
            date: timestamp
          },
        });
      } else if (accountType == "volunteer") {
        Mail.sendMail({
          to: [volunteerEmail, healthEmail],
          subject: "Ampara - Consulta cancelada",
          template: "canceledVolunteer",
          context: {
            date: timestamp
          },
        });
      }

      return res.json({
        timestamp,
        status,
        healthEmail,
        volunteerEmail,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err });
    }
  }
}

module.exports = new AgendaController();
