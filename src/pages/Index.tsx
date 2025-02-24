
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Clients from '@/components/Clients';
import VideoSection from '@/components/VideoSection';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Clients />
        <VideoSection />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
