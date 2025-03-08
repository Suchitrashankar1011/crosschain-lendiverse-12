
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
    <div className="pt-28 pb-16 md:pt-40 md:pb-32 min-h-screen flex items-center transition-colors duration-300 dark:bg-lending-darker light:bg-gray-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="flex flex-col space-y-6 md:w-1/2 md:pr-10 animate-fade-in-right">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="dark:text-white light:text-gray-800 transition-colors duration-300">Borrow & Lend</span><br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lending-primary via-lending-secondary to-lending-accent animate-bg-shift">
              Across Blockchains
            </span>
          </h1>
          <p className="text-lg dark:text-gray-300 light:text-gray-600 md:pr-10 transition-colors duration-300">
            Reimagine finance with seamless cross-chain liquidity, unlocking DeFi's true potential.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Button 
              className="gradient-primary hover:opacity-90 transition-all duration-300 text-white flex items-center gap-2 px-6 py-6 hover:translate-x-1"
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
              className="flex items-center gap-2 px-6 py-6 dark:border-lending-border dark:bg-lending-dark/60 dark:text-white light:bg-white light:text-gray-800 light:border-gray-200 hover:bg-lending-primary/20 transition-all duration-300"
              onClick={scrollToFeatures}
            >
              <Coins className="h-4 w-4 text-lending-primary" />
              Learn More
            </Button>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 mt-10 md:mt-0 animate-fade-in-up">
          <div className="relative rounded-lg overflow-hidden shadow-xl animate-float">
            <div className="absolute inset-0 dark:bg-hero-dark light:bg-gradient-to-br light:from-white light:to-lending-primary/20 opacity-90 transition-colors duration-300"></div>
            <div className="relative p-8 z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="dark:bg-glass light:bg-white p-4 rounded-lg dark:hover:border-lending-primary/50 light:border-2 light:border-indigo-300 light:hover:border-indigo-500 transition-all duration-300 hover:scale-105 shadow-md">
                  <h3 className="font-semibold mb-1 dark:text-white light:text-gray-800">Deposit on Optimism</h3>
                  <p className="text-sm dark:text-gray-300 light:text-gray-600">Secure 5.2% APY</p>
                </div>
                <div className="dark:bg-glass light:bg-white p-4 rounded-lg dark:hover:border-lending-primary/50 light:border-2 light:border-indigo-300 light:hover:border-indigo-500 transition-all duration-300 hover:scale-105 shadow-md">
                  <h3 className="font-semibold mb-1 dark:text-white light:text-gray-800">Borrow on Base</h3>
                  <p className="text-sm dark:text-gray-300 light:text-gray-600">Only 3.1% Interest</p>
                </div>
                <div className="dark:bg-glass light:bg-white p-4 rounded-lg col-span-2 dark:hover:border-lending-primary/50 light:border-2 light:border-indigo-300 light:hover:border-indigo-500 transition-all duration-300 hover:scale-105 shadow-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold dark:text-white light:text-gray-800">Cross-Chain Transfer</h3>
                      <p className="text-sm dark:text-gray-300 light:text-gray-600">Optimism → Arbitrum</p>
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
