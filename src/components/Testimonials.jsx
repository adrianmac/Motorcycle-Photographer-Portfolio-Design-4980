import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar } = FiIcons;

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah & Mike Johnson',
      event: 'Desert Wedding',
      text: 'Brian captured our love story with such authenticity. His motorcycle background brought a unique edge to our desert wedding photos that we absolutely love.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      event: 'Corporate Headshots',
      text: 'Professional, creative, and incredibly skilled. Brian understood exactly what we needed for our executive portraits. The results exceeded expectations.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Lisa Chen',
      event: 'Adventure Elopement',
      text: 'We wanted something different for our elopement, and Brian delivered beyond our wildest dreams. His adventurous spirit matched ours perfectly.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We discuss your vision, style preferences, and event details over coffee or a call.'
    },
    {
      step: '02',
      title: 'Ride Along',
      description: 'I become part of your journey, capturing authentic moments as they unfold naturally.'
    },
    {
      step: '03',
      title: 'Delivery',
      description: 'Receive your professionally edited gallery within 2-3 weeks, ready to relive forever.'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-4xl md:text-6xl tracking-wider text-white mb-4">
            Client Stories
          </h2>
          <p className="text-xl text-gray-400">
            What people say about the journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg relative"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-amber-400 text-sm">{testimonial.event}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-4xl md:text-6xl tracking-wider text-white mb-4">
            Your Journey
          </h2>
          <p className="text-xl text-gray-400">
            How we create magic together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 text-black font-bebas text-2xl rounded-full mb-6">
                {step.step}
              </div>
              <h3 className="font-bebas text-2xl text-white mb-4 tracking-wider">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-amber-500 to-transparent transform -translate-x-8" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;