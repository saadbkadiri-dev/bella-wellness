'use client';

import { motion } from 'framer-motion';

const pillars = [
  {
    number: '01',
    title: 'An Exclusive Space',
    description:
      'A private, women-only environment where you can feel completely at ease, focus entirely on yourself, and enjoy true privacy.',
    delay: 0.1,
  },
  {
    number: '02',
    title: 'Holistic Approach',
    description:
      'We believe in treating the whole person. From intense physical movement to deep relaxation and nutritional guidance, every service is designed to complement the others.',
    delay: 0.22,
  },
  {
    number: '03',
    title: 'Expert Care',
    description:
      'Every practitioner, trainer, and therapist at Bella Wellness is a dedicated professional, committed to providing the highest standard of care and expertise.',
    delay: 0.35,
  },
  {
    number: '04',
    title: 'Sanctuary Atmosphere',
    description:
      'Nestled in the peaceful surroundings of Ohana Hills, Beirut, every corner of Bella is thoughtfully designed as an invitation to slow down, recharge, and savor the moment.',
    delay: 0.48,
  },
];

export default function WhyBellaPillars() {
  return (
    <section className="py-28 md:py-40 bg-[#F6F3EF] text-[#0C0D0D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-20">
        
        {/* Section Title */}
        <div className="max-w-2xl text-left space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[11px] uppercase tracking-[0.3em] text-[#8C8275] font-sans font-medium"
          >
            OUR FOUNDATION
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-serif text-fluid-h2 font-light text-[#0C0D0D] tracking-tight"
          >
            Why Bella Wellness
          </motion.h2>
        </div>

        {/* Editorial Pillars Lockups (Unhurried, Micro-Border Accents) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 pt-4">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1, delay: pillar.delay, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 text-left border-l border-[#8C8275]/20 pl-6 lg:pl-8 hover:border-[#8C8275] transition-colors duration-500"
            >
              <span className="font-serif text-3xl text-[#8C8275] font-light block">
                {pillar.number}
              </span>

              <h3 className="font-serif text-2xl font-light text-[#0C0D0D] tracking-tight">
                {pillar.title}
              </h3>

              <p className="font-sans text-sm md:text-base text-[#2C2D2E] font-light leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
