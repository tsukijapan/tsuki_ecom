import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = ({ toggleAuthMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        {
          email,
          password,
        }
      );

      const userData = response.data;

      if (!userData.token) {
        toast.error("Login Failed");
        console.log(" Login failed", userData.message);
      } else {
        toast.success("Login Successfull");

        navigate("/");
        localStorage.setItem("token", userData.token);
        console.log(" login Successfull", userData.message);
      }
    } catch (error) {
      toast.success(error);
      console.error("An error occurred during Login:", error);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className=" flex justify-center items-center flex-col p-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-96   ">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex justify-center">
          Login
        </h2>
        <form onSubmit={handleLogin}>
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
          <div className="mb-6">
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
            Login
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Don't have an account?{" "}
          <button
            className="text-blue-500 underline"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
