
import React from 'react';
import { ChefHat, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ChefHat className="text-yellow-400" size={36} />
              <span className="text-2xl font-bold">Cookify</span>
            </div>
            <p className="text-green-300 leading-relaxed mb-5">
              Turn your ingredients into delicious meals with smart recipe generation. Cook smarter, not harder.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-green-800 p-3 rounded-full hover:bg-yellow-400 hover:text-green-900 transition-all duration-200 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-green-800 p-3 rounded-full hover:bg-yellow-400 hover:text-green-900 transition-all duration-200 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-green-800 p-3 rounded-full hover:bg-yellow-400 hover:text-green-900 transition-all duration-200 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-green-300 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#dashboard" className="text-green-300 hover:text-yellow-400 transition-colors">Dashboard</a></li>
              <li><a href="#services" className="text-green-300 hover:text-yellow-400 transition-colors">Services</a></li>
              <li><a href="#about" className="text-green-300 hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-green-300 hover:text-yellow-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Support</h3>
            <ul className="space-y-3">
              <li><a href="#help" className="text-green-300 hover:text-yellow-400 transition-colors">Help Center</a></li>
              <li><a href="#faq" className="text-green-300 hover:text-yellow-400 transition-colors">FAQ</a></li>
              <li><a href="#privacy" className="text-green-300 hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-green-300 hover:text-yellow-400 transition-colors">Terms of Service</a></li>
              <li><a href="#cookies" className="text-green-300 hover:text-yellow-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-green-300">
                <Mail className="text-yellow-400 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-white mb-1">Email</p>
                  <a href="mailto:info@cookify.com" className="hover:text-yellow-400">info@cookify.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-green-300">
                <Phone className="text-yellow-400 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-white mb-1">Phone</p>
                  <a href="tel:+1234567890" className="hover:text-yellow-400">+1 (234) 567-890</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-green-300">
                <MapPin className="text-yellow-400 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-white mb-1">Address</p>
                  <p>123 Recipe Street,<br />Culinary City, CC 12345</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-green-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Cookify. All rights reserved. Made with 🌿 for delicious home cooking.
            </p>
            <div className="flex gap-6 text-green-400 text-sm">
              <a href="#privacy" className="hover:text-yellow-400">Privacy</a>
              <a href="#terms" className="hover:text-yellow-400">Terms</a>
              <a href="#sitemap" className="hover:text-yellow-400">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
