'use client';

import { motion } from 'framer-motion';
import { MapPin, Instagram } from 'lucide-react';

const MAPS_URL =
  'https://www.google.com/maps/place/Ohana+Hills/@33.6916435,35.454495,17z/data=!3m1!4b1!4m6!3m5!1s0x151ee36e7bbab47f:0x6d5cab8b2dcc3bc4!8m2!3d33.6916391!4d35.4570699!16s%2Fg%2F11ghvkt8bf?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D';
const MAPS_EMBED_URL = 'https://maps.google.com/maps?q=33.6916391,35.4570699&z=15&output=embed';

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-36 pb-28 bg-[#F6F3EF] text-[#0C0D0D]">
      {/* Header Banner */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-6 mb-24">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[13px] uppercase tracking-[0.3em] text-[#8C8275] font-sans font-semibold"
        >
          GET IN TOUCH
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-fluid-h2 font-light text-[#0C0D0D] tracking-tight leading-tight"
        >
          Find Your Way to Bella
        </motion.h1>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-24">
        {/* Location + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <span className="text-[13px] uppercase tracking-[0.25em] text-[#8C8275] font-sans font-semibold">
              OUR LOCATION
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#0C0D0D]">
              Ohana Hills, Beirut
            </h2>
            <p className="font-sans text-fluid-body text-[#2C2D2E] font-light leading-relaxed">
              Nestled in the peaceful surroundings of Ohana Hills, Bella Wellness is a private sanctuary just moments from the city.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm text-[#0C0D0D]/80 hover:text-[#8C8275] hover:bg-black/5 transition-colors group font-sans font-light min-h-[44px] py-2 px-3 -ml-3 rounded-md"
            >
              <MapPin size={16} className="text-[#8C8275] group-hover:scale-110 transition-transform" />
              <span>Open in Google Maps</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7 relative h-[380px] md:h-[480px] rounded-2xl overflow-hidden border border-black/5"
          >
            <iframe
              src={MAPS_EMBED_URL}
              title="Bella Wellness location map — Ohana Hills, Beirut"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0"
            />
          </motion.div>
        </div>

        {/* Connect */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl text-left space-y-4"
        >
          <span className="text-[13px] uppercase tracking-[0.25em] text-[#8C8275] font-sans font-semibold">
            CONNECT
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-[#0C0D0D]">
            Stay in Touch
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-sm text-[#0C0D0D]/80 hover:text-[#8C8275] hover:bg-black/5 transition-colors group font-sans font-light min-h-[44px] py-2 px-3 -ml-3 rounded-md"
          >
            <Instagram size={16} className="text-[#8C8275] group-hover:scale-110 transition-transform" />
            <span>Instagram</span>
          </a>
        </motion.div>
      </div>
    </main>
  );
}
