
import React, { useEffect, useRef } from 'react';
import { 
  Link, 
  BarChart3, 
  Shield, 
  Zap,
  Globe,
  CreditCard,
  Lock
} from 'lucide-react';
import { Card, CardContent } from './ui/card';

const features = [
  {
    title: 'Cross-Chain Flexibility',
    description: 'Deposit on one chain, borrow on another without barriers.',
    icon: Link
  },
  {
    title: 'Global Liquidity',
    description: 'Access unified liquidity pools across multiple networks.',
    icon: BarChart3
  },
  {
    title: 'Bank-Grade Security',
    description: 'Advanced protection for your assets across all chains.',
    icon: Shield
  },
  {
    title: 'Lightning Fast',
    description: 'High-throughput chains for near-instant transactions.',
    icon: Zap
  },
  {
    title: 'Borderless Access',
    description: 'Connect to markets worldwide without restrictions.',
    icon: Globe
  },
  {
    title: 'Capital Efficiency',
    description: 'Optimize assets across multiple networks simultaneously.',
    icon: CreditCard
  }
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const featureElements = document.querySelectorAll('.feature-card');
    featureElements.forEach(el => observer.observe(el));

    return () => {
      featureElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div id="features" ref={sectionRef} className="py-20 dark:bg-gradient-to-b dark:from-lending-dark dark:to-lending-darker light:bg-gray-50 light:bg-gradient-to-b light:from-white light:to-gray-100 min-h-screen flex items-center transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 dark:text-white light:text-gray-800 animate-fade-in-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lending-primary to-lending-secondary animate-bg-shift">Powerful Features</span>
          </h2>
          <p className="dark:text-gray-300 light:text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Revolutionizing DeFi with seamless cross-chain capabilities & robust financial tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="feature-card dark:bg-lending-card/80 dark:hover:bg-lending-card dark:border-lending-border/50 dark:hover:border-lending-primary/50 
              light:bg-white light:hover:bg-white/80 light:border-gray-200 light:hover:border-lending-primary/50 light:shadow-md 
              hover:shadow-lending-primary/20 transition-all duration-500 opacity-0 transform translate-y-10"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center p-4 rounded-full mb-5 bg-gradient-to-br dark:from-lending-primary/20 dark:to-lending-primary/10 light:from-lending-primary/10 light:to-lending-secondary/5">
                  <feature.icon className="h-7 w-7 text-lending-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white light:text-gray-800">{feature.title}</h3>
                <p className="dark:text-gray-300 light:text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-2 dark:bg-lending-card/80 light:bg-white rounded-xl overflow-hidden shadow-lg border dark:border-lending-border/50 light:border-gray-200">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-4 dark:text-white light:text-gray-800">Reimagine Finance</h3>
              <p className="dark:text-gray-300 light:text-gray-600 mb-4">
                LenDiverse eliminates traditional barriers between blockchains, creating a unified liquidity ecosystem where your assets work harder for you across multiple networks simultaneously.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-gradient-to-br dark:from-lending-primary/20 dark:to-transparent light:from-lending-primary/10 light:to-white p-4 rounded-lg">
                  <h4 className="font-semibold dark:text-white light:text-gray-800">Unified Liquidity</h4>
                  <p className="text-sm dark:text-gray-300 light:text-gray-600">Pooled assets across chains</p>
                </div>
                <div className="bg-gradient-to-br dark:from-lending-secondary/20 dark:to-transparent light:from-lending-secondary/10 light:to-white p-4 rounded-lg">
                  <h4 className="font-semibold dark:text-white light:text-gray-800">Interest Optimization</h4>
                  <p className="text-sm dark:text-gray-300 light:text-gray-600">Best rates automatically</p>
                </div>
                <div className="bg-gradient-to-br dark:from-lending-accent/20 dark:to-transparent light:from-lending-accent/10 light:to-white p-4 rounded-lg">
                  <h4 className="font-semibold dark:text-white light:text-gray-800">Risk Diversification</h4>
                  <p className="text-sm dark:text-gray-300 light:text-gray-600">Spread across networks</p>
                </div>
              </div>
            </div>
          </div>
          <div className="dark:bg-lending-card/80 light:bg-white rounded-xl overflow-hidden shadow-lg border dark:border-lending-border/50 light:border-gray-200">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 dark:text-white light:text-gray-800">Simple Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-lending-primary flex items-center justify-center text-white font-semibold mr-3 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold dark:text-white light:text-gray-800">Connect</h4>
                    <p className="text-sm dark:text-gray-300 light:text-gray-600">Link your wallet securely</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-lending-secondary flex items-center justify-center text-white font-semibold mr-3 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold dark:text-white light:text-gray-800">Deposit</h4>
                    <p className="text-sm dark:text-gray-300 light:text-gray-600">Add assets to the platform</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-lending-accent flex items-center justify-center text-white font-semibold mr-3 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold dark:text-white light:text-gray-800">Borrow/Lend</h4>
                    <p className="text-sm dark:text-gray-300 light:text-gray-600">Access cross-chain opportunities</p>
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

export default Features;
