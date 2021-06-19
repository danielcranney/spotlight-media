const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  name: "smtp.gmail.com",
  host: "smtp.gmail.com",
  service: "gmail",
  port: 465,
  secure: false,
  auth: {
    type: "OAuth2",
    user: "info@wearespotlight.co.uk",
    pass: "Spotlight_613",
    clientId:
      "545916667283-24qj8io16v99lg7755uh2fv29j6q8049.apps.googleusercontent.com",
    clientSecret: "fL4cXFGcY1zCA537us3fwDhH",
    refreshToken:
      "1//04t69p756gddQCgYIARAAGAQSNwF-L9IrnkdGFDN2hxhOKDBEVXsx09Ku3E467tt9XIySuzRTUhK04DMkIpKmNIF7lE-q-P4tZUw",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send Now");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "info@wearespotlight.co.uk",
    subject: "info@wearespotlight.co.uk",
    html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
