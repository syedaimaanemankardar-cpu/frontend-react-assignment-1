import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { ChefHat, Sparkles, Calendar, ShoppingCart, BookOpen, Leaf, Clock, Users, Heart, Menu, X, Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

// Main Services Component
export default function Services() {
  const services = [
    {
      id: 1,
      icon: Sparkles,
      title: 'Smart Recipe Suggestions',
      description: 'Get personalized recipe recommendations based on your available ingredients, dietary preferences, and cooking skill level.',
      features: [
        'AI-powered recipe matching',
        'Dietary preference filters',
        'Difficulty level options',
        'Cuisine type selection'
      ],
      color: 'bg-yellow-400'
    },
    {
      id: 2,
      icon: Calendar,
      title: 'Meal Planner Tool',
      description: 'Plan your meals for the week ahead with our intuitive meal planning tool. Save time and reduce food waste.',
      features: [
        'Weekly meal calendar',
        'Drag and drop interface',
        'Automatic grocery list generation',
        'Nutrition tracking'
      ],
      color: 'bg-green-600'
    },
    {
      id: 3,
      icon: ShoppingCart,
      title: 'Smart Shopping List',
      description: 'Automatically generate shopping lists from your meal plans and recipes. Never forget an ingredient again!',
      features: [
        'Auto-generated from recipes',
        'Organized by category',
        'Check-off functionality',
        'Share with family members'
      ],
      color: 'bg-green-700'
    },
    {
      id: 4,
      icon: BookOpen,
      title: 'Cooking Tutorials',
      description: 'Access comprehensive text-based cooking tutorials covering techniques, tips, and step-by-step guides.',
      features: [
        'Basic cooking techniques',
        'Advanced culinary skills',
        'Ingredient preparation guides',
        'Kitchen safety tips'
      ],
      color: 'bg-yellow-500'
    },
    {
      id: 5,
      icon: Leaf,
      title: 'Seasonal Ingredients',
      description: 'Discover what ingredients are fresh and in season this month. Cook with the best quality produce!',
      features: [
        'Monthly ingredient lists',
        'Seasonal recipe suggestions',
        'Nutritional information',
        'Best buying tips'
      ],
      color: 'bg-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50">

      {/* Hero Section */}
      <section className=" bg-gradient-to-r from-green-700 to-green-800 py-20"> 
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
            Everything you need to make cooking easier, smarter, and more enjoyable
          </p>
          <div className="flex items-center justify-center gap-3">
            <CheckCircle className="text-yellow-400" size={24} />
            <span className="text-white font-semibold text-lg">100% Free • No Credit Card Required</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Comprehensive tools and resources to transform your cooking experience
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`bg-white rounded-3xl shadow-xl border-2 border-yellow-200 overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                index % 2 === 0 ? '' : ''
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Content Side */}
                <div className={`p-8 md:p-12 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                  <div className={`${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="text-white" size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-green-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-green-700 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                        <span className="text-green-800">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all inline-flex items-center gap-2">
                    Get Started
                    <ArrowRight size={20} />
                  </button>
                </div>

                {/* Visual Side */}
                <div className={`bg-gradient-to-br from-yellow-200 to-green-200 p-12 flex items-center justify-center ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                  <div className="text-center">
                    <service.icon className="text-green-800 mx-auto mb-4" size={120} />
                    <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 inline-block">
                      <p className="text-green-800 font-bold text-xl">
                        {service.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Why Choose Cookify Services?
            </h2>
            <p className="text-xl text-green-700">
              We make cooking accessible, enjoyable, and stress-free
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-green-50 rounded-3xl p-8 border-2 border-yellow-200 text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-green-900" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-3">Save Time</h3>
              <p className="text-green-700">
                Streamline your meal planning and grocery shopping with our smart tools
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-green-50 rounded-3xl p-8 border-2 border-yellow-200 text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-3">Reduce Waste</h3>
              <p className="text-green-700">
                Use what you have and minimize food waste with intelligent recipe suggestions
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-green-50 rounded-3xl p-8 border-2 border-yellow-200 text-center">
              <div className="bg-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-3">Cook Better</h3>
              <p className="text-green-700">
                Learn new techniques and improve your skills with our comprehensive tutorials
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}