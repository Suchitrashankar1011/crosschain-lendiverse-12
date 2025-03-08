
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
    icon: Link,
    color: 'blue'
  },
  {
    title: 'Global Liquidity',
    description: 'Access unified liquidity pools across multiple networks.',
    icon: BarChart3,
    color: 'purple'
  },
  {
    title: 'Bank-Grade Security',
    description: 'Advanced protection for your assets across all chains.',
    icon: Shield,
    color: 'green'
  },
  {
    title: 'Lightning Fast',
    description: 'High-throughput chains for near-instant transactions.',
    icon: Zap,
    color: 'yellow'
  },
  {
    title: 'Borderless Access',
    description: 'Connect to markets worldwide without restrictions.',
    icon: Globe,
    color: 'pink'
  },
  {
    title: 'Capital Efficiency',
    description: 'Optimize assets across multiple networks simultaneously.',
    icon: CreditCard,
    color: 'indigo'
  }
];

const getColorClasses = (color: string, isLight: boolean) => {
  const colorMap: Record<string, { bg: string, border: string, icon: string }> = {
    blue: {
      bg: isLight ? 'bg-blue-50' : 'from-blue-500/20 to-blue-500/5',
      border: isLight ? 'border-blue-200' : 'border-blue-500/30',
      icon: 'text-blue-500'
    },
    purple: {
      bg: isLight ? 'bg-purple-50' : 'from-purple-500/20 to-purple-500/5',
      border: isLight ? 'border-purple-200' : 'border-purple-500/30',
      icon: 'text-purple-500'
    },
    green: {
      bg: isLight ? 'bg-green-50' : 'from-green-500/20 to-green-500/5',
      border: isLight ? 'border-green-200' : 'border-green-500/30',
      icon: 'text-green-500'
    },
    yellow: {
      bg: isLight ? 'bg-amber-50' : 'from-amber-500/20 to-amber-500/5',
      border: isLight ? 'border-amber-200' : 'border-amber-500/30',
      icon: 'text-amber-500'
    },
    pink: {
      bg: isLight ? 'bg-pink-50' : 'from-pink-500/20 to-pink-500/5',
      border: isLight ? 'border-pink-200' : 'border-pink-500/30',
      icon: 'text-pink-500'
    },
    indigo: {
      bg: isLight ? 'bg-indigo-50' : 'from-indigo-500/20 to-indigo-500/5',
      border: isLight ? 'border-indigo-200' : 'border-indigo-500/30',
      icon: 'text-indigo-500'
    }
  };
  
  return colorMap[color] || colorMap.blue;
};

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
    <div id="features" ref={sectionRef} className="py-20 dark:bg-gradient-to-b dark:from-lending-dark dark:to-lending-darker light:bg-gradient-to-b light:from-gray-100 light:to-indigo-100 min-h-screen flex items-center transition-colors duration-300">
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
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color, true);
            return (
              <Card 
                key={index} 
                className="feature-card dark:bg-lending-card/80 dark:hover:bg-lending-card dark:border-lending-border/50 dark:hover:border-lending-primary/50 
                light:bg-white light:hover:bg-white light:border-2 light:border-indigo-200 light:hover:border-indigo-400 light:shadow-md 
                hover:shadow-lg transition-all duration-500 opacity-0 transform translate-y-10 hover:-translate-y-2"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center p-4 rounded-full mb-5 bg-gradient-to-br dark:from-lending-primary/20 dark:to-lending-primary/10 light:bg-indigo-50 light:border-2 light:${colorClasses.border}`}>
                    <feature.icon className={`h-7 w-7 dark:text-lending-primary light:${colorClasses.icon}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 dark:text-white light:text-gray-800">{feature.title}</h3>
                  <p className="dark:text-gray-300 light:text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-2 reimagine-container dark:bg-lending-card/80 light:bg-gray-200/80 rounded-xl overflow-hidden shadow-lg border-2 dark:border-lending-border/50 light:border-indigo-300 hover:border-indigo-400 transition-all duration-300 hover:-translate-y-1">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-4 dark:text-white light:text-gray-800">Reimagine Finance</h3>
              <p className="dark:text-gray-300 light:text-gray-600 mb-4">
                LenDiverse eliminates traditional barriers between blockchains, creating a unified liquidity ecosystem where your assets work harder for you across multiple networks simultaneously.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-gradient-to-br dark:from-lending-primary/20 dark:to-transparent light:from-white light:to-white p-4 rounded-lg border-2 dark:border-lending-border/50 light:border-blue-300 transition-all duration-300 hover:border-blue-400 hover:-translate-y-1 shadow-sm">
                  <h4 className="font-semibold dark:text-white light:text-gray-800">Unified Liquidity</h4>
                  <p className="text-sm dark:text-gray-300 light:text-gray-600">Pooled assets across chains</p>
                </div>
                <div className="bg-gradient-to-br dark:from-lending-secondary/20 dark:to-transparent light:from-white light:to-white p-4 rounded-lg border-2 dark:border-lending-border/50 light:border-purple-300 transition-all duration-300 hover:border-purple-400 hover:-translate-y-1 shadow-sm">
                  <h4 className="font-semibold dark:text-white light:text-gray-800">Interest Optimization</h4>
                  <p className="text-sm dark:text-gray-300 light:text-gray-600">Best rates automatically</p>
                </div>
                <div className="bg-gradient-to-br dark:from-lending-accent/20 dark:to-transparent light:from-white light:to-white p-4 rounded-lg border-2 dark:border-lending-border/50 light:border-green-300 transition-all duration-300 hover:border-green-400 hover:-translate-y-1 shadow-sm">
                  <h4 className="font-semibold dark:text-white light:text-gray-800">Risk Diversification</h4>
                  <p className="text-sm dark:text-gray-300 light:text-gray-600">Spread across networks</p>
                </div>
              </div>
            </div>
          </div>
          <div className="simple-process-container dark:bg-lending-card/80 light:bg-gray-200/80 rounded-xl overflow-hidden shadow-lg border-2 dark:border-lending-border/50 light:border-indigo-300 hover:border-indigo-400 transition-all duration-300 hover:-translate-y-1">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 dark:text-white light:text-gray-800">Simple Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold mr-3 flex-shrink-0 shadow-md">1</div>
                  <div>
                    <h4 className="font-semibold dark:text-white light:text-gray-800">Connect</h4>
                    <p className="text-sm dark:text-gray-300 light:text-gray-600">Link your wallet securely</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold mr-3 flex-shrink-0 shadow-md">2</div>
                  <div>
                    <h4 className="font-semibold dark:text-white light:text-gray-800">Deposit</h4>
                    <p className="text-sm dark:text-gray-300 light:text-gray-600">Add assets to the platform</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold mr-3 flex-shrink-0 shadow-md">3</div>
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
