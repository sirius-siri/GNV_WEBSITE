import React from 'react';
import GlassCard from '../components/GlassCard';
import ScrollReveal from '../components/ScrollReveal';
import { Course } from '../types';
import { CheckCircle } from 'lucide-react';

const Courses: React.FC = () => {
  const courses: Course[] = [
    { id: 1, title: "Class 10 - State Board & CBSE", description: "Comprehensive coaching for Maths, Science, and Social Studies focused on board exam excellence.", gradeLevel: "Secondary" },
    { id: 2, title: "Class 11 & 12 - Physics", description: "In-depth conceptual clarity for higher secondary physics, covering kinematics, thermodynamics, and electromagnetism.", gradeLevel: "Higher Secondary" },
    { id: 3, title: "Class 11 & 12 - Chemistry", description: "Mastering organic, inorganic, and physical chemistry for board exams and competitive entrance tests.", gradeLevel: "Higher Secondary" },
    { id: 4, title: "Class 11 & 12 - Mathematics", description: "Rigorous practice sessions and problem-solving strategies for calculus, algebra, and geometry.", gradeLevel: "Higher Secondary" },
    { id: 5, title: "Class 11 & 12 - Biology", description: "Detailed study of botany and zoology with focus on NEET preparation fundamentals.", gradeLevel: "Higher Secondary" },
    { id: 6, title: "NEET / JEE Foundation", description: "Early start programs for students aspiring to crack medical and engineering entrance exams.", gradeLevel: "Integrated" },
  ];

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto w-full">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#D32F2F] mb-4">Academic Courses</h2>
          <p className="text-gray-600">Structured learning paths tailored for success.</p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <ScrollReveal key={course.id} delay={index * 0.1}>
            <GlassCard className="p-6 flex flex-col h-full" hoverEffect>
              <div className="mb-4">
                <span className="text-xs font-bold px-2 py-1 rounded bg-[#FF6B6B]/20 text-[#D32F2F] border border-[#FF6B6B]/30">
                  {course.gradeLevel}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">{course.description}</p>
              <button className="w-full py-2 rounded border border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white transition-all duration-300 font-medium text-sm">
                View Syllabus
              </button>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>

      {/* Additional Features List */}
      <ScrollReveal delay={0.4}>
        <GlassCard className="mt-16 p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Why Choose Our Courses?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {[
               "Small batch sizes for personalized attention",
               "Regular mock tests and performance analysis",
               "Doubt clearing sessions with senior faculty",
               "Comprehensive study materials provided",
               "Parent-Teacher meetings to track progress",
               "Air-conditioned, distraction-free classrooms"
             ].map((feature, idx) => (
               <div key={idx} className="flex items-center space-x-3 text-gray-600">
                 <CheckCircle className="text-[#FF6B6B] shrink-0" size={20} />
                 <span>{feature}</span>
               </div>
             ))}
          </div>
        </GlassCard>
      </ScrollReveal>
    </div>
  );
};

export default Courses;