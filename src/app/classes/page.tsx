'use client';

import { motion } from 'framer-motion';

const TEXTURE_URL =
  'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj48ZyBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMS4wIiBmaWxsPSJub25lIiBvcGFjaXR5PSIwLjEwIj48cGF0aCBkPSJNLTIwIDIwIFEgMjAgMCwgNjAgNDAgVCAxMDAgMjAiLz48cGF0aCBkPSJNLTIwIDQwIFEgMjAgMjAsIDYwIDYwIFQgMDAgNDAiLz48cGF0aCBkPSJNLTIwIDYwIFEgMjAgNDAsIDYwIDgwIFQgMDAgNjAiLz48cGF0aCBkPSJNMCAtMjAgUSA0MCAyMCwgMjAgNjAgVCA4MCAxMDAiLz48cGF0aCBkPSJNMjAgLTIwIFEgNjAgMjAsIDQwIDYwIFQgNjAgMDAiLz48cGF0aCBkPSJNNDAgLTIwIFEgODAgMjAsIDYwIDYwIFQgODAgMDAiLz48L2c+PC9zdmc+")';

const textureStyle = {
  backgroundImage: TEXTURE_URL,
  backgroundRepeat: 'repeat' as const,
  backgroundSize: '80px 80px',
};

const genericOfferings = [
  {
    number: '01',
    title: 'Pilates',
    subtitle: 'Movement & Alignment',
    description: 'Core strengthening, posture correction, and full-body structural alignment.',
  },
  {
    number: '02',
    title: 'Yoga',
    subtitle: 'Mindfulness & Breathwork',
    description: 'Breath-synchronized movement, flexibility, and meditative calm.',
  },
  {
    number: '03',
    title: 'Private Gym',
    subtitle: 'Personal Training',
    description: 'Bespoke physical conditioning and coaching in a private setting.',
  },
  {
    number: '04',
    title: 'Recovery & Wellness',
    subtitle: 'Therapy & Rest',
    description: 'Targeted tissue release, restorative therapy, and active recovery.',
  },
];

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-[#F6F3EF] text-[#35302B] flex flex-col justify-between relative overflow-hidden">
      <main className="flex-1 pt-32 md:pt-44 pb-24 md:pb-36 relative z-10 w-full">
        {/* Hero Section — Full Bleed Container in Signature WhatsApp Button Color #8C8275 */}
        <section
          className="w-full -mt-32 md:-mt-44 mb-16 md:mb-24 bg-[#8C8275] text-[#F6F3EF] border-b border-[#8C8275] pt-36 md:pt-48 pb-12 sm:pb-16 md:pb-20 texture-drift"
          style={textureStyle}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-6 md:space-y-8 text-left">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[13px] uppercase tracking-[0.3em] font-sans font-semibold text-[#F6F3EF]/80 block"
            >
              BELLA&apos;S MOVEMENT &amp; MINDFULNESS
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F6F3EF] uppercase leading-none"
            >
              STAY TUNED!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
              className="font-serif italic text-base sm:text-lg lg:text-xl font-light text-[#F6F3EF]/90 max-w-2xl pt-1"
            >
              A new chapter of movement, strength, and sanctuary is coming soon to Ohana Hills.
            </motion.p>
          </div>
        </section>

        {/* Generic Offerings Editorial Glimpse — Standard Max-Width Grid */}
        <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="space-y-10 md:space-y-14 pt-8 border-t border-[#8C8275]/25">
            <div>
              <span className="text-[13px] uppercase tracking-[0.3em] font-sans font-semibold text-[#8C8275]">
                WHAT WE DO &bull; UPCOMING OFFERINGS
              </span>
            </div>

            {/* Asymmetric Editorial Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {genericOfferings.map((item, idx) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="space-y-3 pb-8 border-b border-[#8C8275]/20"
                >
                  <span className="text-xs font-sans font-semibold tracking-[0.25em] text-[#8C8275] uppercase block">
                    {item.number} &bull; {item.subtitle}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#35302B] tracking-tight">
                    {item.title}
                  </h2>
                  <p className="font-sans text-sm sm:text-base font-light text-[#8C8275] leading-relaxed max-w-md pt-1">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
