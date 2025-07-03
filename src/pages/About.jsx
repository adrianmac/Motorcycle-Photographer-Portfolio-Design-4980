import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
            About Brian
          </h1>
          <p className="text-xl text-gray-400">
            The story behind the lens
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Brian Mitchell"
              className="w-full h-96 object-cover rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="font-bebas text-3xl text-amber-400 tracking-wider">
              Photographer by Day, Rider by Choice
            </h2>
            <p className="text-gray-300 leading-relaxed">
              My journey with photography began on the open road. Every mile taught me patience, 
              every curve showed me new angles, and every sunset reminded me why I fell in love 
              with capturing light. What started as documenting my rides evolved into a passion 
              for storytelling through the lens.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Today, I bring that same spirit of adventure to every shoot. Whether it's an 
              intimate wedding in the desert, a corporate event in the city, or a portrait 
              session by the coast, I approach each moment with the anticipation and respect 
              for timing that the road has taught me.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Based in California, I specialize in authentic moments that move you. My work 
              has been featured in motorcycle magazines, wedding publications, and corporate 
              campaigns. But at the end of the day, it's about the stories we tell and the 
              memories we preserve.
            </p>
          </motion.div>
        </div>

        {/* Motorcycle Passion Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-bebas text-4xl text-center text-white mb-12 tracking-wider">
            Why Wheels & Lenses Belong Together
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                title: 'Chrome Dreams',
                location: 'Garage Sessions'
              },
              {
                image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                title: 'Desert Runner',
                location: 'Mojave, CA'
              },
              {
                image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                title: 'Coast Cruiser',
                location: 'PCH, CA'
              },
              {
                image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                title: 'Mountain Pass',
                location: 'Angeles Forest'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-amber-400 text-sm">{item.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-300 text-lg leading-relaxed">
              "The road doesn't lie. It strips away everything unnecessary and shows you what really matters. 
              That's what I bring to every photograph—the raw truth of the moment, captured with the patience 
              and precision that only comes from understanding motion, timing, and the beauty of the journey itself."
            </p>
            <p className="text-amber-400 mt-4 font-semibold">— Brian Mitchell</p>
          </div>
        </motion.div>

        {/* Awards & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <h2 className="font-bebas text-3xl text-white mb-8 tracking-wider">
            Recognition & Memberships
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-amber-400 font-semibold mb-2">Professional Photographers of America</h3>
              <p className="text-gray-400 text-sm">Certified Member</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-amber-400 font-semibold mb-2">Motorcycle Photography Association</h3>
              <p className="text-gray-400 text-sm">Board Member</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-amber-400 font-semibold mb-2">Wedding Wire</h3>
              <p className="text-gray-400 text-sm">Couples' Choice Award 2024</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;