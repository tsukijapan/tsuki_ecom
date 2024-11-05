import React, { useState } from "react";

const OTPVerification = () => {
  const [otp, setOtp] = useState(false);
  function VerifyOtp() {}
  return (
    <div className="flex items-center justify-center h-[70vh] bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-xl font-semibold text-center mb-4"></h2>

        <div>
          <h2 className="text-xl font-semibold text-center mb-4 text-gray-600">
            OTP Verification
          </h2>
          <input
            type="number"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter the OTP"
            className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={VerifyOtp}
            className="w-full bg-green-500 text-white mt-4 py-2 rounded hover:bg-green-600 transition-colors"
          >
            Verify OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
