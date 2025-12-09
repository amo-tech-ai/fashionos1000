import React from 'react';
import { Hero } from '../components/Hero';
import { Campaigns } from '../components/Campaigns';
import { About, AboutHeritage } from '../components/About';
import { DarkFeature, Testimonial, BTS, CallToAction } from '../components/Features';
import { Services, Directory, Marketplace } from '../components/Lists';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Campaigns />
      <About />
      <AboutHeritage />
      <DarkFeature />
      <Testimonial />
      <Services />
      <Directory />
      <Marketplace />
      <BTS />
      <CallToAction />
    </>
  );
};

export default Home;