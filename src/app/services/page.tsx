'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const LIGHT_TEXTURE_URL =
  'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj48ZyBzdHJva2U9IiM4QjdFNjgiIHN0cm9rZS13aWR0aD0iMS4wIiBmaWxsPSJub25lIiBvcGFjaXR5PSIwLjE0Ij48cGF0aCBkPSJNLTIwIDIwIFEgMjAgMCwgNjAgNDAgVCAxMDAgMjAiLz48cGF0aCBkPSJNLTIwIDQwIFEgMjAgMjAsIDYwIDYwIFQgMDAgNDAiLz48cGF0aCBkPSJNLTIwIDYwIFEgMjAgNDAsIDYwIDgwIFQgMDAgNjAiLz48cGF0aCBkPSJNMCAtMjAgUSA0MCAyMCwgMjAgNjAgVCA4MCAxMDAiLz48cGF0aCBkPSJNMjAgLTIwIFEgNjAgMjAsIDQwIDYwIFQgNjAgMDAiLz48cGF0aCBkPSJNNDAgLTIwIFEgODAgMjAsIDYwIDYwIFQgODAgMDAiLz48L2c+PC9zdmc+")';

const DARK_TEXTURE_URL =
  'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj48ZyBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMS4wIiBmaWxsPSJub25lIiBvcGFjaXR5PSIwLjEwIj48cGF0aCBkPSJNLTIwIDIwIFEgMjAgMCwgNjAgNDAgVCAxMDAgMjAiLz48cGF0aCBkPSJNLTIwIDQwIFEgMjAgMjAsIDYwIDYwIFQgMDAgNDAiLz48cGF0aCBkPSJNLTIwIDYwIFEgMjAgNDAsIDYwIDgwIFQgMDAgNjAiLz48cGF0aCBkPSJNMCAtMjAgUSA0MCAyMCwgMjAgNjAgVCA4MCAxMDAiLz48cGF0aCBkPSJNMjAgLTIwIFEgNjAgMjAsIDQwIDYwIFQgNjAgMDAiLz48cGF0aCBkPSJNNDAgLTIwIFEgODAgMjAsIDYwIDYwIFQgODAgMDAiLz48L2c+PC9zdmc+")';

const lightTextureStyle = {
  backgroundImage: LIGHT_TEXTURE_URL,
  backgroundRepeat: 'repeat' as const,
  backgroundSize: '80px 80px',
};

const darkTextureStyle = {
  backgroundImage: DARK_TEXTURE_URL,
  backgroundRepeat: 'repeat' as const,
  backgroundSize: '80px 80px',
};

const detailedServices = [
  {
    number: '01',
    category: 'MOVEMENT & FITNESS',
    title: 'Pilates, Yoga & Private Gym',
    description:
      'Reconnect with your body through our curated movement offerings. We provide expert-led Reformer & Mat Pilates, Vinyasa and Yin Yoga, alongside a private gym for personalized physical conditioning in a secluded setting.',
    image: '/images/bella-wellness-cam6.webp',
  },
  {
    number: '02',
    category: 'RECOVERY & RELAXATION',
    title: 'Jacuzzi, Pool & Therapeutic Massage',
    description:
      'Unwind in our tranquil recovery spaces. Soak in our heated Jacuzzi, swim laps in our serene pool, or surrender to therapeutic massages designed to melt stress and restore muscular vitality.',
    image: '/images/bella-wellness-cam1a.webp',
  },
  {
    number: '03',
    category: 'BODY SCULPTING',
    title: 'InLine Body Machine',
    description:
      'Experience non-invasive body contouring with the advanced InLine Body Machine, helping you achieve targeted muscular tone, lymphatic drainage, and aesthetic refinement.',
    image: '/images/bella-wellness-cam3a.webp',
  },
  {
    number: '04',
    category: 'BEAUTY SALON',
    title: 'Hairdresser, Barbering & Nail Care',
    description:
      'Our dedicated beauty sanctuary offers bespoke hair styling, precision barbering, and luxury manicure/pedicure treatments, ensuring you leave feeling thoroughly renewed.',
    image: '/images/bella-wellness-cam7.webp',
  },
  {
    number: '05',
    category: 'HEALTH & NUTRITION',
    title: 'Dieticians, Nutritionists & Physiotherapy',
    description:
      'Holistic health guided by certified dieticians, nutritionists, and physiotherapists to support your long-term vitality, meal planning, and joint mobility.',
    image: '/images/bella-wellness-cam9.webp',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-36 pb-28 bg-[#F6F3EF] text-[#0C0D0D]">
      {/* Header Banner — Clean Centered Header like About Us page */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-6 mb-20 md:mb-24">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[13px] uppercase tracking-[0.3em] text-[#8C8275] font-sans font-semibold block"
        >
          BELLA&apos;S OFFERINGS &amp; SANCTUARY
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-fluid-h2 font-light text-[#0C0D0D] tracking-tight leading-tight"
        >
          Services &amp; Offerings
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-sans text-fluid-body text-[#8C8275] font-light leading-relaxed max-w-2xl mx-auto pt-1"
        >
          Explore our full spectrum of holistic care in Ohana Hills. From curated movement and therapeutic relaxation to advanced body sculpting, beauty treatments, and personalized nutrition.
        </motion.p>
      </section>

      {/* Main Services Container Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-10">
        {detailedServices.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="border border-black/10 bg-[#F9F7F4] p-8 md:p-12 texture-drift"
              style={lightTextureStyle}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Text Content Column */}
                <div className={`lg:col-span-7 space-y-6 text-left ${isEven ? '' : 'lg:order-last'}`}>
                  <span className="text-[13px] uppercase tracking-[0.25em] text-[#8C8275] font-sans font-semibold">
                    {service.number} &bull; {service.category}
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-light text-[#0C0D0D]">
                    {service.title}
                  </h2>
                  <p className="font-sans text-fluid-body text-[#2C2D2E] font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Image Frame Column */}
                <div className={`lg:col-span-5 relative h-[360px] md:h-[420px] rounded-2xl overflow-hidden border border-black/5 ${isEven ? '' : 'lg:order-first'}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Closing Textured Banner Strip in WhatsApp Pill Color #8C8275 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-24 md:mt-32 py-20 md:py-28 px-6 text-center space-y-6 bg-[#8C8275] text-[#F6F3EF] texture-drift"
        style={darkTextureStyle}
      >
        <span className="text-[13px] uppercase tracking-[0.3em] text-[#F6F3EF]/80 font-sans font-semibold">
          06 &bull; HOLISTIC ESSENCE
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight text-[#F6F3EF]">
          Harmonious Care
        </h2>
        <p className="font-serif italic text-2xl md:text-3xl text-[#F6F3EF]/90 max-w-3xl mx-auto font-light">
          &ldquo;Sanctuary designed entirely for women to move, heal, and glow.&rdquo;
        </p>
        <p className="font-sans text-base md:text-lg text-[#F6F3EF]/80 leading-relaxed max-w-2xl mx-auto font-light pt-4">
          Every service at Bella Wellness is intentionally crafted to harmonize physical vitality, mental tranquility, and aesthetic beauty in one serene sanctuary.
        </p>
      </motion.div>
    </main>
  );
}
