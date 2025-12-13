import React from 'react';
import GlassCard from '../components/GlassCard';
import ScrollReveal from '../components/ScrollReveal';
import { Send, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto w-full">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#D32F2F] mb-4">Get In Touch</h2>
          <p className="text-gray-600">Start your journey to excellence today. Reach out to us.</p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <ScrollReveal animation="slide-in" delay={0.2}>
          <GlassCard className="p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Enquiry Form</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Student Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/50 border border-gray-300 rounded-lg p-3 text-gray-800 focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-none transition-all placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Grade/Class</label>
                   <select className="w-full bg-white/50 border border-gray-300 rounded-lg p-3 text-gray-800 focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-none transition-all">
                     <option>Class 10</option>
                     <option>Class 11</option>
                     <option>Class 12</option>
                     <option>Repeater</option>
                   </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-white/50 border border-gray-300 rounded-lg p-3 text-gray-800 focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-none transition-all placeholder-gray-400"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white/50 border border-gray-300 rounded-lg p-3 text-gray-800 focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-none transition-all placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/50 border border-gray-300 rounded-lg p-3 text-gray-800 focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-none transition-all placeholder-gray-400"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#D32F2F] text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-[#D32F2F]/40 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Enquiry</span>
                <Send size={18} />
              </button>
            </form>
          </GlassCard>
        </ScrollReveal>

        {/* Quick Contact Info */}
        <div className="flex flex-col space-y-8 justify-center">
          <ScrollReveal delay={0.4}>
            <GlassCard className="p-8 flex items-center space-x-6" hoverEffect>
              <div className="w-16 h-16 rounded-full bg-[#FF6B6B]/20 flex items-center justify-center text-[#D32F2F]">
                <Phone size={32} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800">Call Us</h4>
                <p className="text-gray-600">Mon-Sat, 9am - 9pm</p>
                <p className="text-xl text-[#D32F2F] font-mono mt-1">098402 87687</p>
              </div>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <GlassCard className="p-8 flex items-center space-x-6" hoverEffect>
              <div className="w-16 h-16 rounded-full bg-[#FF6B6B]/20 flex items-center justify-center text-[#D32F2F]">
                <Mail size={32} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800">Email Us</h4>
                <p className="text-gray-600">For admissions & inquiries</p>
                <p className="text-lg text-[#D32F2F] mt-1">info@gurunivas.com</p>
              </div>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="p-8">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Visit Our Centers</h4>
              <p className="text-gray-600 mb-6">
                Walk in anytime during working hours for a free consultation and campus tour. Experience the environment where toppers are made.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;