import React from 'react';
import Hero from '../components/Hero';
import DualPassion from '../components/DualPassion';
import FeaturedWork from '../components/FeaturedWork';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <DualPassion />
      <FeaturedWork />
      <Testimonials />
    </div>
  );
};

export default Home;