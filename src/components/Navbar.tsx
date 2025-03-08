
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Wallet, 
  LogIn, 
  Menu, 
  X
} from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import ThemeToggle from './ThemeToggle';

// Type definition for window with ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const connectWallet = async () => {
    try {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        
        setWalletAddress(account);
        setIsConnected(true);
        
        toast({
          title: "Wallet Connected",
          description: `Connected to ${account.slice(0, 6)}...${account.slice(-4)}`,
        });
      } else {
        toast({
          title: "MetaMask Not Found",
          description: "Please install MetaMask to connect your wallet.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error connecting to wallet:", error);
      toast({
        title: "Connection Failed",
        description: "Failed to connect to your wallet.",
        variant: "destructive"
      });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Close menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      
      // Scroll to section with smooth behavior
      window.scrollTo({
        top: element.offsetTop - 80, // Account for navbar height
        behavior: 'smooth'
      });
    }
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <nav className={`py-4 px-6 md:px-10 w-full border-b transition-all duration-300 backdrop-blur-md fixed top-0 z-50 ${
      scrolled ? 'bg-lending-dark/90 dark:bg-lending-dark/90 light:bg-white/90 border-lending-primary/20 shadow-lg' : 'bg-lending-dark/70 dark:bg-lending-dark/70 light:bg-white/70 border-lending-border'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-bold text-2xl">
            <span className="text-lending-primary animate-glow">Len</span>
            <span className="text-lending-secondary">Di</span>
            <span className="text-lending-accent">verse</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-gray-300 dark:text-gray-300 light:text-lending-dark hover:text-lending-primary transition-all duration-300 relative group"
          >
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lending-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('networks')} 
            className="text-gray-300 dark:text-gray-300 light:text-lending-dark hover:text-lending-primary transition-all duration-300 relative group"
          >
            Networks
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lending-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="text-gray-300 dark:text-gray-300 light:text-lending-dark hover:text-lending-primary transition-all duration-300 relative group"
          >
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lending-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {isConnected ? (
            <Button 
              variant="outline" 
              className="flex items-center gap-2 border-lending-border bg-lending-card hover:bg-lending-primary/20 transition-all duration-300"
            >
              <Wallet className="h-4 w-4 text-lending-primary" />
              <span className="hidden sm:inline text-white dark:text-white light:text-lending-dark">{truncateAddress(walletAddress)}</span>
            </Button>
          ) : (
            <Button 
              variant="outline" 
              className="flex items-center gap-2 border-lending-border bg-lending-card hover:bg-lending-primary/20 transition-all duration-300"
              onClick={connectWallet}
            >
              <Wallet className="h-4 w-4 text-lending-primary" />
              <span className="hidden sm:inline text-white dark:text-white light:text-lending-dark">Connect</span>
            </Button>
          )}
          
          <Button 
            className="bg-gradient-to-r from-lending-primary to-lending-secondary hover:opacity-90 transition-all duration-300 text-white flex items-center gap-2"
            onClick={() => {
              toast({
                title: "Welcome to LenDiverse",
                description: "Login functionality is coming soon!",
              });
            }}
          >
            <LogIn className="h-4 w-4" />
            <span className="hidden sm:inline">Login</span>
          </Button>
          
          <Button 
            variant="ghost" 
            className="md:hidden text-white dark:text-white light:text-lending-dark hover:bg-lending-primary/20" 
            size="icon"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-[72px] bg-lending-dark/95 dark:bg-lending-dark/95 light:bg-white/95 backdrop-blur-lg border-b border-lending-border animate-slide-in-bottom">
          <div className="flex flex-col p-4 space-y-4">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-300 dark:text-gray-300 light:text-lending-dark hover:text-lending-primary transition-colors py-2 px-4 text-left"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('networks')}
              className="text-gray-300 dark:text-gray-300 light:text-lending-dark hover:text-lending-primary transition-colors py-2 px-4 text-left"
            >
              Networks
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-300 dark:text-gray-300 light:text-lending-dark hover:text-lending-primary transition-colors py-2 px-4 text-left"
            >
              How It Works
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
