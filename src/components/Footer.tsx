
import React from 'react';
import { Github, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="dark:bg-lending-darker dark:border-lending-border light:bg-gray-50 light:border-gray-200 border-t transition-colors duration-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 animate-fade-in-up">
            <div className="font-bold text-2xl mb-4">
              <span className="text-lending-primary">Len</span>
              <span className="text-lending-secondary">Di</span>
              <span className="text-lending-accent">verse</span>
            </div>
            <p className="dark:text-gray-300 light:text-gray-600 mb-6 max-w-md">
              Next-gen cross-chain lending platform enhancing DeFi liquidity and interoperability
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-lending-primary transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-lending-primary transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-lending-primary transition-colors duration-300">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-semibold dark:text-white light:text-gray-800 mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-lending-primary transition-colors duration-300">Features</a></li>
              <li><a href="#networks" className="text-gray-400 hover:text-lending-primary transition-colors duration-300">Networks</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-lending-primary transition-colors duration-300">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lending-primary transition-colors duration-300">Roadmap</a></li>
            </ul>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-semibold dark:text-white light:text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-lending-primary transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lending-primary transition-colors duration-300">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lending-primary transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lending-primary transition-colors duration-300">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t dark:border-lending-border light:border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2023 LenDiverse. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-lending-primary transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-lending-primary transition-colors duration-300 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
