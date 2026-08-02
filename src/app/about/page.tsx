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

export default function AboutPage() {
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
          OUR ESSENCE & VISION
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-fluid-h2 font-light text-[#0C0D0D] tracking-tight leading-tight"
        >
          Sanctuary in Ohana Hills
        </motion.h1>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-10">
        {/* Row 1: The Story — text left, image right */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="border border-black/10 bg-[#F9F7F4] p-8 md:p-12 texture-drift"
          style={lightTextureStyle}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[13px] uppercase tracking-[0.25em] text-[#8C8275] font-sans font-semibold">
                01 &bull; ORIGIN
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-[#0C0D0D]">
                The Story
              </h2>
              <p className="font-sans text-fluid-body text-[#2C2D2E] font-light leading-relaxed">
                Bella Wellness was born from a simple vision: to create a haven in Beirut where women could freely prioritize their well-being without compromise. Situated in the peaceful surroundings of Ohana Hills, we recognized the need for a comprehensive space that seamlessly blends fitness, recovery, beauty, and health. Bella is our answer to the modern woman&apos;s need for a sanctuary - a place to recharge, rejuvenate, and thrive.
              </p>
            </div>

            <div className="lg:col-span-5 relative h-[360px] md:h-[420px] rounded-2xl overflow-hidden border border-black/5">
              <Image
                src="/images/bella-wellness-cam2a.webp"
                alt="Bella Wellness Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Row 2: The Space — image left, text right */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="border border-black/10 bg-[#F9F7F4] p-8 md:p-12 texture-drift"
          style={lightTextureStyle}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[13px] uppercase tracking-[0.25em] text-[#8C8275] font-sans font-semibold">
                02 &bull; ENVIRONMENT
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-[#0C0D0D]">
                The Space
              </h2>
              <p className="font-sans text-fluid-body text-[#2C2D2E] font-light leading-relaxed">
                Step inside Bella, and the outside world fades away. Our environment has been thoughtfully designed to promote calm and luxury. Whether you are stretching in our bright Pilates studio, relaxing by the pool, or receiving a treatment in our tranquil salon, every corner of Bella Wellness is an invitation to slow down and savor the moment.
              </p>
            </div>

            <div className="lg:col-span-5 lg:order-first relative h-[360px] md:h-[420px] rounded-2xl overflow-hidden border border-black/5">
              <Image
                src="/images/bella-wellness-cam1a.webp"
                alt="Bella Wellness Space"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Row 3: The Team — text left, image right */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="border border-black/10 bg-[#F9F7F4] p-8 md:p-12 texture-drift"
          style={lightTextureStyle}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[13px] uppercase tracking-[0.25em] text-[#8C8275] font-sans font-semibold">
                03 &bull; EXPERTISE
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-[#0C0D0D]">
                The Team
              </h2>
              <p className="font-sans text-fluid-body text-[#2C2D2E] font-light leading-relaxed">
                Behind every service at Bella is a team of passionate experts. Our certified fitness instructors guide your movement journey, while our beauty professionals bring out your inner radiance. Our health specialists - including dieticians, nutritionists, and physiotherapists - work collaboratively to ensure your physical and nutritional needs are met with precision and care.
              </p>
            </div>

            <div className="lg:col-span-5 relative h-[360px] md:h-[420px] rounded-2xl overflow-hidden border border-black/5">
              <Image
                src="/images/bella-wellness-cam8.webp"
                alt="Bella Wellness Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Row 4: The Philosophy — full-width textured strip in WhatsApp Pill Color #8C8275 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-24 md:mt-32 py-20 md:py-28 px-6 text-center space-y-6 bg-[#8C8275] text-[#F6F3EF] texture-drift"
        style={darkTextureStyle}
      >
        <span className="text-[13px] uppercase tracking-[0.3em] text-[#F6F3EF]/80 font-sans font-semibold">
          04 &bull; OUR CORE BELIEF
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight text-[#F6F3EF]">
          The Philosophy
        </h2>
        <p className="font-serif italic text-2xl md:text-3xl text-[#F6F3EF]/90 max-w-3xl mx-auto font-light">
          &ldquo;A community of women thriving in wellness.&rdquo;
        </p>
        <p className="font-sans text-base md:text-lg text-[#F6F3EF]/80 leading-relaxed max-w-2xl mx-auto font-light pt-4">
          We are not just providing services; we are fostering a community. We believe that when women support each other in a dedicated, nurturing environment, true transformation occurs.
        </p>
      </motion.div>
    </main>
  );
}
