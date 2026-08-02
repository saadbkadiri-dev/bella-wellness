'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Pilates Studio & Movement',
    category: 'Movement',
    image: '/images/bella-wellness-cam6.webp',
  },
  {
    id: 2,
    title: 'Serene Heated Jacuzzi & Pool',
    category: 'Recovery',
    image: '/images/bella-wellness-cam1a.webp',
  },
  {
    id: 3,
    title: 'Advanced InLine Body Sculpting',
    category: 'Beauty and Care',
    image: '/images/bella-wellness-cam3a.webp',
  },
  {
    id: 4,
    title: 'Tranquil Poolside Sanctuary',
    category: 'Recovery',
    image: '/images/bella-wellness-cam2a.webp',
  },
  {
    id: 5,
    title: 'Luxury Beauty & Hair Styling',
    category: 'Beauty and Care',
    image: '/images/bella-wellness-cam7.webp',
  },
  {
    id: 6,
    title: 'Therapeutic Massage Suite',
    category: 'Recovery',
    image: '/images/bella-wellness-cam4a.webp',
  },
  {
    id: 7,
    title: 'Private Gym & Personal Workouts',
    category: 'Movement',
    image: '/images/bella-wellness-cam5.webp',
  },
  {
    id: 8,
    title: 'Nutritional & Physiotherapy Suite',
    category: 'Beauty and Care',
    image: '/images/bella-wellness-cam9.webp',
  },
  {
    id: 9,
    title: 'Mindful Yoga Space',
    category: 'Movement',
    image: '/images/bella-wellness-cam8.webp',
  },
];

const categories = ['All', 'Movement', 'Recovery', 'Beauty and Care'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F5EFEC] text-[#060707]">
      {/* Header Banner */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-6 mb-16">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.3em] text-[#A69876] font-sans font-light"
        >
          Visual Walkthrough
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight text-[#060707]"
        >
          The Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans text-base md:text-lg text-[#444445] leading-relaxed max-w-2xl mx-auto font-light"
        >
          Explore the spaces and experiences that make Bella Wellness your ultimate sanctuary in Beirut.
        </motion.p>
      </section>

      {/* Category Filter Tabs */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex justify-center">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 bg-white/60 backdrop-blur-xs p-2 rounded-full border border-[#C5BEAF]/30">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 font-sans ${
                selectedCategory === cat
                  ? 'bg-[#060707] text-[#F5EFEC] font-medium shadow-xs'
                  : 'text-[#060707]/70 hover:text-[#060707] hover:bg-black/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => setLightboxImage(item.image)}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-xs border border-[#C5BEAF]/30"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060707]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#A69876] font-sans font-light">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl text-[#F5EFEC] font-medium mt-1">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2 transition-colors"
            >
              <X size={32} />
            </button>
            <div className="relative w-full max-w-5xl h-[80vh] rounded-xl overflow-hidden">
              <Image
                src={lightboxImage}
                alt="Enlarged view"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
