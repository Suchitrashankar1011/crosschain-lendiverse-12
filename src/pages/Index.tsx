
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Networks from '@/components/Networks';
import HowItWorks from '@/components/HowItWorks';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { setupIntersectionObservers } from '@/lib/animation';
import { ThemeProvider } from '@/contexts/ThemeContext';

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
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Add animation classes to elements when they enter viewport
    const animateOnScroll = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.animate-on-scroll-element').forEach((el) => {
      animateOnScroll.observe(el);
    });
    
    return () => {
      cleanupObservers();
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('.animate-on-scroll-element').forEach((el) => {
        animateOnScroll.unobserve(el);
      });
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
        {/* Enhanced background elements */}
        <div className="fixed inset-0 z-[-2] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lending-primary/10 via-transparent to-transparent opacity-70 pointer-events-none dark:opacity-70 light:opacity-30"></div>
        
        {/* Moving particles for modern effect */}
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-lending-primary/5 animate-pulse-slow parallax" data-speed="0.03"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full bg-lending-secondary/5 animate-pulse-slow parallax" data-speed="0.05" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-3/4 w-72 h-72 rounded-full bg-lending-accent/5 animate-pulse-slow parallax" data-speed="0.07" style={{animationDelay: '2s'}}></div>
        </div>
        
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Networks />
          <HowItWorks />
          <CTA />
        </main>
        <Footer />
        
        {/* Modern scrolling indicator */}
        <div className="fixed bottom-8 right-8 z-50 dark:bg-lending-card/80 light:bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg border dark:border-lending-primary/20 light:border-indigo-200 opacity-80 hover:opacity-100 transition-all duration-300">
          <div className="w-1 h-12 dark:bg-lending-dark light:bg-gray-200 rounded-full overflow-hidden">
            <div className="w-full dark:bg-lending-primary light:bg-indigo-500 rounded-full animate-pulse-slow" style={{
              height: `${Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100, 100)}%`,
              transition: 'height 0.3s ease-out'
            }}></div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
