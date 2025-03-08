
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Coins, Zap, BarChart3 } from 'lucide-react';
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
    <div className="pt-20 pb-12 md:pt-32 md:pb-24 min-h-screen flex items-center transition-colors duration-300 dark:bg-lending-darker light:bg-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-lending-primary/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-lending-accent/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-lending-secondary/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
        <div className="flex flex-col space-y-6 md:w-1/2 md:pr-10 animate-fade-in-right">
          <div className="inline-flex items-center px-4 py-2 rounded-full dark:bg-lending-primary/20 light:bg-indigo-100 border dark:border-lending-primary/30 light:border-indigo-300 mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Zap className="h-4 w-4 mr-2 text-lending-primary" />
            <span className="text-sm font-medium dark:text-white light:text-gray-800">Next generation DeFi platform</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <span className="dark:text-white light:text-gray-800 transition-colors duration-300">Borrow & Lend</span><br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lending-primary via-lending-secondary to-lending-accent animate-bg-shift">
              Across Blockchains
            </span>
          </h1>
          
          <p className="text-lg dark:text-gray-300 light:text-gray-600 md:pr-10 transition-colors duration-300 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            Reimagine finance with seamless cross-chain liquidity, unlocking DeFi's true potential with lightning-fast transactions and best-in-class security.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <Button 
              className="gradient-primary hover:opacity-90 transition-all duration-300 text-white flex items-center gap-2 px-6 py-6 hover:translate-x-1 shadow-lg"
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
              className="flex items-center gap-2 px-6 py-6 dark:border-lending-border dark:bg-lending-dark/60 dark:text-white light:bg-white light:text-gray-800 light:border-gray-200 hover:bg-lending-primary/20 transition-all duration-300 shadow-md"
              onClick={scrollToFeatures}
            >
              <Coins className="h-4 w-4 text-lending-primary" />
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-8 pt-4 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center dark:bg-lending-primary/20 light:bg-indigo-100 border dark:border-lending-primary/30 light:border-indigo-300">
                <BarChart3 className="h-5 w-5 text-lending-primary" />
              </div>
              <div>
                <p className="text-sm font-medium dark:text-white light:text-gray-800">$1.8B+</p>
                <p className="text-xs dark:text-gray-400 light:text-gray-500">Total Volume</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center dark:bg-lending-primary/20 light:bg-indigo-100 border dark:border-lending-primary/30 light:border-indigo-300">
                <Coins className="h-5 w-5 text-lending-primary" />
              </div>
              <div>
                <p className="text-sm font-medium dark:text-white light:text-gray-800">12+</p>
                <p className="text-xs dark:text-gray-400 light:text-gray-500">Supported Chains</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hidden md:block md:w-1/2 mt-10 md:mt-0 animate-float">
          <div className="relative rounded-xl overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="absolute inset-0 dark:bg-hero-dark light:bg-gradient-to-br light:from-white light:to-lending-primary/20 opacity-90 transition-colors duration-300"></div>
            <div className="relative p-8 z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="dark:bg-glass light:bg-white p-4 rounded-lg dark:border dark:border-lending-primary/30 light:border-2 light:border-indigo-300 light:hover:border-indigo-500 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <h3 className="font-semibold mb-1 dark:text-white light:text-gray-800">Deposit on Optimism</h3>
                  <p className="text-sm dark:text-gray-300 light:text-gray-600">Secure 5.2% APY</p>
                </div>
                <div className="dark:bg-glass light:bg-white p-4 rounded-lg dark:border dark:border-lending-primary/30 light:border-2 light:border-indigo-300 light:hover:border-indigo-500 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <h3 className="font-semibold mb-1 dark:text-white light:text-gray-800">Borrow on Base</h3>
                  <p className="text-sm dark:text-gray-300 light:text-gray-600">Only 3.1% Interest</p>
                </div>
                <div className="dark:bg-glass light:bg-white p-4 rounded-lg col-span-2 dark:border dark:border-lending-primary/30 light:border-2 light:border-indigo-300 light:hover:border-indigo-500 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
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
          
          {/* Add floating elements for visual appeal */}
          <div className="absolute -right-16 top-1/4 w-32 h-32 dark:bg-lending-primary/10 light:bg-indigo-200/50 rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute -left-12 bottom-1/3 w-24 h-24 dark:bg-lending-accent/10 light:bg-blue-200/50 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
