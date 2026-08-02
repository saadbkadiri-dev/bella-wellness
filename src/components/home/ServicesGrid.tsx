'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Movement and Fitness',
    category: 'Pilates &bull; Yoga &bull; Private Gym',
    description:
      'Reconnect with your body through our curated fitness offerings. We offer expert-led Pilates and Yoga sessions designed to build strength, flexibility, and mindfulness, alongside a private, well-equipped gym for your personal workouts.',
    image: '/images/bella-wellness-cam6.webp',
    imagePosition: '65% center',
  },
  {
    number: '02',
    title: 'Recovery and Relaxation',
    category: 'Jacuzzi &bull; Pool &bull; Therapeutic Massage',
    description:
      'Unwind in our tranquil recovery spaces. Soak in our heated Jacuzzi, swim laps in our serene pool, or surrender to our therapeutic massage services, designed to melt away the stress of the day.',
    image: '/images/bella-wellness-cam1a.webp',
    imagePosition: '25% center',
  },
  {
    number: '03',
    title: 'Body Sculpting',
    category: 'InLine Body Machine',
    description:
      'Experience advanced body contouring with our InLine Body Machine. This state-of-the-art technology offers a non-invasive approach to slimming and toning, helping you achieve your aesthetic goals with ease.',
    image: '/images/bella-wellness-cam3a.webp',
  },
  {
    number: '04',
    title: 'Beauty Salon',
    category: 'Hairdresser &bull; Barbering &bull; Nail Care',
    description:
      'Our dedicated beauty space is your personal pampering station. From expert hairdressers and precision barbering to flawless nail care, our team of beauty professionals ensures you leave looking and feeling your absolute best.',
    image: '/images/bella-wellness-cam7.webp',
    imagePosition: '30% center',
  },
  {
    number: '05',
    title: 'Health and Nutrition',
    category: 'Dieticians &bull; Nutritionists &bull; Physiotherapy',
    description:
      'True wellness begins from within. Our team of certified dieticians, nutritionists, and physiotherapists are on hand to provide personalized guidance, helping you build sustainable habits and recover physically.',
    image: '/images/bella-wellness-cam9.webp',
  },
];

export default function ServicesGrid() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const displayIdx = activeIdx ?? 0;

  const [mobileIdx, setMobileIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleMobileScroll = () => {
    const el = scrollRef.current;
    if (!el || !el.firstElementChild) return;
    const slideWidth = (el.firstElementChild as HTMLElement).offsetWidth + 16;
    const idx = Math.round(el.scrollLeft / slideWidth);
    setMobileIdx(Math.min(Math.max(idx, 0), services.length - 1));
  };

  return (
    <section id="services" className="py-28 md:py-40 bg-[#EFEBE6] text-[#0C0D0D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-16 md:space-y-24">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[13px] uppercase tracking-[0.3em] text-[#8C8275] font-sans font-semibold"
          >
            BELLA&apos;S OFFERINGS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-serif text-fluid-h3 font-light text-[#0C0D0D] tracking-tight"
          >
            Comprehensive Care<br />&amp; Sanctuary
          </motion.h2>
        </div>

        <div className="hidden lg:grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          {/* Left: Sticky Image Container (Desktop) — clipped to the Bella arch emblem shape */}
          <svg width="0" height="0" className="absolute">
            <defs>
              <clipPath id="servicesArchClip" clipPathUnits="objectBoundingBox">
                <path d="M0,1 L0,0.4 A0.5,0.4 0 0 1 1,0.4 L1,1 Z" />
              </clipPath>
            </defs>
          </svg>
          <div
            className="lg:col-span-5 sticky top-32 h-full min-h-[600px] hidden lg:block"
            style={{
              clipPath: 'url(#servicesArchClip)',
              WebkitClipPath: 'url(#servicesArchClip)',
              backgroundColor: '#0C0D0D',
            }}
          >
            {/* No mode="wait" here on purpose — the old image needs to stay visible while
                the new one fades in, otherwise there's a gap with nothing rendered inside
                the clip-path and the arch shape itself flashes away (nothing to draw its
                silhouette). The bg fill above is a second safety net for the same gap. */}
            <AnimatePresence>
              <motion.div
                key={displayIdx}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={services[displayIdx].image}
                  alt={services[displayIdx].title}
                  fill
                  className="object-cover"
                  style={{ objectPosition: services[displayIdx].imagePosition ?? 'center' }}
                />
              </motion.div>
            </AnimatePresence>
            {/* Brand texture overlay — sits atop the photo without dimming it (plain paint, no blend-mode) */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj48ZyBzdHJva2U9IiNGNkYzRUYiIHN0cm9rZS13aWR0aD0iMS4zIiBmaWxsPSJub25lIiBvcGFjaXR5PSIwLjMyIj48cGF0aCBkPSJNLTIwIDIwIFEgMjAgMCwgNjAgNDAgVCAxMDAgMjAiLz48cGF0aCBkPSJNLTIwIDQwIFEgMjAgMjAsIDYwIDYwIFQgMDAgNDAiLz48cGF0aCBkPSJNLTIwIDYwIFEgMjAgNDAsIDYwIDgwIFQgMDAgNjAiLz48cGF0aCBkPSJNMCAtMjAgUSA0MCAyMCwgMjAgNjAgVCA0MCAxMDAiLz48cGF0aCBkPSJNMjAgLTIwIFEgNjAgMjAsIDQwIDYwIFQgNjAgMDAiLz48cGF0aCBkPSJNNDAgLTIwIFEgODAgMjAsIDYwIDYwIFQgODAgMDAiLz48L2c+PC9zdmc+")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '80px 80px',
              }}
            />
            {/* Soft inner vignette — reads as depth/recession into a real window opening,
                rather than a flat photo cutout. Pure CSS gradient, no extra assets/JS,
                negligible cost. */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 80% 70% at center, transparent 35%, rgba(12,13,13,0.7) 100%)',
              }}
            />
          </div>

          {/* Right: Accordion List (Desktop only — mobile uses a carousel instead, below) */}
          <div className="hidden lg:flex lg:col-span-7 flex-col border-t border-black/10">
            {services.map((service, idx) => {
              const isActive = activeIdx === idx;
              
              return (
                <div key={service.title} className="border-b border-black/10">
                  <button
                    onClick={() => setActiveIdx((prev) => (prev === idx ? null : idx))}
                    className="w-full py-8 text-left flex items-center justify-between group focus:outline-none"
                    aria-expanded={isActive}
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-1.5 md:gap-6">
                      <span className={`font-serif text-xl md:text-2xl md:pt-1 transition-colors ${isActive ? 'text-[#8C8275]' : 'text-black/30 group-hover:text-[#8C8275]'}`}>
                        {service.number}
                      </span>
                      <div className="space-y-1.5">
                        <h3 className={`font-serif text-2xl md:text-4xl font-light tracking-tight transition-colors ${isActive ? 'text-[#0C0D0D]' : 'text-[#0C0D0D]/70 group-hover:text-[#0C0D0D]'}`}>
                          {service.title}
                        </h3>
                        <span
                          className={`block text-xs md:text-sm font-sans font-medium tracking-[0.2em] uppercase transition-colors ${isActive ? 'text-[#8C8275]' : 'text-[#8C8275]/80'}`}
                          dangerouslySetInnerHTML={{ __html: service.category }}
                        />
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className={`text-[#8C8275] pt-2 transition-opacity ${isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`}
                    >
                      <ChevronDown size={24} strokeWidth={1.5} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 pl-0 md:pl-16 space-y-6">
                          <p className="font-sans text-fluid-body text-[#0C0D0D]/90 font-light leading-relaxed max-w-xl text-base md:text-lg">
                            {service.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Swipeable Carousel (replaces the accordion below the lg breakpoint) */}
        <div className="lg:hidden -mx-6 sm:-mx-12">
          <div
            ref={scrollRef}
            onScroll={handleMobileScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-6 sm:scroll-px-12 px-6 sm:px-12 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((service) => (
              <div key={service.title} className="snap-center shrink-0 w-[82vw] sm:w-[55vw]">
                <div className="relative h-[340px] rounded-2xl overflow-hidden border border-black/5 mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: service.imagePosition ?? 'center' }}
                  />
                  {/* Brand texture overlay — sits atop the photo without dimming it */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj48ZyBzdHJva2U9IiNGNkYzRUYiIHN0cm9rZS13aWR0aD0iMS4zIiBmaWxsPSJub25lIiBvcGFjaXR5PSIwLjMyIj48cGF0aCBkPSJNLTIwIDIwIFEgMjAgMCwgNjAgNDAgVCAxMDAgMjAiLz48cGF0aCBkPSJNLTIwIDQwIFEgMjAgMjAsIDYwIDYwIFQgMDAgNDAiLz48cGF0aCBkPSJNLTIwIDYwIFEgMjAgNDAsIDYwIDgwIFQgMDAgNjAiLz48cGF0aCBkPSJNMCAtMjAgUSA0MCAyMCwgMjAgNjAgVCA0MCAxMDAiLz48cGF0aCBkPSJNMjAgLTIwIFEgNjAgMjAsIDQwIDYwIFQgNjAgMDAiLz48cGF0aCBkPSJNNDAgLTIwIFEgODAgMjAsIDYwIDYwIFQgODAgMDAiLz48L2c+PC9zdmc+")`,
                      backgroundRepeat: 'repeat',
                      backgroundSize: '80px 80px',
                    }}
                  />
                </div>
                <span className="font-serif text-xl text-[#8C8275]">{service.number}</span>
                <h3 className="font-serif text-2xl font-light tracking-tight text-[#0C0D0D] mt-1">
                  {service.title}
                </h3>
                <span
                  className="block text-xs font-sans font-medium tracking-[0.2em] uppercase text-[#8C8275]/80 mt-1.5"
                  dangerouslySetInnerHTML={{ __html: service.category }}
                />
                <p className="font-sans text-sm text-[#0C0D0D]/90 font-light leading-relaxed mt-4">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Progress-line indicators */}
          <div className="flex items-center gap-1.5 mt-8 px-6 sm:px-12">
            {services.map((service, idx) => (
              <span
                key={service.title}
                className={`h-[2px] flex-1 transition-colors duration-300 ${
                  mobileIdx === idx ? 'bg-[#8C8275]' : 'bg-black/10'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
