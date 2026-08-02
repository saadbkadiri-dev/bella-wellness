'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const MAPS_URL =
  'https://www.google.com/maps/place/Ohana+Hills/@33.6916435,35.454495,17z/data=!3m1!4b1!4m6!3m5!1s0x151ee36e7bbab47f:0x6d5cab8b2dcc3bc4!8m2!3d33.6916391!4d35.4570699!16s%2Fg%2F11ghvkt8bf?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D';

// NOTE: placeholder contact details — swap for the real phone/email/hours before launch.
const PHONE = '+961 1 234 567';
const EMAIL = 'hello@bellawellness.com';

const TEXTURE_URL =
  'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj48ZyBzdHJva2U9IiM4QjdFNjgiIHN0cm9rZS13aWR0aD0iMS4wIiBmaWxsPSJub25lIiBvcGFjaXR5PSIwLjE0Ij48cGF0aCBkPSJNLTIwIDIwIFEgMjAgMCwgNjAgNDAgVCAxMDAgMjAiLz48cGF0aCBkPSJNLTIwIDQwIFEgMjAgMjAsIDYwIDYwIFQgMDAgNDAiLz48cGF0aCBkPSJNLTIwIDYwIFEgMjAgNDAsIDYwIDgwIFQgMDAgNjAiLz48cGF0aCBkPSJNMCAtMjAgUSA0MCAyMCwgMjAgNjAgVCA0MCAxMDAiLz48cGF0aCBkPSJNMjAgLTIwIFEgNjAgMjAsIDQwIDYwIFQgNjAgMDAiLz48cGF0aCBkPSJNNDAgLTIwIFEgODAgMjAsIDYwIDYwIFQgODAgMDAiLz48L2c+PC9zdmc+")';

const contactInfo = [
  {
    icon: MapPin,
    kicker: 'OUR LOCATION',
    title: 'Ohana Hills, Beirut',
    body: 'Nestled in the peaceful surroundings of Ohana Hills, Bella Wellness is a private sanctuary just moments from the city.',
    link: { href: MAPS_URL, label: 'Open in Google Maps', external: true },
  },
  {
    icon: Phone,
    kicker: 'REACH US',
    title: 'Call or Write',
    links: [
      { href: `tel:${PHONE.replace(/\s+/g, '')}`, label: PHONE, icon: Phone },
      { href: `mailto:${EMAIL}`, label: EMAIL, icon: Mail },
    ],
  },
  {
    icon: Clock,
    kicker: 'HOURS',
    title: 'Open Daily',
    body: null,
    hours: ['Monday – Saturday: 9:00 AM – 8:00 PM', 'Sunday: By Appointment'],
  },
  {
    icon: Instagram,
    kicker: 'CONNECT',
    title: 'Stay in Touch',
    link: { href: 'https://instagram.com', label: 'Instagram', external: true },
  },
];

export default function ContactPage() {
  return (
    <main
      className="min-h-screen pt-36 pb-28 bg-[#F6F3EF] text-[#0C0D0D] texture-drift"
      style={{ backgroundImage: TEXTURE_URL, backgroundRepeat: 'repeat', backgroundSize: '80px 80px' }}
    >
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

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="border border-black/10 bg-[#F9F7F4] p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 lg:items-stretch">
            <div className="lg:col-span-7 space-y-6 text-left">
              {contactInfo.map((item) => (
                <div key={item.kicker} className="border border-black/10 bg-[#F6F3EF] p-6 md:p-8 space-y-3 min-h-[260px] lg:min-h-0 lg:-ml-12">
                  <span className="text-[13px] uppercase tracking-[0.25em] text-[#8C8275] font-sans font-semibold">
                    {item.kicker}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[#0C0D0D]">
                    {item.title}
                  </h2>
                  {item.body && (
                    <p className="font-sans text-sm md:text-base text-[#2C2D2E] font-light leading-relaxed max-w-lg">
                      {item.body}
                    </p>
                  )}
                  {item.hours && (
                    <div className="flex items-start gap-2.5 text-sm text-[#0C0D0D]/80 font-sans font-light">
                      <Clock size={16} className="text-[#8C8275] mt-0.5 shrink-0" />
                      <div className="space-y-1">
                        {item.hours.map((h) => (
                          <p key={h}>{h}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  {item.links?.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-2.5 text-sm text-[#0C0D0D]/80 hover:text-[#8C8275] hover:bg-black/5 transition-colors group font-sans font-light min-h-[44px] py-2 px-3 -ml-3 rounded-md w-fit"
                    >
                      <l.icon size={16} className="text-[#8C8275] group-hover:scale-110 transition-transform" />
                      <span>{l.label}</span>
                    </a>
                  ))}
                  {item.link && (
                    <a
                      href={item.link.href}
                      target={item.link.external ? '_blank' : undefined}
                      rel={item.link.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-2.5 text-sm text-[#0C0D0D]/80 hover:text-[#8C8275] hover:bg-black/5 transition-colors group font-sans font-light min-h-[44px] py-2 px-3 -ml-3 rounded-md w-fit"
                    >
                      <item.icon size={16} className="text-[#8C8275] group-hover:scale-110 transition-transform" />
                      <span>{item.link.label}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:block lg:col-span-5 relative h-[calc(100%+4rem)] md:h-[calc(100%+6rem)] min-h-[440px] overflow-hidden -mt-8 -mr-8 -mb-8 md:-mt-12 md:-mr-12 md:-mb-12">
              <Image
                src="/images/bella-wellness-cam5.webp"
                alt="Welcome to Bella Wellness"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
