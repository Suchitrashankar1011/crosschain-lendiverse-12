
import React from 'react';
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
    title: 'Cross-Chain Interoperability',
    description: 'Deposit collateral on one blockchain and borrow tokens on another without barriers.',
    icon: Link
  },
  {
    title: 'Enhanced Liquidity',
    description: 'Access global liquidity pools across multiple blockchain networks.',
    icon: BarChart3
  },
  {
    title: 'Secure Protocol',
    description: 'Advanced security measures ensure your assets remain protected across chains.',
    icon: Shield
  },
  {
    title: 'Fast Transactions',
    description: 'Leverage high-throughput blockchains for faster and more efficient transactions.',
    icon: Zap
  },
  {
    title: 'Global Access',
    description: 'Connect to lending markets worldwide without geographic restrictions.',
    icon: Globe
  },
  {
    title: 'Capital Efficiency',
    description: 'Optimize your assets by utilizing them across multiple networks simultaneously.',
    icon: CreditCard
  }
];

const Features = () => {
  return (
    <div id="features" className="py-20 bg-lending-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4 text-white">Why Choose LenDiverse?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our platform offers unique advantages for DeFi users looking to maximize their lending and borrowing capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-lending-card p-6 rounded-xl shadow-lg hover:shadow-lending-primary/20 transition-all duration-300 border border-lending-border hover:border-lending-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-lending-primary/10 text-lending-primary rounded-lg mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
