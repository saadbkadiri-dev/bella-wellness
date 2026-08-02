'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const heroImages = [
  { src: '/images/bella-wellness-cam1a.webp', alt: 'Bella Wellness Sanctuary' },
  { src: '/images/bella-wellness-cam2a.webp', alt: 'Serene Wellness Environment' },
  { src: '/images/bella-wellness-cam6.webp', alt: 'Private Movement Studio' },
];

export default function HeroSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] flex items-center justify-start overflow-hidden bg-[#F6F3EF]"
    >
      {/* Background Image Container with Parallax */}
      <motion.div style={{ y: parallaxY, opacity: opacityFade }} className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={heroImages[currentIdx].src}
              alt={heroImages[currentIdx].alt}
              fill
              className="object-cover object-center filter brightness-[1.1] contrast-[1.02]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Editorial Left-Aligned Content Lockup */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full pt-24">
        <div className="max-w-3xl space-y-8">
          {/* Micro Tag Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#8C8275] font-sans font-medium px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md inline-block">
              OHANA HILLS &bull; BEIRUT
            </span>
          </motion.div>

          {/* Fluid Cormorant Garamond Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-fluid-hero font-light text-[#F6F3EF] leading-[1.02] tracking-tight drop-shadow-md"
          >
            A community of women <br />
            thriving in wellness.
          </motion.h1>
        </div>
      </div>

      {/* Editorial Scroll Indicator */}
      <div className="absolute bottom-10 left-12 sm:left-16 z-10 hidden sm:flex items-center gap-4 text-[#F6F3EF]/60">
        <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-light">
          Sanctuary
        </span>
        <div className="w-12 h-[1px] bg-[#8C8275]/40" />
      </div>
    </section>
  );
}
