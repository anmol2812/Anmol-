import React from 'react';
import { Code, Briefcase, Palette, BarChart, Brain, Monitor } from 'lucide-react';

const categories = [
  { icon: Code, name: 'Programming', count: 150 },
  { icon: Briefcase, name: 'Business', count: 120 },
  { icon: Palette, name: 'Design', count: 85 },
  { icon: BarChart, name: 'Marketing', count: 95 },
  { icon: Brain, name: 'Personal Development', count: 110 },
  { icon: Monitor, name: 'IT & Software', count: 130 }
];

export default function Categories() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Browse Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.name} className="flex items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                  <p className="text-gray-600">{category.count} courses</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}