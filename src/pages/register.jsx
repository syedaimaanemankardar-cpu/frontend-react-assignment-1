import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { User, Mail, Lock } from 'lucide-react';

export default function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50 flex flex-col">

      {/* Registration Form Section */}
      <section className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-yellow-200 p-8 md:p-12 w-full max-w-md">
          <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">
            Create Your Account
          </h2>
          <form className="grid gap-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600" size={20} />
              <input
                type="text"
                placeholder="Full Name"
                className="border border-green-200 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 w-full"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600" size={20} />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-green-200 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 w-full"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600" size={20} />
              <input
                type="password"
                placeholder="Password"
                className="border border-green-200 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 w-full"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600" size={20} />
              <input
                type="password"
                placeholder="Confirm Password"
                className="border border-green-200 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 w-full"
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
            Already have an account?{' '}
            <a href="/login" className="text-yellow-400 hover:text-yellow-500 font-semibold">
              Log In
            </a>
          </p>
        </div>
      </section>

    </div>
  );
}
