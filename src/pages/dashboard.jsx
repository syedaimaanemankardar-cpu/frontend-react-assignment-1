import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { ChefHat, Search, BookmarkPlus, Clock, Users, Heart, TrendingUp, Calendar, Leaf, Sparkles, History, Settings, LogOut, Menu, X, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Dashboard() {
  const [ingredients, setIngredients] = useState('');

  // Sample data
  const stats = [
    { label: 'Total Recipes', value: '24', icon: ChefHat, color: 'bg-yellow-400' },
    { label: 'Saved Favorites', value: '12', icon: Heart, color: 'bg-green-600' },
    { label: 'This Week', value: '5', icon: TrendingUp, color: 'bg-green-700' },
  ];

  const recentRecipes = [
    { id: 1, name: 'Herb Chicken Rice', time: '30 mins', servings: 4, saved: true },
    { id: 2, name: 'Veggie Pasta Bowl', time: '25 mins', servings: 2, saved: false },
    { id: 3, name: 'Garlic Shrimp Stir-fry', time: '20 mins', servings: 3, saved: true },
  ];

  const savedRecipes = [
    { id: 1, name: 'Mediterranean Salad', time: '15 mins', servings: 2 },
    { id: 2, name: 'Tomato Basil Soup', time: '35 mins', servings: 4 },
    { id: 3, name: 'Honey Glazed Salmon', time: '40 mins', servings: 2 },
  ];

  const suggestedRecipes = [
    { id: 1, name: 'Quick Breakfast Bowl', time: '10 mins', difficulty: 'Easy' },
    { id: 2, name: 'Classic Burger', time: '20 mins', difficulty: 'Medium' },
    { id: 3, name: 'Chocolate Cake', time: '45 mins', difficulty: 'Hard' },
    { id: 4, name: 'Caesar Salad', time: '15 mins', difficulty: 'Easy' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            Welcome back, Chef! 👨‍🍳
          </h1>
          <p className="text-xl text-green-700">
            Ready to create something delicious today?
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-lg border-2 border-yellow-200 hover:shadow-xl transform hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-700 font-medium mb-1">{stat.label}</p>
                  <p className="text-4xl font-bold text-green-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-4 rounded-2xl`}>
                  <stat.icon className="text-white" size={32} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Recipe Generator */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-yellow-200 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-yellow-600" size={28} />
            <h2 className="text-2xl font-bold text-green-800">Quick Recipe Generator</h2>
          </div>
          <p className="text-green-700 mb-6">Enter ingredients you have and let's create magic!</p>
          
          <div className="flex gap-4">
            <input
              type="text"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="e.g., chicken, tomatoes, garlic..."
              className="flex-1 px-6 py-4 text-lg border-2 border-green-300 rounded-2xl focus:outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center gap-2">
              <Search size={24} />
              Generate
            </button>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex gap-3 mt-4">
            <button className="px-6 py-2 bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition-all font-medium">
              Breakfast
            </button>
            <button className="px-6 py-2 bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition-all font-medium">
              Lunch
            </button>
            <button className="px-6 py-2 bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition-all font-medium">
              Dinner
            </button>
            <button className="px-6 py-2 bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition-all font-medium">
              Snacks
            </button>
          </div>
        </div>

        {/* Recent Recipes & Saved Favorites */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Recipes */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-yellow-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <History className="text-green-600" size={28} />
                <h2 className="text-2xl font-bold text-green-800">Recent Recipes</h2>
              </div>
              <button className="text-green-600 hover:text-yellow-600 font-semibold transition-colors">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {recentRecipes.map((recipe) => (
                <div key={recipe.id} className="bg-gradient-to-br from-amber-50 to-green-50 rounded-2xl p-4 border-2 border-yellow-100 hover:border-yellow-300 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-green-900 text-lg mb-2">{recipe.name}</h3>
                      <div className="flex gap-4 text-green-700 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{recipe.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={16} />
                          <span>{recipe.servings} servings</span>
                        </div>
                      </div>
                    </div>
                    <button className={`p-3 rounded-full transition-all ${recipe.saved ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'} hover:scale-110`}>
                      <Heart size={20} className={recipe.saved ? 'fill-red-600' : ''} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Saved Favorites */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-yellow-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Heart className="text-red-600 fill-red-600" size={28} />
                <h2 className="text-2xl font-bold text-green-800">Saved Favorites</h2>
              </div>
              <button className="text-green-600 hover:text-yellow-600 font-semibold transition-colors">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {savedRecipes.map((recipe) => (
                <div key={recipe.id} className="bg-gradient-to-br from-amber-50 to-green-50 rounded-2xl p-4 border-2 border-yellow-100 hover:border-yellow-300 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-green-900 text-lg mb-2">{recipe.name}</h3>
                      <div className="flex gap-4 text-green-700 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{recipe.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={16} />
                          <span>{recipe.servings} servings</span>
                        </div>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold rounded-full transition-all">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Suggested Recipes */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-yellow-200 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Leaf className="text-green-600" size={28} />
            <h2 className="text-2xl font-bold text-green-800">Try These Popular Recipes</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {suggestedRecipes.map((recipe) => (
              <div key={recipe.id} className="bg-gradient-to-br from-yellow-50 to-green-50 rounded-2xl p-6 border-2 border-yellow-200 hover:border-yellow-400 hover:shadow-lg transition-all transform hover:-translate-y-1">
                {/* Recipe Image Placeholder */}
                <div className="bg-gradient-to-br from-yellow-200 to-green-200 rounded-xl h-32 flex items-center justify-center mb-4">
                  <ChefHat className="text-green-700" size={40} />
                </div>
                
                <h3 className="font-bold text-green-900 text-lg mb-2">{recipe.name}</h3>
                <div className="flex items-center justify-between text-sm text-green-700 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{recipe.time}</span>
                  </div>
                  <span className="px-3 py-1 bg-yellow-200 text-green-900 rounded-full text-xs font-semibold">
                    {recipe.difficulty}
                  </span>
                </div>
                
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold py-2 rounded-xl transition-all">
                  Try Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cooking Tip of the Day */}
        <div className="bg-gradient-to-r from-green-700 to-green-800 rounded-3xl p-8 shadow-lg text-white mb-8">
          <div className="flex items-start gap-4">
            <div className="bg-yellow-400 p-3 rounded-full">
              <Sparkles className="text-green-900" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">💡 Cooking Tip of the Day</h3>
              <p className="text-green-100 text-lg">
                "Always let your meat rest for 5-10 minutes after cooking. This allows the juices to redistribute, making it more tender and flavorful!"
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}