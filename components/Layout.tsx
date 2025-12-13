import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Our Team', path: '/team' },
    { name: 'Branches', path: '/branches' },
    { name: 'Founder', path: '/founder' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Custom SVG Logo matching the user's uploaded image (Red Oval, Gold Border, White Swooshes + GNV)
  // const LogoSVG = ({ className = "h-16 w-auto" }: { className?: string }) => (
  //   <svg viewBox="0 0 300 180" className={`${className} drop-shadow-md`}>
  //     {/* Gold Border Oval Background */}
  //     <ellipse cx="150" cy="90" rx="145" ry="85" fill="#D32F2F" stroke="#D4AF37" strokeWidth="8" />
      
  //     {/* Content Group */}
  //     <g transform="translate(60, 40)">
  //       {/* Concentric Swooshes/Rings on the left */}
  //       <path d="M 60 0 A 50 50 0 1 0 60 100" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" transform="rotate(-15 45 50)" />
  //       <path d="M 60 20 A 30 30 0 1 0 60 80" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" transform="rotate(-15 45 50)" />
        
  //       {/* GNV Text */}
  //       <text x="75" y="80" fill="white" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="70" letterSpacing="-3" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
  //         GNV
  //       </text>
  //     </g>
  //   </svg>
  // );

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF0F0] text-gray-800 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
      {/* Background Gradient Texture - Pastel Light */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#FFF0F0] via-[#FFE4E4] to-[#FFF0F0] pointer-events-none z-0" />
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-white/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img src='/logo/gurunivaslogos.png' alt = "gnvlogo" className="h-20 w-auto group-hover:scale-105 transition-transform duration-300" />
              <div className="flex flex-col hidden sm:flex">
                <span className="text-xl font-bold tracking-wider text-[#D32F2F]">GURU NIVAS</span>
                <span className="text-xs text-[#FF6B6B] tracking-widest uppercase font-semibold">Institute LLP</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors duration-300 hover:text-[#FF6B6B] ${
                    isActive(link.path) ? 'text-[#D32F2F] border-b-2 border-[#FFD700]' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-[#FF6B6B] p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden backdrop-blur-xl bg-white/95 border-b border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-[#FF6B6B]/10 text-[#D32F2F]'
                      : 'text-gray-600 hover:text-[#FF6B6B] hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow relative z-10 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-[#FF6B6B] text-white border-t border-[#FFD700]/30 backdrop-blur-md pt-12 pb-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B6B] to-[#D32F2F] opacity-90 z-[-1]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-12 w-20 relative">
                  {/* Footer Logo using the same new design */}
                  <img src='/logo/gurunivaslogos.png' alt = "gnvlogo" className="h-full w-full" />
                </div>
                <h3 className="text-xl font-bold text-white">GURU NIVAS</h3>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Empowering students to achieve excellence through personalized coaching and expert guidance across Chennai.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white border-b border-[#FFD700] inline-block pb-1">Contact Us</h4>
              <ul className="space-y-3 text-sm text-white/90">
                <li className="flex items-start space-x-3">
                  <MapPin className="text-[#FFD700] shrink-0" size={18} />
                  <span>K. K. Nagar & Valasaravakkam, Chennai</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="text-[#FFD700] shrink-0" size={18} />
                  <span>098402 87687</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="text-[#FFD700] shrink-0" size={18} />
                  <span>info@gurunivas.com</span>
                </li>
              </ul>
            </div>

            {/* Social & Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white border-b border-[#FFD700] inline-block pb-1">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#D32F2F] transition-colors duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#D32F2F] transition-colors duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#D32F2F] transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center text-xs text-white/70">
            &copy; {new Date().getFullYear()} Guru Nivas Institute LLP. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;