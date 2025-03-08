
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
    title: 'Connect',
    description: 'Link your wallet to access the platform',
    icon: Wallet
  },
  {
    title: 'Deposit',
    description: 'Add crypto assets as collateral',
    icon: PiggyBank
  },
  {
    title: 'Borrow',
    description: 'Get assets on different blockchains',
    icon: CreditCard
  },
  {
    title: 'Repay',
    description: 'Return assets and withdraw collateral',
    icon: RefreshCw
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
    <div id="how-it-works" ref={sectionRef} className="py-20 bg-gradient-to-r from-background to-[var(--lending-primary)]/10 text-foreground min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--lending-accent)] to-[var(--lending-primary)] animate-bg-shift">Simple Process</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Cross-chain lending made simple through easy steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative"
            >
              <div 
                className="step-card backdrop-blur-md rounded-xl p-6 border border-border bg-card h-full hover:border-[var(--lending-primary)]/50 transition-all duration-500 opacity-0 transform translate-y-10"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-4">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[var(--lending-primary)]/80 rounded-full flex items-center justify-center text-white font-bold z-10">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-arrow hidden lg:block absolute top-1/2 -right-4 transform translate-x-8 -translate-y-1/2 z-10 opacity-0 transition-all duration-1000">
                  <ArrowRight className="h-8 w-8 text-foreground/30" />
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
