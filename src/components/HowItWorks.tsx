
import React, { useEffect, useRef } from 'react';
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
    icon: Wallet,
    color: 'from-indigo-500/80 to-indigo-500/50'
  },
  {
    title: 'Deposit Assets',
    description: 'Deposit your crypto assets on your preferred blockchain as collateral.',
    icon: PiggyBank,
    color: 'from-blue-500/80 to-blue-500/50'
  },
  {
    title: 'Borrow Cross-Chain',
    description: 'Borrow assets on a different blockchain network with your deposited collateral.',
    icon: CreditCard,
    color: 'from-green-500/80 to-green-500/50'
  },
  {
    title: 'Repay & Withdraw',
    description: 'Repay your borrowed assets and withdraw your collateral when ready.',
    icon: RefreshCw,
    color: 'from-purple-500/80 to-purple-500/50'
  }
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Show arrows when section becomes visible
          const arrows = document.querySelectorAll('.step-arrow');
          arrows.forEach((arrow, index) => {
            (arrow as HTMLElement).style.opacity = '0.5';
            (arrow as HTMLElement).style.transform = 'translateX(0) translateY(-50%)';
          });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const stepElements = document.querySelectorAll('.step-card');
    stepElements.forEach(el => observer.observe(el));

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      stepElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div id="how-it-works" ref={sectionRef} className="py-20 bg-gradient-to-r dark:from-lending-dark dark:to-lending-primary/40 light:from-indigo-50 light:to-blue-50 transition-colors duration-300 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lending-accent to-lending-primary animate-bg-shift">How It Works</span>
          </h2>
          <p className="max-w-2xl mx-auto dark:text-gray-300 light:text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Our platform makes cross-chain lending and borrowing simple and secure through these easy steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative"
            >
              <div 
                className="step-card backdrop-blur-md rounded-xl p-6 dark:border dark:border-white/10 dark:bg-lending-card/60 light:bg-white light:border-2 light:border-indigo-200 light:shadow-md h-full hover:border-indigo-400 transition-all duration-500 opacity-0 transform translate-y-10 hover:-translate-y-2"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`inline-flex items-center justify-center p-3 dark:bg-white/10 light:bg-gradient-to-br light:${step.color} light:bg-opacity-10 rounded-lg mb-4 border light:border-indigo-200`}>
                  <step.icon className="h-6 w-6 dark:text-white light:text-lending-primary" />
                </div>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-md">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white light:text-gray-800">{step.title}</h3>
                <p className="dark:text-gray-300 light:text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-arrow hidden lg:block absolute top-1/2 -right-4 transform translate-x-8 -translate-y-1/2 z-10 opacity-0 transition-all duration-1000">
                  <ArrowRight className="h-8 w-8 dark:text-white/50 light:text-indigo-400" />
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
