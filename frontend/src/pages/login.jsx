import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { useNavigate, Link} from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Client-side validation
    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Save token and user info
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "/dashboard";
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50 flex flex-col">
      <section className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-yellow-200 p-8 md:p-12 w-full max-w-md">
          <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">
            Login to Your Account
          </h2>
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600"
                size={20}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-green-200 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600"
                size={20}
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-green-200 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold text-xl px-12 py-5 rounded-full shadow-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all w-full"
            >
              Log In
            </button>
          </form>
          {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
          <p className="text-center text-green-700 mt-6">
            Don’t have an account?{" "}
            <a
              href="/register"
              className="text-yellow-400 hover:text-yellow-500 font-semibold"
            >
              Sign Up
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
