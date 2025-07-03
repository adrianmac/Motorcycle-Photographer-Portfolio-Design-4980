import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiInstagram, FiFacebook, FiMail, FiPhone, FiCamera } = FiIcons;

const Footer = () => {
  const [vroomCount, setVroomCount] = useState(0);

  useEffect(() => {
    const handleKeyPress = (e) => {
      const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
      if (keys.includes(e.key)) {
        setVroomCount(prev => prev + 1);
        if (vroomCount >= 3) {
          // Easter egg trigger
          const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoIK3zL8N2QQAoUXrTp66hVFApGn+DyvGUYBSuO1/LNeyoI');
          console.log('🏍️ VROOM VROOM! 🏍️');
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [vroomCount]);

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <motion.div
                animate={vroomCount > 3 ? { rotate: [0, 10, -10, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                <SafeIcon icon={FiCamera} className="text-2xl text-amber-400" />
              </motion.div>
              <span className="font-bebas text-xl tracking-wider">Brian Mitchell</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Capturing life in motion through the lens of adventure. 
              Specializing in authentic moments that move you.
            </p>
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <span className="px-2 py-1 bg-gray-800 rounded">Member of MPA</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bebas text-lg tracking-wider text-amber-400">Get In Touch</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-400">
                <SafeIcon icon={FiMail} className="text-amber-400" />
                <span className="text-sm">hello@brianmitchell.photo</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <SafeIcon icon={FiPhone} className="text-amber-400" />
                <span className="text-sm">+1 (555) 123-RIDE</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-bebas text-lg tracking-wider text-amber-400">Follow the Journey</h3>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-amber-400 hover:bg-gray-700 transition-colors duration-200"
              >
                <SafeIcon icon={FiInstagram} className="text-lg" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-amber-400 hover:bg-gray-700 transition-colors duration-200"
              >
                <SafeIcon icon={FiFacebook} className="text-lg" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Brian Mitchell Photography. All rights reserved. | Framing Your Journey
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Try using arrow keys for a surprise 🏍️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;