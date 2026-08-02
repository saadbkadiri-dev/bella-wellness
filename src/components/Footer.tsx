import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0C0D0D] text-[#F6F3EF] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Brand Column */}
        <div className="space-y-4 text-left">
          <Link href="/" className="inline-flex items-center gap-3.5">
            <div className="relative w-8 h-8">
              <Image
                src="/images/emblem-bella.png"
                alt="Bella Wellness Emblem"
                fill
                className="object-contain filter invert opacity-90"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-light tracking-widest text-[#F6F3EF] uppercase">
                BELLA
              </span>
              <span className="text-[9px] tracking-[0.3em] text-[#8C8275] uppercase font-sans font-medium">
                WELLNESS
              </span>
            </div>
          </Link>
          <p className="font-serif italic text-lg text-[#EAE3DE] max-w-sm font-light">
            &ldquo;A community of women thriving in wellness.&rdquo;
          </p>
        </div>

        {/* Location Column */}
        <div className="space-y-3 text-left">
          <h4 className="text-xs uppercase tracking-[0.25em] text-[#8C8275] font-sans font-medium">
            Find Us
          </h4>
          <a
            href="https://maps.google.com/?q=Ohana+Hills+Beirut"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-sm text-[#F6F3EF]/80 hover:text-[#8C8275] transition-colors group font-sans font-light"
          >
            <MapPin size={16} className="text-[#8C8275] group-hover:scale-110 transition-transform" />
            <span>Ohana Hills, Beirut</span>
          </a>
        </div>

        {/* Connect Column */}
        <div className="space-y-3 text-left">
          <h4 className="text-xs uppercase tracking-[0.25em] text-[#8C8275] font-sans font-medium">
            Connect
          </h4>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-sm text-[#F6F3EF]/80 hover:text-[#8C8275] transition-colors group font-sans font-light"
          >
            <Instagram size={16} className="text-[#8C8275] group-hover:scale-110 transition-transform" />
            <span>Instagram</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-[#F6F3EF]/40 gap-4 font-sans font-light">
        <p>&copy; {new Date().getFullYear()} Bella Wellness. All rights reserved.</p>
        <p className="font-serif italic text-sm">Sanctuary for Women in Ohana Hills</p>
      </div>
    </footer>
  );
}
