
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Wallet, 
  LogIn, 
  Menu, 
  X
} from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

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

  const truncateAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <nav className="py-4 px-6 md:px-10 w-full border-b border-lending-border bg-lending-dark/70 backdrop-blur-md fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-bold text-2xl">
            <span className="text-lending-primary animate-glow">Len</span>
            <span className="text-lending-secondary">Di</span>
            <span className="text-lending-accent">verse</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-300 hover:text-lending-primary transition-colors duration-300">Features</a>
          <a href="#networks" className="text-gray-300 hover:text-lending-primary transition-colors duration-300">Networks</a>
          <a href="#how-it-works" className="text-gray-300 hover:text-lending-primary transition-colors duration-300">How It Works</a>
        </div>
        
        <div className="flex items-center space-x-4">
          {isConnected ? (
            <Button 
              variant="outline" 
              className="flex items-center gap-2 border-lending-border bg-lending-card hover:bg-lending-primary/20 transition-all duration-300"
            >
              <Wallet className="h-4 w-4 text-lending-primary" />
              <span className="hidden sm:inline text-white">{truncateAddress(walletAddress)}</span>
            </Button>
          ) : (
            <Button 
              variant="outline" 
              className="flex items-center gap-2 border-lending-border bg-lending-card hover:bg-lending-primary/20 transition-all duration-300"
              onClick={connectWallet}
            >
              <Wallet className="h-4 w-4 text-lending-primary" />
              <span className="hidden sm:inline text-white">Connect Wallet</span>
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
            className="md:hidden text-white hover:bg-lending-primary/20" 
            size="icon"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-[72px] bg-lending-dark/95 backdrop-blur-lg border-b border-lending-border animate-fade-in-up">
          <div className="flex flex-col p-4 space-y-4">
            <a 
              href="#features" 
              className="text-gray-300 hover:text-lending-primary transition-colors py-2 px-4"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a 
              href="#networks" 
              className="text-gray-300 hover:text-lending-primary transition-colors py-2 px-4"
              onClick={toggleMenu}
            >
              Networks
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-300 hover:text-lending-primary transition-colors py-2 px-4"
              onClick={toggleMenu}
            >
              How It Works
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
