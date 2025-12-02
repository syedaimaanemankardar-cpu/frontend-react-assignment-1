// 


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChefHat, Menu, X, LogOut, User } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (err) {
        setUser(null);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="bg-green-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <ChefHat className="text-yellow-400" size={40} />
            <span className="text-3xl font-bold text-white">Cookify</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <Link to="/" className="text-white font-semibold text-lg hover:text-yellow-400 transition-colors duration-200">
              Home
            </Link>
            <Link to="/dashboard" className="text-white font-semibold text-lg hover:text-yellow-400 transition-colors duration-200">
              Dashboard
            </Link>
            <Link to="/services" className="text-white font-semibold text-lg hover:text-yellow-400 transition-colors duration-200">
              Services
            </Link>
            <Link to="/about" className="text-white font-semibold text-lg hover:text-yellow-400 transition-colors duration-200">
              About Us
            </Link>
            <Link to="/contact" className="text-white font-semibold text-lg hover:text-yellow-400 transition-colors duration-200">
              Contact Us
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <>
                <div className="flex items-center gap-2 text-white">
                  <User size={20} className="text-yellow-400" />
                  <span className="font-semibold">{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold text-lg px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
                >
                  <LogOut size={20} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white font-semibold text-lg hover:text-yellow-400 transition-colors duration-200 px-4 py-2">
                  Login
                </Link>
                <Link to="/register" className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold text-lg px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white hover:text-yellow-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 border-t border-green-700 pt-4">
            <div className="flex flex-col gap-1">
              <Link to="/" className="text-white font-semibold text-lg hover:text-yellow-400 hover:bg-green-700 transition-all duration-200 py-3 px-4 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/dashboard" className="text-white font-semibold text-lg hover:text-yellow-400 hover:bg-green-700 transition-all duration-200 py-3 px-4 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                Dashboard
              </Link>
              <Link to="/services" className="text-white font-semibold text-lg hover:text-yellow-400 hover:bg-green-700 transition-all duration-200 py-3 px-4 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link to="/about" className="text-white font-semibold text-lg hover:text-yellow-400 hover:bg-green-700 transition-all duration-200 py-3 px-4 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/contact" className="text-white font-semibold text-lg hover:text-yellow-400 hover:bg-green-700 transition-all duration-200 py-3 px-4 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
              
              {/* Mobile Auth Buttons */}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-green-700">
                {user ? (
                  <>
                    <div className="flex items-center gap-2 text-white px-4 py-2">
                      <User size={20} className="text-yellow-400" />
                      <span className="font-semibold">{user.name}</span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold text-lg px-6 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <LogOut size={20} />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="text-white font-semibold text-lg hover:text-yellow-400 hover:bg-green-700 transition-all duration-200 py-3 px-4 rounded-lg text-left">
                      Login
                    </Link>
                    <Link to="/register" className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold text-lg px-6 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-center">
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}