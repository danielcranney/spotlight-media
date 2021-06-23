export default async function contact(req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    name: "smtp.gmail.com",
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USERNAME,
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
    if (err) {
      console.log(err);
    } else {
      // console.log(info);
      console.log(`The status code is: ${res.statusCode}`);
    }
  });
  console.log(req.body); // Form Contents
  res.status(200).json({ message: "Success!" });
}
