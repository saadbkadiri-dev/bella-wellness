'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const lightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };
  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F6F3EF] text-[#0C0D0D]">
      {/* Header Banner */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-6 mb-16">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[13px] uppercase tracking-[0.3em] text-[#8C8275] font-sans font-semibold"
        >
          Visual Walkthrough
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-fluid-h2 font-light leading-tight text-[#0C0D0D]"
        >
          The Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans text-base md:text-lg text-[#2C2D2E] leading-relaxed max-w-2xl mx-auto font-light"
        >
          Explore the spaces and experiences that make Bella Wellness your ultimate sanctuary in Beirut.
        </motion.p>
      </section>

      {/* Category Filter Tabs — flat underline tabs, not a pill (a shared rounded-full
          container broke into a stretched blob on mobile once the labels wrapped). */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs uppercase tracking-[0.25em] font-sans font-medium pb-1 border-b-2 transition-colors duration-300 ${
                selectedCategory === cat
                  ? 'text-[#8C8275] border-[#8C8275] font-semibold'
                  : 'text-[#0C0D0D]/60 border-transparent hover:text-[#0C0D0D]'
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
                onClick={() => setLightboxIndex(filteredItems.indexOf(item))}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-xs border border-black/5"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0D]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C8275] font-sans font-light">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl text-[#F6F3EF] font-medium mt-1">
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
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
              className="absolute top-6 right-6 z-10 text-white/80 hover:text-white p-2 transition-colors"
            >
              <X size={32} />
            </button>

            {/* Prev/Next — desktop click, plus swipe on the image itself for mobile */}
            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  aria-label="Previous image"
                  className="hidden sm:flex absolute left-4 md:left-8 z-10 items-center justify-center h-11 w-11 rounded-full border border-white/30 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  aria-label="Next image"
                  className="hidden sm:flex absolute right-4 md:right-8 z-10 items-center justify-center h-11 w-11 rounded-full border border-white/30 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[70vh] md:h-[80vh] flex flex-col items-center"
            >
              <div className="relative w-full flex-1 overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={lightboxItem.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -60) goNext();
                      else if (info.offset.x > 60) goPrev();
                    }}
                  >
                    <Image
                      src={lightboxItem.image}
                      alt={lightboxItem.title}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Category + title stay visible under the image */}
              <div className="pt-4 text-center">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C8275] font-sans font-medium">
                  {lightboxItem.category}
                </span>
                <h3 className="font-serif text-lg md:text-xl text-white font-medium mt-1">
                  {lightboxItem.title}
                </h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
