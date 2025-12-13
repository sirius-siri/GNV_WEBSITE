import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1920" 
            alt="Students graduating" 
            className="w-full h-full object-cover"
          /> */}
          {/* Light Overlay: White/Pink Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFF0F0] via-[#FFF0F0]/60 to-[#FF6B6B]/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <ScrollReveal animation="fade-up" delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight drop-shadow-sm">
              <span className="text-gray-900">Ignite Your Future.</span> <br />
              <span className="text-[#D32F2F] drop-shadow-md">Master Your Potential.</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-800 mb-10 max-w-3xl mx-auto font-medium">
              Guru Nivas Institute LLP: Excellence in Education across two premium locations.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={0.6}>
            <Link 
              to="/courses"
              className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#D32F2F] text-white border-2 border-[#FFD700] shadow-[0_4px_20px_rgba(255,107,107,0.4)] hover:shadow-[0_4px_25px_rgba(255,107,107,0.6)] hover:scale-105 transition-all duration-300"
            >
              Explore Our Courses
              <ArrowRight className="ml-2" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-20">
          <ScrollReveal delay={0.2}>
            <GlassCard className="p-8 text-center h-full" hoverEffect>
              <div className="w-16 h-16 rounded-full bg-[#FF6B6B]/10 flex items-center justify-center mx-auto mb-6 text-[#D32F2F]">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Curriculum</h3>
              <p className="text-gray-600">Tailored learning paths designed to maximize student performance in board exams and competitive tests.</p>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <GlassCard className="p-8 text-center h-full" hoverEffect>
              <div className="w-16 h-16 rounded-full bg-[#FF6B6B]/10 flex items-center justify-center mx-auto mb-6 text-[#D32F2F]">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Dedicated Faculty</h3>
              <p className="text-gray-600">Learn from experienced educators who are passionate about mentoring the next generation of leaders.</p>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <GlassCard className="p-8 text-center h-full" hoverEffect>
              <div className="w-16 h-16 rounded-full bg-[#FF6B6B]/10 flex items-center justify-center mx-auto mb-6 text-[#D32F2F]">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Proven Results</h3>
              <p className="text-gray-600">A consistent track record of academic excellence and success stories from our alumni network.</p>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;