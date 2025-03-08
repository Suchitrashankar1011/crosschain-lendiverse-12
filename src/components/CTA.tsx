
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Cross-Chain Lending?</h2>
              <p className="text-gray-600 mb-6">
                Join LenDiverse today and experience the future of decentralized finance with our cross-chain lending platform.
              </p>
              <Button className="bg-gradient-to-r from-lending-primary to-lending-secondary hover:opacity-90 text-white flex items-center gap-2 px-6 py-6">
                Launch App
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="bg-gradient-to-r from-lending-secondary to-lending-accent hidden md:block">
              <div className="h-full p-12 flex items-center justify-center">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-4">Currently Supporting</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20">
                      <p className="font-semibold">Base</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20">
                      <p className="font-semibold">Optimism</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20">
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
