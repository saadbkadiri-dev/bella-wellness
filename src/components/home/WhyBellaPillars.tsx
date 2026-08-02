'use client';

import { motion } from 'framer-motion';

const pillars = [
  {
    number: '01',
    title: 'An Exclusive Space',
    description:
      'A private, women-only environment where you can feel completely at ease, focus entirely on yourself, and enjoy true privacy.',
    delay: 0.1,
    fill: '#F9F7F4',
  },
  {
    number: '02',
    title: 'Holistic Approach',
    description:
      'We believe in treating the whole person. From intense physical movement to deep relaxation and nutritional guidance, every service is designed to complement the others.',
    delay: 0.22,
    fill: '#F9F7F4',
  },
  {
    number: '03',
    title: 'Expert Care',
    description:
      'Every practitioner, trainer, and therapist at Bella Wellness is a dedicated professional, committed to providing the highest standard of care and expertise.',
    delay: 0.35,
    fill: '#F9F7F4',
  },
  {
    number: '04',
    title: 'Sanctuary Atmosphere',
    description:
      'Nestled in the peaceful surroundings of Ohana Hills, Beirut, every corner of Bella is thoughtfully designed as an invitation to slow down, recharge, and savor the moment.',
    delay: 0.48,
    fill: '#F9F7F4',
  },
];

export default function WhyBellaPillars() {
  return (
    <section
      className="py-28 md:py-40 bg-[#F6F3EF] text-[#0C0D0D]"
      style={{
        backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj48ZyBzdHJva2U9IiM4QjdFNjgiIHN0cm9rZS13aWR0aD0iMS4wIiBmaWxsPSJub25lIiBvcGFjaXR5PSIwLjE0Ij48cGF0aCBkPSJNLTIwIDIwIFEgMjAgMCwgNjAgNDAgVCAxMDAgMjAiLz48cGF0aCBkPSJNLTIwIDQwIFEgMjAgMjAsIDYwIDYwIFQgMDAgNDAiLz48cGF0aCBkPSJNLTIwIDYwIFEgMjAgNDAsIDYwIDgwIFQgMDAgNjAiLz48cGF0aCBkPSJNMCAtMjAgUSA0MCAyMCwgMjAgNjAgVCA0MCAxMDAiLz48cGF0aCBkPSJNMjAgLTIwIFEgNjAgMjAsIDQwIDYwIFQgNjAgMDAiLz48cGF0aCBkPSJNNDAgLTIwIFEgODAgMjAsIDYwIDYwIFQgODAgMDAiLz48L2c+PC9zdmc+")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '80px 80px',
      }}
    >
      {/* No max-w-7xl wrapper here on purpose — this whole section (title + pillars)
          spans the true page width with only edge padding, so the title stays flush
          with the tiles below it instead of sitting in a centered, narrower column. */}

      {/* Section Title */}
      <div className="max-w-2xl text-left space-y-4 px-6 sm:px-12 lg:px-16">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[13px] uppercase tracking-[0.3em] text-[#8C8275] font-sans font-semibold"
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

      {/* Editorial Pillars - numbered rows (mobile/tablet) */}
      <div className="lg:hidden border-t border-black/10 px-6 sm:px-12 lg:px-16 mt-20">
        {pillars.map((pillar) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.9, delay: pillar.delay, ease: [0.16, 1, 0.3, 1] }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start md:items-baseline py-10 md:py-12 border-b border-black/10 transition-[padding] duration-500 hover:pl-2"
          >
            <span className="md:col-span-2 font-serif text-4xl md:text-5xl text-[#8C8275] font-light">
              {pillar.number}
            </span>

            <h3 className="md:col-span-4 font-serif text-2xl md:text-3xl font-light text-[#0C0D0D] tracking-tight">
              {pillar.title}
            </h3>

            <p className="md:col-span-6 font-sans text-sm md:text-base text-[#2C2D2E] font-light leading-relaxed max-w-xl">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Four Squares, equal size, one full-width row (desktop) */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-6 px-6 sm:px-12 lg:px-16 mt-20">
        {pillars.map((pillar) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.9, delay: pillar.delay, ease: [0.16, 1, 0.3, 1] }}
            className="group border border-black/10 p-8 flex flex-col transition-colors duration-500 hover:border-[#8C8275]"
            style={{ backgroundColor: pillar.fill }}
          >
            <span className="font-serif text-4xl text-[#8C8275] font-light">
              {pillar.number}
            </span>

            <h3 className="font-serif text-2xl font-light text-[#0C0D0D] tracking-tight mt-8">
              {pillar.title}
            </h3>
            <p className="font-sans text-sm text-[#2C2D2E] font-light leading-relaxed mt-3">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
