
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Coins } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="flex flex-col space-y-6 md:w-1/2 md:pr-10">
          <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-lending-secondary/10 text-lending-secondary mb-2">
            Cross-Chain DeFi Platform
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-lending-primary">Borrow & Lend</span><br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lending-primary via-lending-secondary to-lending-accent">
              Across Blockchains
            </span>
          </h1>
          <p className="text-lg text-gray-600 md:pr-10">
            LenDiverse enables seamless lending and borrowing across multiple blockchain networks, 
            enhancing DeFi liquidity and capital efficiency.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Button className="bg-gradient-to-r from-lending-primary to-lending-secondary hover:opacity-90 text-white flex items-center gap-2 px-6 py-6">
              Launch App
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="flex items-center gap-2 px-6 py-6">
              <Coins className="h-4 w-4" />
              Learn More
            </Button>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 mt-10 md:mt-0">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-hero-pattern opacity-90"></div>
            <div className="relative p-8 text-white z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
                  <h3 className="font-semibold mb-1">Deposit on Optimism</h3>
                  <p className="text-sm opacity-90">Secure 5.2% APY</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
                  <h3 className="font-semibold mb-1">Borrow on Base</h3>
                  <p className="text-sm opacity-90">Only 3.1% Interest</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 col-span-2">
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
