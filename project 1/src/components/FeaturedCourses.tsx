import React from 'react';
import { Clock, Users, Award } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    platform: "Coursera",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
    duration: "8 weeks",
    students: "50K+",
    rating: 4.8
  },
  {
    id: 2,
    title: "Digital Marketing Fundamentals",
    platform: "edX",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
    duration: "6 weeks",
    students: "35K+",
    rating: 4.7
  },
  {
    id: 3,
    title: "Data Science Essentials",
    platform: "Udacity",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800",
    duration: "10 weeks",
    students: "45K+",
    rating: 4.9
  }
];

export default function FeaturedCourses() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-sm text-indigo-600 mb-2">{course.platform}</div>
                <h3 className="text-xl font-semibold mb-4">{course.title}</h3>
                <div className="flex items-center justify-between text-gray-600 text-sm">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students}
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    {course.rating}
                  </div>
                </div>
                <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
                  Enroll Now - It's Free
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}