import React from 'react';
import GlassCard from '../components/GlassCard';
import ScrollReveal from '../components/ScrollReveal';
import { Quote, Award, Lightbulb } from 'lucide-react';

const Founder: React.FC = () => {
  // Using a placeholder that generates an avatar based on the name since no specific image was provided
  const founderImg = "/InstituteImage/founderGuruSharan.jpeg"; 

  return (
    <div className="min-h-screen py-20 px-4 flex items-center justify-center w-full">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Title Section */}
        <ScrollReveal>
          <div className="text-center mb-16 relative">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#D32F2F] mb-4 tracking-tight">
              Our Visionary
            </h1>
            <div className="h-1 w-32 bg-[#FFD700] mx-auto rounded-full shadow-md" />
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D32F2F]/10 to-transparent -z-10" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <GlassCard className="p-0 overflow-hidden relative border-t-4 border-t-[#FFD700]">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D32F2F]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="flex flex-col lg:flex-row">
              
              {/* Image Section - Grand & Prominent */}
              <div className="lg:w-2/5 relative min-h-[500px] lg:min-h-[700px]">
                <div className="absolute inset-0 bg-gray-200">
                  <img 
                    src={founderImg} 
                    alt="Guru Sharan - Founder" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#D32F2F]/40 via-transparent to-transparent opacity-60" />
                
                {/* Badge */}
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-none border-l-4 border-[#D32F2F] shadow-xl">
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="text-[#D32F2F]" size={24} />
                    <span className="text-gray-800 font-bold tracking-wider uppercase text-sm">The Mastermind</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 p-8 md:p-16 lg:p-20 flex flex-col justify-center relative bg-white/40">
                <div className="mb-2">
                  <h3 className="text-[#D32F2F] font-bold text-sm tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
                    <span className="h-[2px] w-8 bg-[#FFD700]" />
                    Founder & Chief Mentor
                  </h3>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6 leading-tight">
                    Guru Sharan
                  </h2>
                </div>

                <div className="relative mb-10">
                  <Quote className="absolute -top-6 -left-4 text-[#FFD700]/30 transform -scale-x-100" size={64} />
                  <p className="text-xl md:text-2xl text-gray-700 font-light italic leading-relaxed relative z-10 pl-6 border-l-2 border-[#FFD700]/50">
                    "True leadership isn't just about teaching a subject; it's about crafting the path for others to walk on. My mission is to empower our educators to be the best guides for the leaders of tomorrow."
                  </p>
                </div>

                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p>
                    <span className="font-bold text-[#D32F2F] text-xl ">G</span>
                    uru Sharan is the intellectual architect and the driving force behind Guru Nivas Institute LLP. Unlike traditional academic founders, he operates as the strategic mastermind who conceptualized the institute's core philosophy.
                  </p>
                  <p>
                    He is the mentor of mentors. His role transcends the classroom; he dedicates himself to shaping the institute's faculties, ensuring that every educator at Guru Nivas embodies the values of excellence and empathy. He meticulously designs the mentoring frameworks that pave the right path for both staff and students.
                  </p>
                  <p>
                    With a visionary approach to holistic education, Guru Sharan focuses on the bigger picture—creating an ecosystem where talent is nurtured, potential is realized, and the future is built on a foundation of integrity and strategic guidance.
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200/50 flex items-center justify-between">
                   <div className="flex flex-col">
                     <span className="text-gray-500 text-sm uppercase tracking-wider mb-1">Role</span>
                     <span className="text-lg font-serif text-[#D32F2F]">Strategic Mentor</span>
                   </div>
                   <div className="flex flex-col">
                     <span className="text-gray-500 text-sm uppercase tracking-wider mb-1">Impact</span>
                     <span className="text-lg font-serif text-[#D32F2F]">Institution Builder</span>
                   </div>
                   <div className="hidden md:flex flex-col">
                     <span className="text-gray-500 text-sm uppercase tracking-wider mb-1">Focus</span>
                     <span className="text-lg font-serif text-gray-800">Faculty Interaction</span>
                   </div>
                </div>

              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Founder;