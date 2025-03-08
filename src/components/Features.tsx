
import React, { useEffect, useRef } from 'react';
import { 
  Link, 
  BarChart3, 
  Shield, 
  Zap,
  Globe,
  CreditCard
} from 'lucide-react';

const features = [
  {
    title: 'Seamless',
    description: 'Cross-chain transfers with zero complexity',
    icon: Link
  },
  {
    title: 'Amplified',
    description: 'Global liquidity at your fingertips',
    icon: BarChart3
  },
  {
    title: 'Protected',
    description: 'Enterprise-grade security by design',
    icon: Shield
  },
  {
    title: 'Lightning',
    description: 'Transactions finalized in seconds',
    icon: Zap
  },
  {
    title: 'Borderless',
    description: 'Unrestricted access to global markets',
    icon: Globe
  },
  {
    title: 'Optimized',
    description: 'Maximum efficiency for your assets',
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
    <div id="features" ref={sectionRef} className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lending-primary to-lending-secondary animate-bg-shift">Reimagine Finance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            A revolutionary platform bridging the gap between blockchain ecosystems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card bg-card hover-lift p-6 rounded-xl shadow-lg border border-border opacity-0 transform translate-y-10"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-lg mb-4 transition-all duration-300 group-hover:scale-110">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
