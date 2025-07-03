import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'motorsports', name: 'Motorsports' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'portraits', name: 'Portraits' }
  ];

  const portfolio = [
    {
      id: 1,
      category: 'weddings',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Desert Elopement',
      location: 'Joshua Tree, CA',
      gear: 'Canon R5 • 85mm f/1.4'
    },
    {
      id: 2,
      category: 'motorsports',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Track Day Rush',
      location: 'Laguna Seca, CA',
      gear: 'Canon R6 • 70-200mm f/2.8'
    },
    {
      id: 3,
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Tech Conference',
      location: 'San Francisco, CA',
      gear: 'Canon R5 • 24-70mm f/2.8'
    },
    {
      id: 4,
      category: 'portraits',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Rider Portrait',
      location: 'Malibu, CA',
      gear: 'Canon R5 • 135mm f/2'
    },
    {
      id: 5,
      category: 'weddings',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Garden Wedding',
      location: 'Napa Valley, CA',
      gear: 'Canon R6 • 50mm f/1.2'
    },
    {
      id: 6,
      category: 'motorsports',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Custom Build',
      location: 'Garage Sessions',
      gear: 'Canon R5 • 35mm f/1.4'
    },
    {
      id: 7,
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Executive Team',
      location: 'Los Angeles, CA',
      gear: 'Canon R6 • 85mm f/1.8'
    },
    {
      id: 8,
      category: 'portraits',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Adventure Portrait',
      location: 'Big Sur, CA',
      gear: 'Canon R5 • 24-105mm f/4'
    },
    {
      id: 9,
      category: 'weddings',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Sunset Ceremony',
      location: 'Santa Barbara, CA',
      gear: 'Canon R6 • 70-200mm f/2.8'
    }
  ];

  const filteredPortfolio = selectedCategory === 'all' 
    ? portfolio 
    : portfolio.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-16 min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-bebas text-5xl md:text-7xl tracking-wider text-white mb-4">
            Portfolio
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A curated collection of moments that define my journey as a photographer. 
            Each image tells a story of adventure, emotion, and authentic connection.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-amber-500 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredPortfolio.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer bg-gray-800"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-square">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-amber-400 text-sm">{item.location}</p>
                  <p className="text-gray-300 text-xs mt-1">{item.gear}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for selected image */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute bottom-4 left-4 text-white bg-black/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-xl">{selectedImage.title}</h3>
                  <p className="text-amber-400">{selectedImage.location}</p>
                  <p className="text-gray-300 text-sm mt-1">{selectedImage.gear}</p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Portfolio;