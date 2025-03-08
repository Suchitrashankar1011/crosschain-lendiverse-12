
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Networks from '@/components/Networks';
import HowItWorks from '@/components/HowItWorks';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { setupIntersectionObservers, setupMouseParallax } from '@/lib/animation';
import { ThemeProvider } from '@/contexts/ThemeContext';

const Index = () => {
  useEffect(() => {
    // Setup animation observers
    const cleanupObservers = setupIntersectionObservers();
    
    // Setup mouse parallax for floating elements
    const cleanupMouseParallax = setupMouseParallax();
    
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
            
            // Animate circuit lines when visible
            const lines = entry.target.querySelectorAll('.circuit-line');
            lines.forEach((line, index) => {
              setTimeout(() => {
                (line as HTMLElement).style.opacity = '1';
                (line as HTMLElement).style.width = '100%';
              }, index * 150);
            });
            
            // Animate circuit dots when visible
            const dots = entry.target.querySelectorAll('.circuit-dot');
            dots.forEach((dot, index) => {
              setTimeout(() => {
                (dot as HTMLElement).style.opacity = '1';
                (dot as HTMLElement).style.transform = 'scale(1)';
              }, index * 100 + 300);
            });
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
      cleanupMouseParallax();
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
        
        {/* Circuit board background pattern */}
        <div className="fixed inset-0 z-[-2] pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Horizontal lines */}
            <div className="absolute top-[10%] left-0 w-full h-px dark:bg-lending-primary/10 light:bg-indigo-300/10"></div>
            <div className="absolute top-[30%] left-0 w-full h-px dark:bg-lending-primary/10 light:bg-indigo-300/10"></div>
            <div className="absolute top-[50%] left-0 w-full h-px dark:bg-lending-primary/10 light:bg-indigo-300/10"></div>
            <div className="absolute top-[70%] left-0 w-full h-px dark:bg-lending-primary/10 light:bg-indigo-300/10"></div>
            <div className="absolute top-[90%] left-0 w-full h-px dark:bg-lending-primary/10 light:bg-indigo-300/10"></div>
            
            {/* Vertical lines */}
            <div className="absolute top-0 left-[10%] w-px h-full dark:bg-lending-primary/10 light:bg-indigo-300/10"></div>
            <div className="absolute top-0 left-[30%] w-px h-full dark:bg-lending-primary/10 light:bg-indigo-300/10"></div>
            <div className="absolute top-0 left-[50%] w-px h-full dark:bg-lending-primary/10 light:bg-indigo-300/10"></div>
            <div className="absolute top-0 left-[70%] w-px h-full dark:bg-lending-primary/10 light:bg-indigo-300/10"></div>
            <div className="absolute top-0 left-[90%] w-px h-full dark:bg-lending-primary/10 light:bg-indigo-300/10"></div>
            
            {/* Connection dots */}
            <div className="absolute top-[10%] left-[10%] w-2 h-2 rounded-full dark:bg-lending-primary/10 light:bg-indigo-300/20"></div>
            <div className="absolute top-[30%] left-[30%] w-2 h-2 rounded-full dark:bg-lending-primary/10 light:bg-indigo-300/20"></div>
            <div className="absolute top-[50%] left-[50%] w-2 h-2 rounded-full dark:bg-lending-primary/10 light:bg-indigo-300/20"></div>
            <div className="absolute top-[70%] left-[70%] w-2 h-2 rounded-full dark:bg-lending-primary/10 light:bg-indigo-300/20"></div>
            <div className="absolute top-[90%] left-[90%] w-2 h-2 rounded-full dark:bg-lending-primary/10 light:bg-indigo-300/20"></div>
          </div>
        </div>
        
        {/* Moving particles for modern effect */}
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-lending-primary/5 animate-pulse-slow parallax" data-speed="0.03"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full bg-lending-secondary/5 animate-pulse-slow parallax" data-speed="0.05" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-3/4 w-72 h-72 rounded-full bg-lending-accent/5 animate-pulse-slow parallax" data-speed="0.07" style={{animationDelay: '2s'}}></div>
          
          {/* Animated geometric elements */}
          <div className="absolute top-1/3 right-1/5 w-24 h-24 border border-lending-primary/20 rounded mouse-parallax" data-speed="0.02"></div>
          <div className="absolute bottom-1/3 left-1/5 w-32 h-32 border border-lending-secondary/20 rounded-full mouse-parallax" data-speed="0.03"></div>
          
          {/* Interactive elements that respond to scroll */}
          <div className="absolute top-1/4 right-1/3 circuit-dot w-3 h-3 rounded-full dark:bg-lending-primary/30 light:bg-indigo-400/30 animate-on-scroll-element" style={{opacity: 0, transform: 'scale(0)', transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'}}></div>
          <div className="absolute bottom-1/4 left-1/3 circuit-dot w-3 h-3 rounded-full dark:bg-lending-secondary/30 light:bg-blue-400/30 animate-on-scroll-element" style={{opacity: 0, transform: 'scale(0)', transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)', transitionDelay: '0.2s'}}></div>
          
          {/* Circuit board connections */}
          <div className="absolute top-1/4 right-1/3 circuit-line h-px dark:bg-lending-primary/20 light:bg-indigo-400/20 animate-on-scroll-element" style={{width: 0, opacity: 0, transition: 'all 0.8s ease'}}></div>
          <div className="absolute bottom-1/4 left-1/3 circuit-line h-px dark:bg-lending-secondary/20 light:bg-blue-400/20 animate-on-scroll-element" style={{width: 0, opacity: 0, transition: 'all 0.8s ease', transitionDelay: '0.3s'}}></div>
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
        <div className="fixed bottom-8 right-8 z-50 dark:bg-lending-card/80 light:bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg border dark:border-lending-primary/20 light:border-indigo-200 opacity-80 hover:opacity-100 transition-all duration-300 hover-glow">
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
