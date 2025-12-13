import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <div 
      className={`
        relative overflow-hidden
        backdrop-blur-xl bg-white/40 border border-white/60 shadow-lg rounded-2xl
        ${hoverEffect ? 'transition-all duration-300 hover:bg-white/60 hover:border-[#FFD700]/50 hover:shadow-[#FFD700]/20 hover:shadow-2xl hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {/* Subtle Gradient Overlay for Texture - Updated for Pastel Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/5 to-transparent pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;