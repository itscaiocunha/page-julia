import Head from 'next/head';
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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <style>
          {`
            body {
              font-family: 'Roboto', sans-serif;
            }
          `}
        </style>
      </Head>
      
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