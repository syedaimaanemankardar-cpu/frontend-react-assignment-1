import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { User, Mail, Lock } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  // handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { name, email, password, confirmPassword } = formData;

    // -------------------------
    // CLIENT-SIDE VALIDATION
    // -------------------------
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    // -------------------------
    // SEND DATA TO BACKEND
    // -------------------------
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.message);
        return;
      }

      // Redirect to login page
      navigate("/login");

    } catch (err) {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50 flex flex-col">

      {/* Registration Form Section */}
      <section className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-yellow-200 p-8 md:p-12 w-full max-w-md">
          <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">
            Create Your Account
          </h2>

          {/* Error Message */}
          {error && (
            <p className="text-center text-red-500 font-semibold mb-4">
              {error}
            </p>
          )}

          <form className="grid gap-6" onSubmit={handleSubmit}>

            <div className="relative">
              <User
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600"
                size={20}
              />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="border border-green-200 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 w-full"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600"
                size={20}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="border border-green-200 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 w-full"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600"
                size={20}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border border-green-200 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 w-full"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600"
                size={20}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="border border-green-200 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 w-full"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold text-xl px-12 py-5 rounded-full shadow-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all w-full"
            >
              Register
            </button>

          </form>

          <p className="text-center text-green-700 mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-yellow-400 hover:text-yellow-500 font-semibold">
              Log In
            </a>
          </p>

        </div>
      </section>

    </div>
  );
}
