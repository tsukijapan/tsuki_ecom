import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const OTPVerification = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const VerifyOtp = async (e) => {
    e.preventDefault();
    if (code.length !== 6) {
      toast.error("Please enter a 6-digit OTP.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/verifyemail",
        {
          code,
        }
      );
      const userData = response.data;
      if (userData.success === false) {
        toast.error(userData.message);
        console.log(userData.message);
        return;
      }
      toast.success(userData.message);
      navigate("/");
      console.log("User data:", userData);
    } catch (error) {
      toast.error("Invalid OTP or server error. Please try again.");
      console.error("Internal server error in OTP Verification:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-[70vh] bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <div>
          <h2 className="text-xl font-semibold text-center mb-4 text-gray-600">
            OTP Verification
          </h2>
          <input
            type="number"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter the OTP"
            className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            maxLength="6"
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
