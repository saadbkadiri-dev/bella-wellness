'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/96170000000?text=Hello%20Bella%20Wellness%2C%20I%20would%20like%20to%20inquire%20about%20your%20services';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeoutId: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;

      // On mobile/desktop: Hide when scrolling down or near the top
      if (currentScrollY < 200 || isScrollingDown) {
        setIsVisible(false);
      } else {
        // Show when scrolling UP past 200px
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;

      // Clear previous timeout and set a new one to show when scroll stops (if past 200px)
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.scrollY > 200) {
          setIsVisible(true);
        }
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <AnimatePresence>
      <div
        aria-label="Quick actions"
        className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5 transition-all duration-500 ease-out pointer-events-auto ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-12 scale-95 pointer-events-none'
        }`}
      >
        {/* Classes Tab Floating Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/classes"
            aria-label="View Classes"
            className="inline-flex items-center justify-center gap-2 w-9 h-9 sm:w-auto sm:h-auto sm:px-4 sm:py-2.5 rounded-full bg-[#EFEBE6]/95 border border-[#8C8275]/35 shadow-sm backdrop-blur-md hover:bg-[#8C8275] hover:border-[#8C8275] transition-all duration-300 group"
          >
            <Calendar className="w-4 h-4 text-[#35302B] group-hover:text-[#F6F3EF] transition-colors" />
            <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#35302B] group-hover:text-[#F6F3EF] transition-colors">
              Classes
            </span>
          </Link>
        </motion.div>

        {/* WhatsApp Contact Floating Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            className="inline-flex items-center justify-center gap-2 w-9 h-9 sm:w-auto sm:h-auto sm:px-4 sm:py-2.5 rounded-full bg-[#8C8275] text-[#F6F3EF] border border-[#8C8275] shadow-sm backdrop-blur-md hover:bg-[#35302B] hover:border-[#35302B] transition-all duration-300 group"
          >
            <svg
              className="w-4 h-4 fill-current text-[#F6F3EF]"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] font-sans font-semibold">
              WhatsApp
            </span>
          </a>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
