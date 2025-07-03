import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FeaturedWork = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Desert Elopement',
      location: 'Joshua Tree, CA'
    },
    {
      id: 2,
      category: 'motorsports',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Track Day Rush',
      location: 'Laguna Seca, CA'
    },
    {
      id: 3,
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Tech Conference',
      location: 'San Francisco, CA'
    },
    {
      id: 4,
      category: 'portraits',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Rider Portrait',
      location: 'Malibu, CA'
    },
    {
      id: 5,
      category: 'weddings',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Garden Wedding',
      location: 'Napa Valley, CA'
    },
    {
      id: 6,
      category: 'motorsports',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Custom Build',
      location: 'Garage Sessions'
    }
  ];

  const filteredPortfolio = selectedCategory === 'all' 
    ? portfolio 
    : portfolio.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-4xl md:text-6xl tracking-wider text-white mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-gray-400">
            A collection of moments that define my journey
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-amber-500 text-black'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                className="group relative overflow-hidden rounded-lg cursor-pointer"
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
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-semibold rounded-full transition-all duration-200 transform hover:scale-105">
            View Full Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork;