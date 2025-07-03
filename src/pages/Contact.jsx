import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiSend } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you within 24 hours.');
  };

  const eventTypes = [
    'Wedding',
    'Elopement',
    'Corporate Event',
    'Portrait Session',
    'Motorcycle Shoot',
    'Brand Photography',
    'Other'
  ];

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
            Let's Create Something Epic
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to capture your story? Let's discuss how we can bring your vision to life. 
            Every great adventure starts with a conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            <h2 className="font-bebas text-3xl text-white tracking-wider mb-6">
              Start Your Journey
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Event Type *</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Event Date</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                    placeholder="City, State"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Tell me about your vision</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors resize-none"
                  placeholder="Share your story, style preferences, or any special requests..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <SafeIcon icon={FiSend} className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="font-bebas text-2xl text-white tracking-wider mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-amber-500 rounded-full">
                    <SafeIcon icon={FiMail} className="text-black" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">hello@brianmitchell.photo</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-amber-500 rounded-full">
                    <SafeIcon icon={FiPhone} className="text-black" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">+1 (555) 123-RIDE</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-amber-500 rounded-full">
                    <SafeIcon icon={FiMapPin} className="text-black" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Based in</p>
                    <p className="text-white">Los Angeles, California</p>
                    <p className="text-gray-400 text-sm">Available for travel worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="font-bebas text-2xl text-white tracking-wider mb-4">
                Response Time
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I typically respond to all inquiries within 24 hours. For urgent requests 
                or same-week bookings, please call directly. I'm always excited to hear 
                about new adventures and would love to be part of your story.
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="font-bebas text-2xl text-white tracking-wider mb-6">
                Follow the Journey
              </h3>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-gray-700 rounded-full text-gray-400 hover:text-amber-400 hover:bg-gray-600 transition-colors duration-200"
                >
                  <SafeIcon icon={FiInstagram} className="text-xl" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-gray-700 rounded-full text-gray-400 hover:text-amber-400 hover:bg-gray-600 transition-colors duration-200"
                >
                  <SafeIcon icon={FiFacebook} className="text-xl" />
                </motion.a>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                @brianmitchellphoto - Follow for behind-the-scenes content, 
                recent work, and motorcycle adventures.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;