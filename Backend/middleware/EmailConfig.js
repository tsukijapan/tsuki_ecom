const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "khiladicoder@gmail.com",
    pass: "varc unks rbid rpzj",
  },
});

module.exports = transporter;
