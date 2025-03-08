
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const CTA = () => {
  return (
    <div className="py-20 bg-lending-dark">
      <div className="container mx-auto px-6">
        <div className="bg-lending-card rounded-2xl shadow-xl overflow-hidden border border-lending-border animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Cross-Chain Lending?</h2>
              <p className="text-gray-300 mb-6">
                Join LenDiverse today and experience the future of decentralized finance with our cross-chain lending platform.
              </p>
              <Button 
                className="bg-gradient-to-r from-lending-primary to-lending-secondary hover:opacity-90 text-white flex items-center gap-2 px-6 py-6 transition-all duration-300"
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
            </div>
            <div className="bg-gradient-to-r from-lending-primary to-lending-accent hidden md:block">
              <div className="h-full p-12 flex items-center justify-center">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-4">Currently Supporting</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="backdrop-blur-md p-3 rounded-lg border border-white/20 bg-glass hover:border-white/40 transition-all duration-300">
                      <p className="font-semibold">Base</p>
                    </div>
                    <div className="backdrop-blur-md p-3 rounded-lg border border-white/20 bg-glass hover:border-white/40 transition-all duration-300">
                      <p className="font-semibold">Optimism</p>
                    </div>
                    <div className="backdrop-blur-md p-3 rounded-lg border border-white/20 bg-glass hover:border-white/40 transition-all duration-300">
                      <p className="font-semibold">Arbitrum</p>
                    </div>
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

export default CTA;
