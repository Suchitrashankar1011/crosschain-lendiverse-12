
import React from 'react';
import { Check } from 'lucide-react';

const networks = [
  {
    name: 'Base',
    logo: '/optimism.svg', // This would be replaced with actual logos
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
      className="bg-lending-card rounded-xl shadow-lg overflow-hidden border border-lending-border hover:border-lending-primary/50 hover:shadow-lending-primary/20 transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-lending-primary/20 flex items-center justify-center">
            {/* Placeholder for network logo */}
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
    </div>
  );
};

const Networks = () => {
  return (
    <div id="networks" className="py-20 bg-lending-darker">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4 text-white">Supported Networks</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
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
