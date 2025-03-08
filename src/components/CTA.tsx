
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="py-16 dark:bg-lending-darker light:bg-white transition-colors duration-300" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="cta-card opacity-0 transform translate-y-10 transition-all duration-700 rounded-2xl overflow-hidden shadow-lg border dark:border-lending-border light:border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 dark:bg-lending-card light:bg-gradient-to-r light:from-gray-50 light:to-white">
              <h2 className="text-3xl font-bold mb-4 dark:text-white light:text-gray-800">Ready to Start?</h2>
              <p className="dark:text-gray-300 light:text-gray-600 mb-6">
                Join LenDiverse today and experience the future of borderless finance.
              </p>
              <Button 
                className="bg-gradient-to-r from-lending-primary to-lending-secondary hover:opacity-90 text-white flex items-center gap-2 px-6 py-6 transition-all duration-300 hover:translate-x-1"
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
            <div className="bg-gradient-to-r from-lending-primary to-lending-accent dark:from-lending-primary dark:to-lending-accent light:from-blue-500/90 light:to-indigo-500/90 hidden md:block relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDEwMGMwLTUwIDUwLTUwIDUwIDBzLTUwIDUwLTUwIDB6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-20 animate-bg-shift"></div>
              <div className="h-full p-12 flex items-center justify-center relative z-10">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-4">Currently Supporting</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="backdrop-blur-sm p-3 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105">
                      <p className="font-semibold">Base</p>
                    </div>
                    <div className="backdrop-blur-sm p-3 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105">
                      <p className="font-semibold">Optimism</p>
                    </div>
                    <div className="backdrop-blur-sm p-3 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105">
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
