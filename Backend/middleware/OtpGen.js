function OtpGen(req, res, next) {
  const otp = Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit OTP
  req.otp = otp; // Store the OTP in the request object for later use
  next(); // Call next middleware
}
module.exports = OtpGen;
