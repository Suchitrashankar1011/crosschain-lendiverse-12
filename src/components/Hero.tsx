
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
    <div className="pt-28 pb-16 md:pt-40 md:pb-32 bg-lending-darker dark:bg-lending-darker light:bg-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="flex flex-col space-y-6 md:w-1/2 md:pr-10 animate-fade-in-right">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white dark:text-white light:text-lending-dark">Borrow & Lend</span><br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lending-primary via-lending-secondary to-lending-accent animate-bg-shift">
              Across Blockchains
            </span>
          </h1>
          <p className="text-lg text-gray-300 dark:text-gray-300 light:text-gray-600 md:pr-10">
            LenDiverse enables seamless lending and borrowing across multiple blockchain networks, 
            enhancing DeFi liquidity and capital efficiency.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Button 
              className="bg-gradient-to-r from-lending-primary to-lending-secondary hover:opacity-90 transition-all duration-300 text-white flex items-center gap-2 px-6 py-6 hover:translate-x-1"
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
              className="flex items-center gap-2 px-6 py-6 border-lending-border bg-lending-dark/60 text-white dark:text-white light:text-lending-dark dark:bg-lending-dark/60 light:bg-white hover:bg-lending-primary/20 transition-all duration-300"
              onClick={scrollToFeatures}
            >
              <Coins className="h-4 w-4 text-lending-primary" />
              Learn More
            </Button>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 mt-10 md:mt-0 animate-fade-in-up">
          <div className="relative rounded-lg overflow-hidden shadow-xl animate-float">
            <div className="absolute inset-0 bg-hero-dark dark:bg-hero-dark light:bg-gradient-to-r light:from-slate-100 light:to-lending-primary/10 opacity-90"></div>
            <div className="relative p-8 text-white dark:text-white light:text-lending-dark z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="backdrop-blur-md p-4 rounded-lg border border-white/10 dark:bg-glass dark:border-white/10 light:bg-white light:border-gray-200 light:shadow-md hover:border-lending-primary/50 transition-all duration-300 hover:scale-105">
                  <h3 className="font-semibold mb-1">Deposit on Optimism</h3>
                  <p className="text-sm opacity-90">Secure 5.2% APY</p>
                </div>
                <div className="backdrop-blur-md p-4 rounded-lg border border-white/10 dark:bg-glass dark:border-white/10 light:bg-white light:border-gray-200 light:shadow-md hover:border-lending-primary/50 transition-all duration-300 hover:scale-105">
                  <h3 className="font-semibold mb-1">Borrow on Base</h3>
                  <p className="text-sm opacity-90">Only 3.1% Interest</p>
                </div>
                <div className="backdrop-blur-md p-4 rounded-lg border border-white/10 dark:bg-glass dark:border-white/10 light:bg-white light:border-gray-200 light:shadow-md col-span-2 hover:border-lending-primary/50 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Cross-Chain Transfer</h3>
                      <p className="text-sm opacity-90">Optimism → Arbitrum</p>
                    </div>
                    <div className="animate-pulse-slow bg-lending-accent rounded-full h-3 w-3"></div>
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
