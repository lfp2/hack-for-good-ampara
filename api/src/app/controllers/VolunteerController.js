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
        cep
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
        cep,
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

  async update(req, res) {
    try {
      const {
        email,
        phoneNumber,
        displayName,
        bio,
        documentNumber,
        uf,
        city,
        token
      } = req.body;

      const docRef = volunteerRef.doc(token);

      await docRef.update({
        email,
        phoneNumber,
        displayName,
        bio,
        documentNumber,
        uf,
        city,
        cep
      });

      return res.json({
        token,
        email,
        phoneNumber,
        displayName,
        bio,
        documentNumber,
        uf,
        city
      });
    } catch(error) {
      return res.status(500).json({ err });
    }
  }

}

module.exports = new VolunteerController();
