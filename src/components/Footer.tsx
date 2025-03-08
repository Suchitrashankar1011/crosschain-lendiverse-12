
import React from 'react';
import { Github, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="font-bold text-2xl mb-4">
              <span className="text-lending-primary">Len</span>
              <span className="text-lending-secondary">Di</span>
              <span className="text-lending-accent">verse</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              The next generation cross-chain lending platform enhancing DeFi liquidity and interoperability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-lending-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-lending-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-lending-primary transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-lending-secondary transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-lending-secondary transition-colors">Networks</a></li>
              <li><a href="#" className="text-gray-600 hover:text-lending-secondary transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-600 hover:text-lending-secondary transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-lending-secondary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-lending-secondary transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-600 hover:text-lending-secondary transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-lending-secondary transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2023 LenDiverse. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-lending-secondary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-lending-secondary transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
