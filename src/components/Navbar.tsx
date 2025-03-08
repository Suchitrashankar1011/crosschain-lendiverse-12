
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Wallet, 
  LogIn, 
  Menu 
} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="py-4 px-6 md:px-10 w-full border-b border-gray-200 bg-white/70 backdrop-blur-md fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-bold text-2xl">
            <span className="text-lending-primary">Len</span>
            <span className="text-lending-secondary">Di</span>
            <span className="text-lending-accent">verse</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-700 hover:text-lending-secondary transition-colors">Features</a>
          <a href="#networks" className="text-gray-700 hover:text-lending-secondary transition-colors">Networks</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-lending-secondary transition-colors">How It Works</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="flex items-center gap-2">
            <Wallet className="h-4 w-4" />
            <span className="hidden sm:inline">Connect Wallet</span>
          </Button>
          <Button className="bg-gradient-to-r from-lending-primary to-lending-secondary hover:opacity-90 text-white flex items-center gap-2">
            <LogIn className="h-4 w-4" />
            <span className="hidden sm:inline">Login</span>
          </Button>
          <Button variant="ghost" className="md:hidden" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
