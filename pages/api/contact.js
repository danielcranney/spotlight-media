export default function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    name: "smtp.gmail.com",
    host: "smtp.gmail.com",
    service: "gmail",
    port: 465,
    secure: false,
    auth: {
      type: "OAuth2",
      user: "info@wearespotlight.co.uk",
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });
  const mailData = {
    from: req.body.email,
    to: "info@wearespotlight.co.uk",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<p>Name: ${req.body.name}</p>
             <p>Email: ${req.body.email}</p>
             <p>Message: ${req.body.message}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
