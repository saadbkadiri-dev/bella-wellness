'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-[#F6F3EF]/90 backdrop-blur-md py-4 border-b border-black/5 shadow-2xs'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex items-center justify-between">
        {/* Brand Logo & Emblem */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative w-8 h-8 md:w-9 md:h-9 transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/images/emblem-bella.png"
              alt="Bella Wellness Emblem"
              fill
              className={`object-contain transition-all duration-300 ${!scrolled ? 'brightness-0 invert opacity-90' : ''}`}
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-serif text-xl md:text-2xl font-light tracking-widest uppercase leading-none transition-colors duration-300 ${!scrolled ? 'text-[#F6F3EF]' : 'text-[#0C0D0D]'}`}>
              BELLA
            </span>
            <span className={`text-[9px] tracking-[0.3em] uppercase font-sans font-medium mt-1 transition-colors duration-300 ${!scrolled ? 'text-white/70' : 'text-[#8C8275]'}`}>
              WELLNESS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 font-sans ${
                  isActive
                    ? (!scrolled ? 'text-white font-medium' : 'text-[#8C8275] font-medium')
                    : (!scrolled ? 'text-white/80 hover:text-white' : 'text-[#0C0D0D]/80 hover:text-[#8C8275]')
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className={`md:hidden p-2 transition-colors ${!scrolled ? 'text-white hover:text-white/80' : 'text-[#0C0D0D] hover:text-[#8C8275]'}`}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-[#F6F3EF] z-40 flex flex-col px-8 py-12 space-y-8 animate-fadeIn border-t border-black/5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-2xl font-serif font-light tracking-widest uppercase transition-colors ${
                  isActive ? 'text-[#8C8275]' : 'text-[#0C0D0D]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-12 border-t border-black/10 mt-auto text-xs text-[#0C0D0D]/60 font-sans tracking-[0.2em] uppercase">
            Ohana Hills &bull; Beirut
          </div>
        </div>
      )}
    </header>
  );
}
