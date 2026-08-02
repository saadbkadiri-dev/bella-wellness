import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Instagram } from 'lucide-react';

const MAPS_URL =
  'https://www.google.com/maps/place/Ohana+Hills/@33.6916435,35.454495,17z/data=!3m1!4b1!4m6!3m5!1s0x151ee36e7bbab47f:0x6d5cab8b2dcc3bc4!8m2!3d33.6916391!4d35.4570699!16s%2Fg%2F11ghvkt8bf?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D';

export default function Footer() {
  return (
    <footer className="bg-[#F6F3EF] text-[#0C0D0D] py-10 md:py-12 border-t border-[#8C8275]/20 w-full">
      <div className="w-full px-6 sm:px-12 lg:px-16">
        
        {/* Main Footer 3-Column Grid — top-aligned so location/IG levels with menu */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-8 text-center md:text-left">
          
          {/* Brand Block — Emblem centered above wording on mobile, side-by-side like header on desktop */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="inline-flex flex-col md:flex-row items-center gap-2.5 md:gap-3 group">
              <div className="relative w-8 h-8 md:w-9 md:h-9 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/emblem-bella.png"
                  alt="Bella Wellness Emblem"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="relative h-4.5 w-22 md:h-5.5 md:w-26">
                  <Image
                    src="/images/word-bella.png"
                    alt="BELLA"
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <span className="text-[8px] md:text-[8.5px] tracking-[0.3em] uppercase font-sans font-medium text-[#8C8275] mt-0.5 text-center w-full pl-[0.3em]">
                  WELLNESS
                </span>
              </div>
            </Link>
            <p className="font-serif italic text-xs text-[#0C0D0D]/60">
              Sanctuary for Women in Ohana Hills
            </p>
          </div>

          {/* Center Navigation, Location/IG (mobile) & Copyright Block */}
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#0C0D0D]/75">
              <Link href="/" className="hover:text-[#8C8275] transition-colors py-1 min-h-[36px] flex items-center">
                Home
              </Link>
              <Link href="/about" className="hover:text-[#8C8275] transition-colors py-1 min-h-[36px] flex items-center">
                About
              </Link>
              <Link href="/services" className="hover:text-[#8C8275] transition-colors py-1 min-h-[36px] flex items-center">
                Services
              </Link>
              <Link href="/classes" className="hover:text-[#8C8275] transition-colors py-1 min-h-[36px] flex items-center">
                Classes
              </Link>
              <Link href="/gallery" className="hover:text-[#8C8275] transition-colors py-1 min-h-[36px] flex items-center">
                Gallery
              </Link>
              <Link href="/contact" className="hover:text-[#8C8275] transition-colors py-1 min-h-[36px] flex items-center">
                Contact
              </Link>
            </nav>

            {/* Mobile Location & IG links (ABOVE copyrights) */}
            <div className="flex md:hidden items-center justify-center gap-5 text-xs text-[#0C0D0D]/80 font-sans font-light">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#8C8275] transition-colors py-1 min-h-[36px]"
              >
                <MapPin size={15} className="text-[#8C8275]" />
                <span>Ohana Hills</span>
              </a>
              <span className="text-black/20">•</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#8C8275] transition-colors py-1 min-h-[36px]"
              >
                <Instagram size={15} className="text-[#8C8275]" />
                <span>Instagram</span>
              </a>
            </div>

            {/* Copyright & Designer Credit */}
            <div className="text-center text-[11px] text-[#0C0D0D]/40 space-y-0.5 font-sans font-light pt-1 md:pt-0">
              <p>&copy; {new Date().getFullYear()} Bella Wellness. All rights reserved.</p>
              <p>Designed by: thequarter8</p>
            </div>
          </div>

          {/* Desktop Location & Social Actions (hidden on mobile, visible on md+) */}
          <div className="hidden md:flex items-center justify-end gap-5 text-xs text-[#0C0D0D]/80 font-sans font-light">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#8C8275] transition-colors py-1 min-h-[36px]"
            >
              <MapPin size={15} className="text-[#8C8275]" />
              <span>Ohana Hills</span>
            </a>
            <span className="text-black/20">•</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#8C8275] transition-colors py-1 min-h-[36px]"
            >
              <Instagram size={15} className="text-[#8C8275]" />
              <span>Instagram</span>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
