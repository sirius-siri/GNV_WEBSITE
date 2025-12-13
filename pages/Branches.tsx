import React from 'react';
import GlassCard from '../components/GlassCard';
import ScrollReveal from '../components/ScrollReveal';
import { Branch } from '../types';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const Branches: React.FC = () => {
  const branches: Branch[] = [
    {
      id: "kknagar",
      name: "GNV KK Nagar",
      address: "667/1, 47th St, Sector 9, K. K. Nagar, Chennai, Tamil Nadu 600078",
      phone: "098402 87687",
      hoursRegular: "Mon-Fri: 10am – 9:30pm",
      hoursWeekend: "Sat: 10am – 9:30pm, Sun: 9:30am – 9pm",
      mapLink: "https://maps.app.goo.gl/5cNi5H1ob4nmrqyi9",
      embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.164808381283!2d80.1983!3d13.0411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266d11f879619%3A0x6b8a8b1234567890!2sK.%20K.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
    },
    {
      id: "valasaravakkam",
      name: "GNV Valasaravakkam",
      address: "193, 6th St, West Kamakoti Nagar, Valasaravakkam, Chennai, Tamil Nadu 600087",
      phone: "098402 87687",
      hoursRegular: "Mon-Fri: 10am – 9:30pm",
      hoursWeekend: "Sat: 10am – 9:30pm, Sun: 9am – 9:30pm",
      mapLink: "https://maps.app.goo.gl/5cNi5H1ob4nmrqyi9",
      embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d80.17!3d13.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260d11f879619%3A0x6b8a8b1234567890!2sValasaravakkam%2C%20Chennai!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
    }
  ];

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto w-full">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#D32F2F] mb-4">Our Locations</h2>
          <p className="text-gray-600">Visit us at one of our two premium campuses.</p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {branches.map((branch, index) => (
          <ScrollReveal key={branch.id} delay={index * 0.2}>
            <GlassCard className="flex flex-col h-full">
              {/* Map Container */}
              <div className="relative h-64 w-full border-b border-gray-200 bg-gray-100">
                <iframe 
                  src={branch.embedSrc} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, pointerEvents: 'none' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  title={`${branch.name} Map`}
                  className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute top-4 right-4">
                  <a 
                    href={branch.mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-[#D32F2F] text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-[#FF6B6B] transition-colors shadow-lg"
                  >
                    <ExternalLink size={16} />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#FF6B6B] pl-4">{branch.name}</h3>
                
                <div className="space-y-6 text-gray-600 flex-grow">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-[#D32F2F] mt-1 shrink-0" />
                    <p>{branch.address}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="text-[#D32F2F] shrink-0" />
                    <p className="font-mono">{branch.phone}</p>
                  </div>

                  <div className="flex items-start space-x-3">
                     <Clock className="text-[#D32F2F] mt-1 shrink-0" />
                     <div>
                       <p className="block"><span className="text-gray-400 text-sm">Regular:</span> {branch.hoursRegular}</p>
                       <p className="block"><span className="text-gray-400 text-sm">Weekend:</span> {branch.hoursWeekend}</p>
                     </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Branches;