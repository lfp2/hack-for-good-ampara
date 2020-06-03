const firebaseConfig = require("../../config/firebase")
const Mail = require("../../lib/Mail");

const db = firebaseConfig.firestore()
const agendaRef = db.collection("availableAgenda")
const appointmentRef = db.collection("appointmentAgenda")

class AgendaController {
  async availableDoctors(req, res) {
    try {
      const { timestamp } = req.body

      const getDoctorsSnapshot = await agendaRef
        .doc(timestamp)
        .collection("doctors")
        .get()

      if (getDoctorsSnapshot.empty) {
        return res
          .status(400)
          .json({ error: "Não há voluntários disponíveis nesse horário" })
      }
      var doctors = []

      getDoctorsSnapshot.forEach((doc) => {
        doctors.push(doc.data())
      })

      return res.json(doctors)
    } catch (err) {
      return res.status(500).json({ err })
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
      } = req.body

      const verifyHealthAppointmentSnapshot = await appointmentRef
        .where("healthToken", "==", healthToken)
        .get()

      if (!verifyHealthAppointmentSnapshot.empty) {
        return res
          .status(400)
          .json({ error: "Já existe consulta marcada com este email" })
      }

      let batch = db.batch();
      const volunteerRef = db.collection("volunteers")

      const getVolunteerSnapshot = await volunteerRef
        .doc(volunteerToken)
        .collection("availableAgenda")
        .doc(timestamp)
        .get()

      if (!getVolunteerSnapshot.exists) {
        return res
          .status(400)
          .json({ error: "Horário não está mais disponível" })
      }

      let volunteerAgendaRef = volunteerRef
        .doc(volunteerToken)
        .collection("availableAgenda")
        .doc(timestamp)

      batch.delete(volunteerAgendaRef)

      let availableAgendaRef = agendaRef
        .doc(timestamp)
        .collection("doctors")
        .doc(volunteerToken)

      batch.delete(availableAgendaRef)

      const status = "Consulta agendada"

      let appointmentAgendaRef = appointmentRef.doc()

      batch.set(appointmentAgendaRef, {
        timestamp,
        volunteerToken,
        volunteerDisplayName,
        volunteerEmail,
        healthToken,
        healthDisplayName,
        healthPhone,
        healthEmail,
        status,
      })

      await batch.commit()

      Mail.sendMail({
        to: [volunteerEmail, healthEmail],
        subject: "Ampara - Consulta agendada",
        template: "created",
        context: {
          email_volunteer: volunteerEmail,
          email_health: healthEmail,
          date: timestamp,
        },
      })

      return res.json({
        timestamp,
        volunteerToken,
        volunteerDisplayName,
        volunteerEmail,
        healthToken,
        healthDisplayName,
        healthPhone,
        healthEmail,
        status,
      })
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err })
    }
  }
}

module.exports = new AgendaController()
