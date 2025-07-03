import React from 'react';
import { motion } from 'framer-motion';

const DualPassion = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-4xl md:text-6xl tracking-wider text-white mb-4">
            Storyteller Behind the Lens
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Photographer by day, rider by choice. Specializing in authentic moments that move you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Motorcycle Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Motorcycle detail shot"
                className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm text-amber-400">Desert Ride, AZ</p>
              <p className="font-semibold">Chrome & Freedom</p>
            </div>
          </motion.div>

          {/* Event Photography Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Wedding photography"
                className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm text-amber-400">Smith Wedding</p>
              <p className="font-semibold">First Dance Magic</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="font-bebas text-3xl text-amber-400 mb-6 tracking-wider">
              Why Wheels & Lenses Belong Together
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              The road teaches you to anticipate the perfect moment. Every curve demands the right angle, 
              every mile builds patience for that one shot that captures pure emotion. My motorcycle isn't 
              just transportation—it's my classroom for understanding motion, timing, and the beauty of fleeting moments.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DualPassion;