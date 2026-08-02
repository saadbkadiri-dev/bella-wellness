'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

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
  return (
    <section className="py-28 md:py-40 bg-[#EFEBE6] text-[#0C0D0D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-24 md:space-y-36">
        
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

        {/* Alternating Asymmetric Editorial Layouts (No Rigid Card Boxes) */}
        <div className="space-y-28 md:space-y-40">
          {services.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Image Lockup */}
                <div
                  className={`lg:col-span-6 relative h-[380px] md:h-[480px] rounded-2xl overflow-hidden shadow-xs border border-black/5 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </div>

                {/* Text Lockup */}
                <div
                  className={`lg:col-span-6 space-y-6 text-left ${
                    isEven ? 'lg:order-2 lg:pl-6' : 'lg:order-1 lg:pr-6'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-2xl text-[#8C8275] font-light">
                      {service.number}
                    </span>
                    <span
                      className="text-[10px] uppercase tracking-[0.25em] text-[#8C8275] font-sans font-medium"
                      dangerouslySetInnerHTML={{ __html: service.category }}
                    />
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl font-light text-[#0C0D0D] tracking-tight">
                    {service.title}
                  </h3>

                  <p className="font-sans text-fluid-body text-[#2C2D2E] font-light leading-relaxed max-w-lg">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
