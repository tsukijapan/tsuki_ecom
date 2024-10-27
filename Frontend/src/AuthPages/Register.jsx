import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
const Register = ({ toggleAuthMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/Register",
        {
          username,
          email,
          password,
        }
      );

      const userData = response.data;

      if (!userData.token) {
        toast.error("Login Failed");
        console.log(" registration failed", userData.message);
      } else {
        toast.success("Login Successfull");
        navigate("/");
        console.log(" registration Successfull", userData.message);
      }
    } catch (error) {
      toast.error(error);
      console.error("An error occurred during registration:", error);
    }

    setUserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center flex-col p-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 ">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex  justify-center">
          Register
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700">UserName</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Already have an account?{" "}
          <button className="text-blue-500 underline" onClick={toggleAuthMode}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
