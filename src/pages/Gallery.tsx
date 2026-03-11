import { motion } from 'motion/react';

const images = [
  'https://picsum.photos/seed/gallery1/800/600',
  'https://picsum.photos/seed/gallery2/600/800',
  'https://picsum.photos/seed/gallery3/800/800',
  'https://picsum.photos/seed/gallery4/1200/800',
  'https://picsum.photos/seed/gallery5/600/600',
  'https://picsum.photos/seed/gallery6/800/1200',
  'https://picsum.photos/seed/gallery7/800/600',
  'https://picsum.photos/seed/gallery8/600/800',
  'https://picsum.photos/seed/gallery9/1200/600',
  'https://picsum.photos/seed/gallery10/800/800',
  'https://picsum.photos/seed/gallery11/600/600',
  'https://picsum.photos/seed/gallery12/800/600',
];

export function Gallery() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight"
          >
            Gallery
          </motion.h1>
          <p className="text-white/70 max-w-sm text-lg leading-relaxed">
            Where the passion for speed and precision is captured in every frame. Explore our collection showcasing Rennsport cars, our skilled engineers, and the unforgettable moments that define our journey.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-auto rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
