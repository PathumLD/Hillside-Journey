import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const categories = ['All', 'Landscapes', 'Culture', 'Adventures', 'Wildlife'];

// Import high-quality images from Unsplash with proper parameters
const images = [
  {
    src: 'https://www.lanka-excursions-holidays.com/uploads/4/0/2/1/40216937/meemure-dscf8003-1200_orig.jpg',
    category: 'Landscapes',
    title: 'Meemure Valley',
  },
  {
    src: 'https://nexttravelsrilanka.com/wp-content/uploads/2023/02/Meemure.jpg',
    category: 'Landscapes',
    title: 'Mountain Waterfall',
  },
  {
    src: 'https://overatours.com/wp-content/uploads/2021/10/Camping-and-trekking-in-Meeure-Sri-Lanka.jpg',
    category: 'Culture',
    title: 'Village Life',
  },
  {
    src: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/23/46/65.jpg',
    category: 'Landscapes',
    title: 'Sunrise at Knuckles',
  },
  {
    src: 'https://images.ctfassets.net/2ctencdtf9g8/5wCzedtivSuBwbbXayWKTz/662573362eefff2ce36633388042df76/meemure2-5.webp',
    category: 'Wildlife',
    title: 'Local Wildlife',
  },
  {
    src: 'https://www.pelago.com/img/products/LK-Sri%20Lanka/camping-in-meemure/9c471faf-03c8-47c3-872e-dbd22894bfef_camping-in-meemure.jpg',
    category: 'Adventures',
    title: 'Hiking Trail',
  },
  {
    src: 'https://overatours.com/wp-content/uploads/2022/02/Hiking-in-Corbets-Gap-Knuckle-Mountain-Range.jpg',
    category: 'Landscapes',
    title: 'Mountain Range',
  },
  {
    src: 'https://www.lakpura.com/images/LK94009793-03-E.JPG',
    category: 'Culture',
    title: 'Traditional Life',
  },
  {
    src: 'https://touristdirectory.lk/assets/img/article/cover/wasgamuwa-national-park-sanctuary-cover.jpg',
    category: 'Wildlife',
    title: 'Bird Watching',
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = images.filter(
    img => selectedCategory === 'All' || img.category === selectedCategory
  );

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-16 pb-4  md:pt-32 md:pb-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Gallery</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the breathtaking beauty of Meemure through our lens
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-emerald-50'
                } transition-all duration-300`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((img, index) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg shadow-lg group"
                  onClick={() => setSelectedImage(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-semibold text-white">{img.title}</h3>
                      <p className="text-sm text-gray-200">{img.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;