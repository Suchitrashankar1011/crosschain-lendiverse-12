
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Coins } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const Hero = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      window.scrollTo({
        top: featuresSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pt-28 pb-16 md:pt-40 md:pb-32 min-h-screen flex items-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="flex flex-col space-y-6 md:w-1/2 md:pr-10 animate-fade-in-right">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-foreground">Unlock</span><br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--lending-primary)] via-[var(--lending-secondary)] to-[var(--lending-accent)] animate-bg-shift">
              Boundless Finance
            </span>
          </h1>
          <p className="text-lg text-muted-foreground md:pr-10">
            Break free from single-chain limitations. Connect, lend, and grow across all networks.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Button 
              className="bg-gradient-to-r from-[var(--lending-primary)] to-[var(--lending-secondary)] hover:opacity-90 transition-all duration-300 text-white flex items-center gap-2 px-6 py-6 hover:translate-x-1"
              onClick={() => {
                toast({
                  title: "Coming Soon",
                  description: "The app is currently under development. Stay tuned!",
                });
              }}
            >
              Launch App
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2 px-6 py-6 border-border bg-card/50 text-foreground hover:bg-primary/10 transition-all duration-300"
              onClick={scrollToFeatures}
            >
              <Coins className="h-4 w-4 text-[var(--lending-primary)]" />
              Discover
            </Button>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 mt-10 md:mt-0 animate-fade-in-up">
          <div className="relative rounded-lg overflow-hidden shadow-xl animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--lending-primary)]/20 to-[var(--lending-secondary)]/20 opacity-90"></div>
            <div className="relative p-8 z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-glass p-4 rounded-lg hover-lift transition-all duration-300">
                  <h3 className="font-semibold mb-1 text-foreground">Optimize</h3>
                  <p className="text-sm text-muted-foreground">5.2% APY</p>
                </div>
                <div className="bg-glass p-4 rounded-lg hover-lift transition-all duration-300">
                  <h3 className="font-semibold mb-1 text-foreground">Leverage</h3>
                  <p className="text-sm text-muted-foreground">3.1% Interest</p>
                </div>
                <div className="bg-glass p-4 rounded-lg col-span-2 hover-lift transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-foreground">Flow</h3>
                      <p className="text-sm text-muted-foreground">Cross-Chain Transfer</p>
                    </div>
                    <div className="animate-pulse-slow bg-[var(--lending-accent)] rounded-full h-3 w-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
