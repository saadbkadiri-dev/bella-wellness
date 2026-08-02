'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function IntroStrip() {
  return (
    <section className="py-24 md:py-36 bg-[#F6F3EF] text-[#0C0D0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Lockup (55%) */}
          <div className="lg:col-span-7 space-y-8 text-left lg:pr-6">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#8C8275] font-sans font-medium">
                OUR SANCTUARY &bull; BEIRUT
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-fluid-h2 font-light text-[#0C0D0D] tracking-tight leading-[1.12]"
            >
              Welcome to Bella Wellness, nestled in the serene Ohana Hills of Beirut.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-fluid-body text-[#2C2D2E] font-light max-w-xl text-left leading-relaxed"
            >
              We have created an exclusive sanctuary designed entirely for women—a space where you can move, heal, and glow. Bella is more than a destination; it is a comprehensive retreat where physical vitality meets profound relaxation and expert care.
            </motion.p>
          </div>

          {/* Right Floating Image Lockup (45%) */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative h-[440px] md:h-[520px] rounded-2xl overflow-hidden shadow-xs border border-black/5"
          >
            <Image
              src="/images/bella-wellness-cam2a.webp"
              alt="Bella Wellness Sanctuary Space in Ohana Hills"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-1000 ease-out"
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
