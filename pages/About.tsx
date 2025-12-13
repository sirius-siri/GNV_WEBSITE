import React from 'react';
import GlassCard from '../components/GlassCard';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto w-full">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#D32F2F] mb-4">About Guru Nivas</h2>
          <div className="h-1 w-24 bg-[#FFD700] mx-auto rounded-full" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <ScrollReveal animation="slide-in" delay={0.2}>
          <GlassCard className="p-8 md:p-12 h-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Guru Nivas Institute LLP, our mission is to provide high-quality, accessible, and personalized education that empowers students to reach their full potential. We believe in fostering a learning environment that encourages curiosity, critical thinking, and academic discipline.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the premier coaching institute in Chennai, known not just for academic results, but for shaping holistic individuals ready to take on the challenges of the future with confidence and integrity.
            </p>
          </GlassCard>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up" delay={0.4}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 h-full min-h-[400px]">
               <img 
              src="/InstituteImage/institute image.jpeg"
              alt="Classroom session" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#FF6B6B]/20 mix-blend-overlay" />
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.2}>
        <GlassCard className="p-10 text-center bg-gradient-to-r from-[#FF6B6B]/10 to-transparent border-[#FF6B6B]/20">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-4">
               <div className="text-4xl font-bold text-[#D32F2F] mb-2">500+</div>
               <div className="text-gray-600">Students Mentored</div>
             </div>
             <div className="p-4 border-l-0 md:border-l border-gray-200">
               <div className="text-4xl font-bold text-[#D32F2F] mb-2">98%</div>
               <div className="text-gray-600">Pass Percentage</div>
             </div>
             <div className="p-4 border-l-0 md:border-l border-gray-200">
               <div className="text-4xl font-bold text-[#D32F2F] mb-2">50+</div>
               <div className="text-gray-600">District Toppers</div>
             </div>
          </div>
        </GlassCard>
      </ScrollReveal>
    </div>
  );
};

export default About;