
import React from 'react';
import { Github, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 animate-fade-in-up">
            <div className="font-bold text-2xl mb-4">
              <span className="text-[var(--lending-primary)]">Len</span>
              <span className="text-[var(--lending-secondary)]">Di</span>
              <span className="text-[var(--lending-accent)]">verse</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The next generation cross-chain lending platform enhancing DeFi liquidity and interoperability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-[var(--lending-primary)] transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[var(--lending-primary)] transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[var(--lending-primary)] transition-colors duration-300">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-semibold text-foreground mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-muted-foreground hover:text-[var(--lending-primary)] transition-colors duration-300">Features</a></li>
              <li><a href="#networks" className="text-muted-foreground hover:text-[var(--lending-primary)] transition-colors duration-300">Networks</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-[var(--lending-primary)] transition-colors duration-300">How It Works</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-[var(--lending-primary)] transition-colors duration-300">Roadmap</a></li>
            </ul>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-[var(--lending-primary)] transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-[var(--lending-primary)] transition-colors duration-300">API Reference</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-[var(--lending-primary)] transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-[var(--lending-primary)] transition-colors duration-300">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2023 LenDiverse. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-[var(--lending-primary)] transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-[var(--lending-primary)] transition-colors duration-300 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
