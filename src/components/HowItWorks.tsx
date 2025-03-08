
import React from 'react';
import { 
  Wallet, 
  PiggyBank, 
  ArrowRight, 
  CreditCard, 
  RefreshCw 
} from 'lucide-react';

const steps = [
  {
    title: 'Connect Your Wallet',
    description: 'Link your cryptocurrency wallet to access the LenDiverse platform.',
    icon: Wallet
  },
  {
    title: 'Deposit Assets',
    description: 'Deposit your crypto assets on your preferred blockchain as collateral.',
    icon: PiggyBank
  },
  {
    title: 'Borrow Cross-Chain',
    description: 'Borrow assets on a different blockchain network with your deposited collateral.',
    icon: CreditCard
  },
  {
    title: 'Repay & Withdraw',
    description: 'Repay your borrowed assets and withdraw your collateral when ready.',
    icon: RefreshCw
  }
];

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="py-20 bg-gradient-to-r from-lending-dark to-lending-primary/40 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">How LenDiverse Works</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Our platform makes cross-chain lending and borrowing simple and secure through these easy steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="backdrop-blur-md rounded-xl p-6 border border-white/10 bg-glass h-full hover:border-lending-primary/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-lg mb-4">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 animate-pulse-slow">
                  <ArrowRight className="h-8 w-8 text-white/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
