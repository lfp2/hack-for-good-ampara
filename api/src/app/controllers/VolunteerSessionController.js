const firebaseConfig = require("../../config/firebase");
const bcrypt = require("bcryptjs");

const db = firebaseConfig.firestore();
const volunteerRef = db.collection("volunteers");

class VolunteerSessionController {
  async store(req, res) {
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
        city,
        cep;

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
        cep = doc.data().cep;
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
        cep,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err });
    }
  }
}

module.exports = new VolunteerSessionController();
