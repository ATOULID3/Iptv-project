import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HomePage/HeroSection';
import PricingSection from '../components/HomePage/PricingSection';
import ContentShowcase from '../components/HomePage/ContentShowcase';
import PremiumFeatures from '../components/HomePage/PremiumFeatures';
import LiveSportsSection from '../components/HomePage/LiveSportsSection';
import TestimonialsSection from '../components/HomePage/TestimonialsSection';
import FAQSection from '../components/HomePage/FAQSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IPTV Pro - Premium IPTV Streaming Service</title>
        <meta name="description" content="Experience premium IPTV streaming with thousands of channels in HD/4K quality. Reliable, fast, and available on all your devices." />
        <meta name="keywords" content="IPTV, streaming, TV channels, HD, 4K, premium" />
      </Helmet>

      <HeroSection />
      <ContentShowcase />
      <PremiumFeatures />
      <LiveSportsSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
};

export default HomePage;