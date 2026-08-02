'use client';

import { useState } from 'react';
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
  },
  {
    number: '02',
    title: 'Recovery and Relaxation',
    category: 'Jacuzzi &bull; Pool &bull; Therapeutic Massage',
    description:
      'Unwind in our tranquil recovery spaces. Soak in our heated Jacuzzi, swim laps in our serene pool, or surrender to our therapeutic massage services, designed to melt away the stress of the day.',
    image: '/images/bella-wellness-cam1a.webp',
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
  const [activeIdx, setActiveIdx] = useState(0);

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
            className="text-[11px] uppercase tracking-[0.3em] text-[#8C8275] font-sans font-medium"
          >
            CURATED OFFERINGS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-serif text-fluid-h2 font-light text-[#0C0D0D] tracking-tight"
          >
            Comprehensive Care & Sanctuary
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Sticky Image Container (Desktop) */}
          <div className="lg:col-span-5 sticky top-32 h-[440px] md:h-[600px] rounded-2xl overflow-hidden shadow-xs border border-black/5 hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={services[activeIdx].image}
                  alt={services[activeIdx].title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Accordion List */}
          <div className="lg:col-span-7 flex flex-col border-t border-black/10">
            {services.map((service, idx) => {
              const isActive = activeIdx === idx;
              
              return (
                <div key={service.title} className="border-b border-black/10">
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className="w-full py-8 text-left flex items-center justify-between group focus:outline-none"
                    aria-expanded={isActive}
                  >
                    <div className="flex items-start gap-6">
                      <span className={`font-serif text-xl md:text-2xl pt-1 transition-colors ${isActive ? 'text-[#8C8275]' : 'text-black/30 group-hover:text-[#8C8275]'}`}>
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
                        <div className="pb-10 pl-14 md:pl-16 space-y-6">
                          {/* Mobile Image (shows only on small screens inside accordion) */}
                          <div className="lg:hidden relative h-[260px] md:h-[400px] rounded-xl overflow-hidden mt-4 mb-8 border border-black/5">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover"
                            />
                          </div>

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

      </div>
    </section>
  );
}
