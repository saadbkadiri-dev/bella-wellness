import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#F6F3EF] text-[#0C0D0D] pt-12 pb-8 border-t border-[#8C8275]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Brand Column */}
        <div className="space-y-3 text-left">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="relative w-7 h-7">
              <Image
                src="/images/emblem-bella.png"
                alt="Bella Wellness Emblem"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="relative h-5 w-24">
                <Image
                  src="/images/word-bella.png"
                  alt="BELLA"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <span className="text-[9px] tracking-[0.3em] text-[#8C8275] uppercase font-sans font-medium mt-0.5">
                WELLNESS
              </span>
            </div>
          </Link>
        </div>

        {/* Location Column */}
        <div className="space-y-2 text-left">
          <h4 className="text-xs uppercase tracking-[0.25em] text-[#8C8275] font-sans font-medium">
            Find Us
          </h4>
          <a
            href="https://maps.google.com/?q=Ohana+Hills+Beirut"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-sm text-[#0C0D0D]/80 hover:text-[#8C8275] hover:bg-black/5 transition-colors group font-sans font-light min-h-[44px] py-2 px-3 -ml-3 rounded-md"
          >
            <MapPin size={16} className="text-[#8C8275] group-hover:scale-110 transition-transform" />
            <span>Ohana Hills, Beirut</span>
          </a>
        </div>

        {/* Connect Column */}
        <div className="space-y-2 text-left">
          <h4 className="text-xs uppercase tracking-[0.25em] text-[#8C8275] font-sans font-medium">
            Connect
          </h4>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-sm text-[#0C0D0D]/80 hover:text-[#8C8275] hover:bg-black/5 transition-colors group font-sans font-light min-h-[44px] py-2 px-3 -ml-3 rounded-md"
          >
            <Instagram size={16} className="text-[#8C8275] group-hover:scale-110 transition-transform" />
            <span>Instagram</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mt-10 pt-6 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-xs text-[#0C0D0D]/40 gap-3 md:gap-4 font-sans font-light">
        <p>&copy; {new Date().getFullYear()} Bella Wellness. All rights reserved.</p>
        <p className="font-serif italic text-sm font-semibold">Sanctuary for Women in Ohana Hills</p>
        <p>Designed by: thequarter8</p>
      </div>
    </footer>
  );
}
