import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiZap, FiBriefcase, FiUser, FiDownload } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiHeart,
      title: 'Adventure Elopements',
      description: 'Riding-themed weddings and intimate ceremonies in breathtaking locations',
      features: [
        'Intimate desert ceremonies',
        'Motorcycle-themed shoots',
        'Destination elopements',
        'Custom route planning'
      ],
      startingPrice: '$2,500'
    },
    {
      icon: FiZap,
      title: 'Moto-Brand Photography',
      description: 'Commercial photography for bike shops, gear brands, and motorcycle companies',
      features: [
        'Product photography',
        'Lifestyle campaigns',
        'Brand storytelling',
        'Social media content'
      ],
      startingPrice: '$1,800'
    },
    {
      icon: FiBriefcase,
      title: 'Event Storytelling',
      description: 'Corporate events, galas, and professional gatherings captured with cinematic flair',
      features: [
        'Conference coverage',
        'Executive portraits',
        'Team building events',
        'Award ceremonies'
      ],
      startingPrice: '$1,200'
    },
    {
      icon: FiUser,
      title: 'Portrait Sessions',
      description: 'Individual and group portraits that capture authentic personality and style',
      features: [
        'Professional headshots',
        'Creative portraits',
        'Family sessions',
        'Rider portraits'
      ],
      startingPrice: '$800'
    }
  ];

  const packages = [
    {
      name: 'Essential',
      price: '$800',
      duration: '2 hours',
      photos: '25-30 edited photos',
      features: [
        'Pre-session consultation',
        'Professional editing',
        'Online gallery',
        'Print release'
      ]
    },
    {
      name: 'Adventure',
      price: '$1,500',
      duration: '4 hours',
      photos: '60-75 edited photos',
      features: [
        'Location scouting',
        'Wardrobe consultation',
        'Premium editing',
        'USB drive delivery',
        'Print credits included'
      ],
      popular: true
    },
    {
      name: 'Epic Journey',
      price: '$2,800',
      duration: '8 hours',
      photos: '150+ edited photos',
      features: [
        'Full day coverage',
        'Multiple locations',
        'Cinematic editing',
        'Custom photo album',
        'Engagement session included'
      ]
    }
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
            Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From intimate elopements to corporate events, I bring the spirit of adventure 
            and authentic storytelling to every project.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-lg group hover:bg-gray-750 transition-colors duration-200"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-amber-500 rounded-full mr-4">
                  <SafeIcon icon={service.icon} className="text-2xl text-black" />
                </div>
                <div>
                  <h3 className="font-bebas text-2xl text-white tracking-wider">
                    {service.title}
                  </h3>
                  <p className="text-amber-400 font-semibold">
                    Starting at {service.startingPrice}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-400 flex items-center">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Pricing Packages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-6xl tracking-wider text-white mb-4">
              Investment Packages
            </h2>
            <p className="text-xl text-gray-400">
              Choose the adventure that fits your story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className={`relative bg-gray-800 p-8 rounded-lg ${
                  pkg.popular ? 'ring-2 ring-amber-500 transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-amber-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-bebas text-2xl text-white tracking-wider mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold text-amber-400 mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-gray-400">{pkg.duration}</p>
                  <p className="text-gray-400">{pkg.photos}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition-all duration-200 ${
                  pkg.popular
                    ? 'bg-amber-500 text-black hover:bg-amber-600'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  Choose {pkg.name}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Add-ons & Extras */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-bebas text-3xl text-white tracking-wider mb-4">
              Add-Ons & Extras
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Second Shooter', price: '+$400' },
              { name: 'Drone Coverage', price: '+$300' },
              { name: 'Rush Delivery (48hrs)', price: '+$200' },
              { name: 'Custom Photo Album', price: '+$350' }
            ].map((addon, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-white font-semibold mb-2">{addon.name}</h3>
                <p className="text-amber-400 font-bold">{addon.price}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Download Pricing Guide */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center bg-gray-800 p-12 rounded-lg"
        >
          <h2 className="font-bebas text-3xl text-white tracking-wider mb-4">
            Need More Details?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Download our complete pricing guide with detailed package information, 
            add-on options, and frequently asked questions.
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full transition-colors duration-200 transform hover:scale-105">
            <SafeIcon icon={FiDownload} className="mr-2" />
            Download Pricing Guide
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;