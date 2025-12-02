import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { ChefHat, Heart, Lightbulb, Target, Users, Sparkles, Menu, X, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function AboutUs() {
  const teamMembers = [
    {
      name: 'Syeda Imaan Fatima',
      rollNumber: '23021519-175',
      gradient: 'from-yellow-400 to-yellow-500'
    },
    {
      name: 'Eman Kardar',
      rollNumber: '23021519-091',
      gradient: 'from-green-600 to-green-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-800 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Cookify
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            Born from a passion for cooking and a desire to make it accessible to everyone
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-yellow-200 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="text-yellow-600" size={40} />
            <h2 className="text-4xl font-bold text-green-800">Our Story</h2>
          </div>

          <div className="prose prose-lg max-w-none text-green-800 space-y-6 leading-relaxed">
            <p className="text-xl">
              Cookify was born out of a simple yet profound realization that many of us face in our daily lives. As university students juggling classes, assignments, and the constant challenge of preparing meals, we often found ourselves staring into our refrigerators, wondering what to cook with the random assortment of ingredients we had on hand. Too often, perfectly good food would go to waste simply because we didn't know how to combine them into something delicious.
            </p>

            <p className="text-xl">
              Late one evening, while both of us were struggling with the same dilemma in our respective kitchens, we had a conversation that would spark the idea for Cookify. We realized that this wasn't just our problem – it was a universal challenge faced by students, working professionals, busy parents, and anyone who wanted to cook at home but felt overwhelmed by the planning and decision-making process. We asked ourselves: "What if there was a way to instantly turn whatever ingredients you have into a delicious meal?"
            </p>

            <p className="text-xl">
              That question became our mission. We envisioned a platform that would not only suggest recipes based on available ingredients but would also help people plan their meals, create smart shopping lists, learn new cooking techniques, and discover seasonal ingredients at their peak freshness. We wanted to create something that would make cooking less intimidating and more enjoyable, reduce food waste, and help people save both time and money.
            </p>

            <p className="text-xl">
              With backgrounds in technology and a shared love for home-cooked meals, we combined our skills and passion to bring Cookify to life. What started as a university project quickly evolved into something much bigger – a solution we genuinely believed could make a difference in people's daily lives. Every feature we designed, from the recipe generator to the meal planner, was built with real users in mind, addressing the actual challenges we and our peers faced every day.
            </p>

            <p className="text-xl">
              Today, Cookify represents more than just a recipe website. It's our contribution to making home cooking accessible, sustainable, and enjoyable for everyone. We believe that good food shouldn't be complicated, and that everyone deserves the tools and confidence to create delicious meals at home. Through Cookify, we hope to inspire a new generation of home cooks who waste less, cook more, and discover the joy of creating something wonderful from simple ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="text-green-600" size={40} />
              <h2 className="text-4xl font-bold text-green-800">Meet the Creators</h2>
            </div>
            <p className="text-xl text-green-700 max-w-2xl mx-auto">
              The passionate minds behind Cookify
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-green-50 rounded-3xl p-8 border-2 border-yellow-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`bg-gradient-to-br ${member.gradient} w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <ChefHat className="text-white" size={60} />
                </div>
                <h3 className="text-3xl font-bold text-green-900 text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-green-700 text-lg text-center font-semibold mb-4">
                  Roll Number: {member.rollNumber}
                </p>
                <div className="bg-white rounded-2xl p-4 border border-yellow-300">
                  <p className="text-green-800 text-center">
                    Co-Founder & Developer
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-br from-green-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-green-700">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border-2 border-yellow-200 text-center hover:shadow-xl transition-all">
              <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Accessibility</h3>
              <p className="text-green-700 leading-relaxed">
                Making cooking simple and approachable for everyone, regardless of skill level or experience.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border-2 border-yellow-200 text-center hover:shadow-xl transition-all">
              <div className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Innovation</h3>
              <p className="text-green-700 leading-relaxed">
                Continuously improving and creating smart solutions to make cooking easier and more enjoyable.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border-2 border-yellow-200 text-center hover:shadow-xl transition-all">
              <div className="bg-green-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChefHat className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Sustainability</h3>
              <p className="text-green-700 leading-relaxed">
                Promoting responsible cooking practices that reduce waste and support a healthier planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Join Us on This Journey
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Be part of the Cookify community and discover the joy of effortless home cooking
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold text-xl px-12 py-5 rounded-full shadow-2xl hover:shadow-xl transform hover:-translate-y-2 transition-all">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}