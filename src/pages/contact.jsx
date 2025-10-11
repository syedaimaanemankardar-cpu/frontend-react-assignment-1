import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-800 py-20 flex items-center justify-center">
        <div className="text-center px-4 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8">
            Have questions, suggestions, or just want to say hello? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="max-w-5xl mx-auto px-4 py-20 grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-yellow-200 text-center hover:shadow-xl transition-all">
          <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="text-white" size={40} />
          </div>
          <h3 className="text-2xl font-bold text-green-800 mb-2">Email Us</h3>
          <p className="text-green-700">support@cookify.com</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-yellow-200 text-center hover:shadow-xl transition-all">
          <div className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Phone className="text-white" size={40} />
          </div>
          <h3 className="text-2xl font-bold text-green-800 mb-2">Call Us</h3>
          <p className="text-green-700">+92 300 1234567</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-yellow-200 text-center hover:shadow-xl transition-all">
          <div className="bg-green-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="text-white" size={40} />
          </div>
          <h3 className="text-2xl font-bold text-green-800 mb-2">Our Location</h3>
          <p className="text-green-700">University of Gujrat, Pakistan</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-yellow-200 p-8 md:p-12">
          <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">
            Send Us a Message
          </h2>
          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 resize-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold text-xl px-12 py-5 rounded-full shadow-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all mx-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
