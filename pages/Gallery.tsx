import React from 'react';
import GlassCard from '../components/GlassCard';
import ScrollReveal from '../components/ScrollReveal';
import { GalleryItem } from '../types';

const Gallery: React.FC = () => {
  // Mock data for gallery
  const galleryItems: GalleryItem[] = [
    { id: 1, src: "/InstituteImage/gnvteamkk.jpeg", alt: "Founders Day", category: "Events" },
    { id: 2, src: "/InstituteImage/grp.jpeg", alt: "KK Nagar Institute", category: "Academic" },
    { id: 3, src: "/InstituteImage/foundersdaykk.jpeg", alt: "Founders day", category: "Events" },
    { id: 4, src: "/InstituteImage/og.JPG", alt: "Valasaravakkam Institute", category: "Academic" },
    { id: 5, src: "/InstituteImage/gnvteam.jpeg", alt: "Celebration", category: "Facilities" },

  
 
  ];

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto w-full">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#D32F2F] mb-4">Campus Gallery</h2>
          <p className="text-gray-600">Glimpses of life and learning at Guru Nivas Institute.</p>
        </div>
      </ScrollReveal>

      {/* Masonry-like Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {galleryItems.map((item, index) => (
          <ScrollReveal key={item.id} delay={index * 0.1}>
            <GlassCard className="p-2 break-inside-avoid group cursor-pointer" hoverEffect>
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-1">{item.category}</span>
                  <h3 className="text-white font-bold text-lg">{item.alt}</h3>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Gallery;