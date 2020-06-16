const jwt = require("jsonwebtoken");
const firebaseConfig = require("../../config/firebase");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const Mail = require("../../lib/Mail");

const db = firebaseConfig.firestore();
const volunteerRef = db.collection("volunteers");
const agendaRef = db.collection("availableAgenda");

class VolunteerController {
  async store(req, res) {
    try {
      const {
        email,
        phoneNumber,
        displayName,
        bio,
        documentNumber,
        uf,
        city,
      } = req.body;

      const verifyEmailExists = await volunteerRef
        .where("email", "==", req.body.email)
        .get();

      if (!verifyEmailExists.empty) {
        return res
          .status(400)
          .json({ error: "Email de registro já cadastrado" });
      }

      const verifyNumberExists = await volunteerRef
        .where("documentNumber", "==", req.body.documentNumber)
        .where("verified", "==", true)
        .get();

      if (!verifyNumberExists.empty) {
        return res
          .status(400)
          .json({ error: "Numero de registro já cadastrado" });
      }

      const token = jwt.sign(
        { hash: crypto.randomBytes(10).toString("hex") },
        process.env.SECRET_KEY
      );

      const tokenEmailVerify = jwt.sign({ email }, process.env.SECRET_KEY);

      const password = await bcrypt.hash(req.body.password, 8);

      const docRef = volunteerRef.doc(token);

      await docRef.set({
        email,
        phoneNumber,
        displayName,
        password,
        bio,
        documentNumber,
        tokenEmailVerify,
        uf,
        city,
        verified: false,
      });

      Mail.sendMail({
        to: email,
        subject: "Ampara - Verifique sua conta",
        template: "verified",
        context: {
          volunteer_name: displayName,
          link_verify: `http://localhost:3333/verify/volunteer?email=${email}&token=${tokenEmailVerify}`,
        },
      });

      return res.json({
        token,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err });
    }
  }

  async login(req, res) {
    try {
      const verifyEmailExists = await volunteerRef
        .where("email", "==", req.body.email)
        .get();

      if (verifyEmailExists.empty) {
        return res.status(400).json({ error: "Email ou senha incorreta" });
      }

      var token,
        displayName,
        phoneNumber,
        password,
        email,
        bio,
        documentNumber,
        uf,
        city;

      verifyEmailExists.forEach((doc) => {
        token = doc.id;
        displayName = doc.data().displayName;
        phoneNumber = doc.data().phoneNumber;
        password = doc.data().password;
        email = doc.data().email;
        bio = doc.data().bio;
        documentNumber = doc.data().documentNumber;
        uf = doc.data().uf;
        city = doc.data().city;
      });

      const passwordValidation = await bcrypt.compare(
        req.body.password,
        password
      );

      if (!passwordValidation) {
        return res.status(400).json({ error: "Email ou senha incorreta" });
      }

      return res.json({
        token,
        displayName,
        phoneNumber,
        email,
        bio,
        documentNumber,
        uf,
        city,
      });
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  async retrieveAvailableHours(req, res) {
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

  async makeAvailableHours(req, res) {
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

  async makeUnavailableHours(req, res) {
    try {
      const { token, timestamp } = req.body;

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

  async listAppointments(req, res) {
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

module.exports = new VolunteerController();
