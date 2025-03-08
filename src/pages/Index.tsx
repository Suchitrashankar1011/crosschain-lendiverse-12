
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Networks from '@/components/Networks';
import HowItWorks from '@/components/HowItWorks';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { setupIntersectionObservers } from '@/lib/animation';

const Index = () => {
  useEffect(() => {
    // Setup animation observers
    const cleanupObservers = setupIntersectionObservers();
    
    // Add scroll event for parallax effects
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '0.5';
        (element as HTMLElement).style.transform = `translateY(${scrollPosition * parseFloat(speed)}px)`;
      });

      // Update navbar background on scroll
      const navbar = document.getElementById('main-navbar');
      if (navbar) {
        if (scrollPosition > 50) {
          navbar.classList.add('bg-lending-dark/95', 'backdrop-blur-md', 'shadow-md');
          navbar.classList.remove('bg-transparent');
        } else {
          navbar.classList.remove('bg-lending-dark/95', 'backdrop-blur-md', 'shadow-md');
          navbar.classList.add('bg-transparent');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      cleanupObservers();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-lending-dark text-white overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col">
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lending-primary/10 via-transparent to-transparent z-[-1] opacity-70 pointer-events-none"></div>
        
        {/* Main content with horizontal scroll sections */}
        <div className="snap-x snap-mandatory md:flex md:flex-row md:h-screen md:overflow-x-auto overflow-y-auto">
          <section className="snap-start min-w-full md:h-screen flex items-center justify-center">
            <Hero />
          </section>
          
          <section className="snap-start min-w-full md:h-screen flex items-center justify-center">
            <Features />
          </section>
          
          <section className="snap-start min-w-full md:h-screen flex items-center justify-center">
            <Networks />
          </section>
          
          <section className="snap-start min-w-full md:h-screen flex items-center justify-center">
            <HowItWorks />
          </section>
          
          <section className="snap-start min-w-full md:h-screen flex items-center justify-center">
            <CTA />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
