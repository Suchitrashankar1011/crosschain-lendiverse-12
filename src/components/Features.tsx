
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
    <div id="features" ref={sectionRef} className="py-20 transition-colors duration-300 dark:bg-lending-dark light:bg-white min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 dark:text-white light:text-gray-800 animate-fade-in-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lending-primary to-lending-secondary animate-bg-shift">Power Features</span>
          </h2>
          <p className="dark:text-gray-300 light:text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Unleash DeFi's potential with our revolutionary cross-chain capabilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card dark:bg-lending-card dark:border-lending-border light:bg-white light:border-gray-200 light:shadow-md p-6 rounded-xl border hover:shadow-lending-primary/20 transition-all duration-500 hover:border-lending-primary/50 opacity-0 transform translate-y-10"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-lending-primary/10 text-lending-primary rounded-lg mb-4 transition-all duration-300 group-hover:scale-110">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white light:text-gray-800">{feature.title}</h3>
              <p className="dark:text-gray-300 light:text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
