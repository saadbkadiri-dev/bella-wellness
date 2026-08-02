'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  { id: 'pool', src: '/images/bella-wellness-cam1a.webp', title: 'Tranquil Recovery Pool', tag: 'RECOVERY' },
  { id: 'sanctuary', src: '/images/bella-wellness-cam2a.webp', title: 'Ohana Hills Sanctuary', tag: 'SANCTUARY' },
  { id: 'pilates', src: '/images/bella-wellness-cam6.webp', title: 'Private Movement Studio', tag: 'FITNESS' },
  { id: 'contour', src: '/images/bella-wellness-cam3a.webp', title: 'InLine Body Technology', tag: 'SCULPTING' },
  { id: 'beauty', src: '/images/bella-wellness-cam7.webp', title: 'Bespoke Beauty Salon', tag: 'BEAUTY' },
];

const SLIDE_INTERVAL = 6000;

export default function HeroSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = heroImages.length;

  const clearTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const resetTimer = useCallback(() => {
    clearTimer();
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % count);
    }, SLIDE_INTERVAL);
  }, [count]);

  useEffect(() => {
    resetTimer();
    return clearTimer;
  }, [resetTimer]);

  const goToSlide = (idx: number) => {
    setActiveIdx((idx + count) % count);
    resetTimer();
  };

  const goNext = () => goToSlide(activeIdx + 1);
  const goPrev = () => goToSlide(activeIdx - 1);

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx]);

  const active = heroImages[activeIdx];

  return (
    <section
      className="relative w-full h-screen min-h-[640px] overflow-hidden bg-[#0C0D0D]"
      onMouseEnter={clearTimer}
      onMouseLeave={resetTimer}
    >
      {/* Slide Images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={active.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: SLIDE_INTERVAL / 1000 + 1, ease: 'linear' }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) goNext();
              else if (info.offset.x > 80) goPrev();
            }}
          >
            <Image
              src={active.src}
              alt={active.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Legibility Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0D]/85 via-[#0C0D0D]/15 to-[#0C0D0D]/40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pointer-events-none">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-2xl space-y-6 pointer-events-auto">
            <motion.div
              key={`eyebrow-${active.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <span
                className="text-[13px] uppercase tracking-[0.35em] text-[#F6F3EF] font-semibold"
                style={{ textShadow: '0 1px 4px rgba(12,13,13,0.6)' }}
              >
                &bull; BELLA WELLNESS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-fluid-hero font-light uppercase text-[#F6F3EF] leading-[1.05] tracking-tight"
            >
              Sanctuary For&nbsp;Women.
            </motion.h1>

            {/* Slide meta + progress */}
            <div className="flex items-center gap-4 pt-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={active.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-[10px] uppercase tracking-[0.25em] text-[#F6F3EF]/60 font-medium whitespace-nowrap"
                >
                  {String(activeIdx + 1).padStart(2, '0')} - {active.tag}
                </motion.span>
              </AnimatePresence>
              <div className="flex items-center gap-1.5">
                {heroImages.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => goToSlide(idx)}
                    aria-label={`View ${img.title}`}
                    aria-current={activeIdx === idx}
                    className="relative h-[2px] w-6 bg-[#F6F3EF]/30 overflow-hidden"
                  >
                    {activeIdx === idx && (
                      <motion.span
                        className="absolute inset-y-0 left-0 bg-[#F6F3EF]"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: SLIDE_INTERVAL / 1000, ease: 'linear' }}
                      />
                    )}
                    {activeIdx > idx && <span className="absolute inset-0 bg-[#F6F3EF]/70" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
