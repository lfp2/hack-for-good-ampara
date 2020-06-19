const firebaseConfig = require("../../config/firebase");
const twilio = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const VoiceResponse = require("twilio").twiml.VoiceResponse;

const db = firebaseConfig.firestore();
const emergencyLineRef = db.collection("emergencyLine");

class Twilio {
  async welcome(req, res) {
    try {
      const response = new VoiceResponse();
      response.say(
        { voice: "alice", language: "pt-BR" },
        "Olá, seja bem-vindo ao atendimento Ampara." +
          "Aguarde um pouco enquanto redirecionamos a ligação."
      );
      const availableVolunteer = await emergencyLineRef
        .orderBy("timestamp")
        .limit(1)
        .get();

      if (availableVolunteer.empty) {
        response.say(
          { voice: "alice", language: "pt-BR" },
          "Não temos voluntários disponíveis, tente novamente mais tarde."
        );
      }
      var phoneNumber, displayName, token;
      availableVolunteer.forEach((doc) => {
        token = doc.id;
        phoneNumber = doc.data().phoneNumber;
        displayName = doc.data().displayName;
      });

      emergencyLineRef.doc(token).delete();

      response.say(
        { voice: "alice", language: "pt-BR" },
        "Conectando você com " + displayName + ". "
      );
      response.dial(phoneNumber, {
        action: "/call_volunteer/goodbye/",
      });
      res.set("Content-Type", "text/xml");
      console.log(response.toString());
      return res.send(response.toString());
    } catch (error) {
      console.log(error);
    }
  }

  goodbye(req, res) {
    const response = new VoiceResponse();
    response.say(
      { voice: "alice", language: "pt-BR" },
      "Obrigado por usar o Ampara, amparando quem mais precisa"
    );
    response.hangup();
    res.set("Content-Type", "text/xml");
    res.send(response.toString());
  }
}

module.exports = new Twilio();
