const transporter = require("./EmailConfig.js");
const sendVerification = async (email, verificationCode) => {
  try {
    const response = await transporter.sendMail({
      from: '"Tsuki ecom 👻"khatarnakcoder ', // corrected sender address
      to: email, // list of receivers
      subject: "Verify Your Email ✔", // Subject line
      text: "Hey, please verify your email!", // plain text body
      html: `<p>${verificationCode}</p>`, // HTML body
    });
    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Email failed to send:", error);
  }
};
module.exports = sendVerification;
