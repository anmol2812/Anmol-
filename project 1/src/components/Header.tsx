import React from 'react';
import { Search, GraduationCap } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <GraduationCap className="w-8 h-8" />
          <span className="text-2xl font-bold">LearnForFree</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-indigo-200">Courses</a>
          <a href="#" className="hover:text-indigo-200">Categories</a>
          <a href="#" className="hover:text-indigo-200">Blog</a>
          <a href="#" className="hover:text-indigo-200">About</a>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover Free Online Courses from Top Companies
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Access quality education without spending a dime. Learn new skills, advance your career, and achieve your goals.
        </p>
        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="Search for courses..."
            className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 rounded-full hover:bg-indigo-700">
            <Search className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}