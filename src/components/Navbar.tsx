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
    { name: 'Services', href: '/services' },
    { name: 'Classes', href: '/classes' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#F6F3EF]/95 backdrop-blur-md border-b border-[#8C8275]/20 shadow-2xs ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="px-6 sm:px-12 lg:px-16 flex items-center justify-between">
        {/* Brand Logo & Emblem */}
        <Link href="/" className="flex items-center gap-2.5 md:gap-3.5 group">
          <div className="relative w-6 h-6 md:w-9 md:h-9 shrink-0 transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/images/emblem-bella.png"
              alt="Bella Wellness Emblem"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative h-4 w-20 md:h-6 md:w-28">
              <Image
                src="/images/word-bella.png"
                alt="BELLA"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
            <span className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase font-sans font-medium text-[#8C8275] mt-0.5 text-center w-full pl-[0.3em]">
              WELLNESS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs tracking-[0.25em] uppercase transition-colors duration-300 font-sans ${
                  isActive
                    ? 'text-[#8C8275] font-bold border-b-2 border-[#8C8275] pb-0.5'
                    : 'text-[#0C0D0D]/80 hover:text-[#8C8275] font-medium'
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
          className="md:hidden p-3 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors rounded-full text-[#0C0D0D] hover:text-[#8C8275] hover:bg-black/5"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu — full-page takeover below the header */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed top-[72px] left-0 right-0 h-[calc(100dvh-72px)] bg-[#F6F3EF] z-40 flex flex-col px-8 py-12 space-y-8 border-t border-black/5"
          style={{
            backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj48ZyBzdHJva2U9IiM4QjdFNjgiIHN0cm9rZS13aWR0aD0iMS4wIiBmaWxsPSJub25lIiBvcGFjaXR5PSIwLjE0Ij48cGF0aCBkPSJNLTIwIDIwIFEgMjAgMCwgNjAgNDAgVCAxMDAgMjAiLz48cGF0aCBkPSJNLTIwIDQwIFEgMjAgMjAsIDYwIDYwIFQgMDAgNDAiLz48cGF0aCBkPSJNLTIwIDYwIFEgMjAgNDAsIDYwIDgwIFQgMDAgNjAiLz48cGF0aCBkPSJNMCAtMjAgUSA0MCAyMCwgMjAgNjAgVCA0MCAxMDAiLz48cGF0aCBkPSJNMjAgLTIwIFEgNjAgMjAsIDQwIDYwIFQgNjAgMDAiLz48cGF0aCBkPSJNNDAgLTIwIFEgODAgMjAsIDYwIDYwIFQgODAgMDAiLz48L2c+PC9zdmc+")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '80px 80px',
          }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`block py-3 min-h-[44px] text-2xl font-serif font-light tracking-widest uppercase transition-colors ${
                  isActive ? 'text-[#8C8275]' : 'text-[#0C0D0D]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
