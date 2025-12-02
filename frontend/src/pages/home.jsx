import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Search, ArrowRight, ChefHat, Star, Leaf, Sparkles, BookmarkPlus, Filter, Clock, Users } from "lucide-react";

function Home() {
  const [ingredients, setIngredients] = useState("");
  return (
    <div>
      <section id="home" className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-green-800 mb-6">
            Turn Your Ingredients Into<br />
            <span className="text-yellow-600">Delicious Meals</span>
          </h1>
          <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
            Don't know what to cook? Enter the ingredients you have, and let Cookify create amazing recipes for you in seconds!
          </p>
          
          {/* CTA Input */}
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-6 border-2 border-yellow-200">
            <div className="flex gap-4">
              <input
                type="text"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Enter ingredients like chicken, rice, tomatoes..."
                className="flex-1 px-6 py-4 text-lg border-2 border-green-300 rounded-2xl focus:outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center gap-2">
                <Search size={24} />
                Generate
              </button>
            </div>
          </div>

          <button className="mt-8 bg-green-700 hover:bg-green-800 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all inline-flex items-center gap-2">
            Get Started Free
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-4">
            How It Works
          </h2>
          <p className="text-xl text-green-700 text-center mb-12">
            Three simple steps to delicious homemade meals
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-4xl font-bold text-green-900">1</span>
              </div>
              <div className="bg-cream-50 rounded-3xl p-6 border-2 border-yellow-200 h-full">
                <Leaf className="text-green-600 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-green-800 mb-3">Enter Ingredients</h3>
                <p className="text-green-700">
                  Simply type in the ingredients you have in your kitchen. No need to be precise!
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-4xl font-bold text-green-900">2</span>
              </div>
              <div className="bg-cream-50 rounded-3xl p-6 border-2 border-yellow-200 h-full">
                <Sparkles className="text-green-600 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-green-800 mb-3">Generate Recipe</h3>
                <p className="text-green-700">
                  Our smart system creates perfect recipes tailored to what you have available.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-4xl font-bold text-green-900">3</span>
              </div>
              <div className="bg-cream-50 rounded-3xl p-6 border-2 border-yellow-200 h-full">
                <ChefHat className="text-green-600 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-green-800 mb-3">Start Cooking</h3>
                <p className="text-green-700">
                  Follow easy step-by-step instructions and enjoy your homemade masterpiece!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-4">
          Why Choose Cookify?
        </h2>
        <p className="text-xl text-green-700 text-center mb-12">
          Everything you need to create amazing meals
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-yellow-200 hover:shadow-xl transform hover:-translate-y-2 transition-all">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="text-green-700" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-3">Smart Recipe Generation</h3>
            <p className="text-green-700">
              AI-powered recipes based on your available ingredients. No more food waste!
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-yellow-200 hover:shadow-xl transform hover:-translate-y-2 transition-all">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <BookmarkPlus className="text-green-700" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-3">Save Favorites</h3>
            <p className="text-green-700">
              Bookmark your favorite recipes and access them anytime. Build your personal cookbook!
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-yellow-200 hover:shadow-xl transform hover:-translate-y-2 transition-all">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Filter className="text-green-700" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-3">Dietary Filters</h3>
            <p className="text-green-700">
              Filter recipes by dietary preferences: vegetarian, vegan, gluten-free, and more.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-yellow-200 hover:shadow-xl transform hover:-translate-y-2 transition-all">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Clock className="text-green-700" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-3">Time Estimates</h3>
            <p className="text-green-700">
              See preparation and cooking times upfront. Perfect for busy schedules!
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-yellow-200 hover:shadow-xl transform hover:-translate-y-2 transition-all">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Users className="text-green-700" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-3">Serving Size Adjust</h3>
            <p className="text-green-700">
              Easily scale recipes up or down based on how many people you're cooking for.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-yellow-200 hover:shadow-xl transform hover:-translate-y-2 transition-all">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Leaf className="text-green-700" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-3">Fresh & Healthy</h3>
            <p className="text-green-700">
              Get nutritious meal ideas with wholesome ingredients for a healthier lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Sample Recipe Preview */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-4">
            See What You Can Create
          </h2>
          <p className="text-xl text-green-700 text-center mb-12">
            Here's an example of what Cookify can generate for you
          </p>

          <div className="bg-gradient-to-br from-amber-50 to-green-50 rounded-3xl shadow-2xl overflow-hidden border-2 border-yellow-200">
            {/* Recipe Image */}
            <div className="h-72 bg-gradient-to-br from-yellow-300 to-green-300 flex items-center justify-center">
              <div className="text-center">
                <ChefHat className="text-green-800 mx-auto mb-3" size={80} />
                <p className="text-green-800 font-bold text-xl">Delicious Recipe Preview</p>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-green-800 mb-4">
                Mediterranean Herb Chicken
              </h3>

              <div className="flex gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="text-yellow-600" size={20} />
                  <span className="text-green-700 font-medium">30 mins</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-yellow-600" size={20} />
                  <span className="text-green-700 font-medium">4 servings</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-600 fill-yellow-600" size={20} />
                  <span className="text-green-700 font-medium">Easy</span>
                </div>
              </div>

              <p className="text-green-700 text-lg mb-6">
                A light and flavorful dish featuring tender chicken seasoned with aromatic Mediterranean herbs, perfect for a quick weeknight dinner or special occasion.
              </p>

              <button className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                View Full Recipe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-4">
          What Our Users Say
        </h2>
        <p className="text-xl text-green-700 text-center mb-12">
          Join thousands of happy home cooks
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-yellow-200">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-500 fill-yellow-500" size={20} />
              ))}
            </div>
            <p className="text-green-700 mb-4">
              "Cookify has completely changed how I approach cooking! No more wasted ingredients or boring meals."
            </p>
            <p className="font-bold text-green-800">- Sarah M.</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-yellow-200">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-500 fill-yellow-500" size={20} />
              ))}
            </div>
            <p className="text-green-700 mb-4">
              "As a busy student, this is perfect! I just enter what's in my fridge and boom - dinner is served."
            </p>
            <p className="font-bold text-green-800">- James T.</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-yellow-200">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-500 fill-yellow-500" size={20} />
              ))}
            </div>
            <p className="text-green-700 mb-4">
              "The recipes are amazing and so easy to follow. My family loves every meal I make with Cookify!"
            </p>
            <p className="font-bold text-green-800">- Maria L.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;