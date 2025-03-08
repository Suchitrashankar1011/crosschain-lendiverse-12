
import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const networks = [
  {
    name: 'Base',
    logo: '/optimism.svg', 
    color: '#0EA5E9',
    features: ['Low fees', 'Fast transactions', 'Secure environment']
  },
  {
    name: 'Optimism',
    logo: '/optimism.svg',
    color: '#FF0420',
    features: ['Ethereum security', 'Optimistic rollups', 'Lower gas costs']
  },
  {
    name: 'Arbitrum',
    logo: '/arbitrum.svg',
    color: '#28A0F0',
    features: ['High throughput', 'EVM compatibility', 'Minimal latency']
  }
];

const NetworkCard = ({ network, index }: { network: typeof networks[0], index: number }) => {
  return (
    <div 
      className="network-card bg-lending-card rounded-xl shadow-lg overflow-hidden border border-lending-border hover:border-lending-primary/50 hover:shadow-lending-primary/20 transition-all duration-500 opacity-0 transform translate-y-10"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-lending-primary/20 to-lending-secondary/20 flex items-center justify-center">
            <span className="font-semibold text-sm" style={{ color: network.color }}>{network.name.substring(0, 1)}</span>
          </div>
          <h3 className="text-xl font-semibold text-white">{network.name}</h3>
        </div>
        <ul className="space-y-2">
          {network.features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <Check className="h-4 w-4 text-lending-accent mr-2" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-1 bg-gradient-to-r" style={{ 
        backgroundImage: `linear-gradient(to right, ${network.color}80, ${network.color}40)`,
        width: '0%',
        transition: 'width 1s ease-out',
        transitionDelay: `${index * 200 + 400}ms`
      }}></div>
    </div>
  );
};

const Networks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Animate progress bars when visible
          const progressBars = entry.target.querySelectorAll('.network-card .h-1');
          progressBars.forEach(bar => {
            (bar as HTMLElement).style.width = '100%';
          });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const networkElements = document.querySelectorAll('.network-card');
    networkElements.forEach(el => observer.observe(el));

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      networkElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div id="networks" ref={sectionRef} className="py-20 bg-lending-darker min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-lending-secondary/20 text-lending-secondary mb-4 animate-fade-in">
            Networks
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Supported <span className="bg-clip-text text-transparent bg-gradient-to-r from-lending-secondary to-lending-accent animate-bg-shift">Networks</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            LenDiverse currently supports these Ethereum Layer 2 networks, with more coming soon.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {networks.map((network, index) => (
            <NetworkCard key={index} network={network} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Networks;
