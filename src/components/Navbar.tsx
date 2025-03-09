import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  Wallet, 
  LogIn, 
  Menu, 
  X
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '@/contexts/AuthContext';

// Type definition for window with ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, walletAddress, login, logout } = useAuth();

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

  const handleLogin = async () => {
    await login();
  };

  const handleLogout = () => {
    logout();
  };

  const handleDashboardClick = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      handleLogin().then(() => {
        navigate('/dashboard');
      });
    }
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <nav className={`py-4 px-6 md:px-10 w-full border-b transition-all duration-300 backdrop-blur-md fixed top-0 z-50 ${
      scrolled 
        ? 'dark:bg-lending-dark/90 light:bg-white/95 dark:border-lending-primary/20 light:border-lending-primary/10 shadow-lg' 
        : 'dark:bg-lending-dark/70 light:bg-white/80 dark:border-lending-border light:border-gray-200'
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
            className="dark:text-gray-300 light:text-gray-700 hover:text-lending-primary transition-all duration-300 relative group"
          >
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lending-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('networks')} 
            className="dark:text-gray-300 light:text-gray-700 hover:text-lending-primary transition-all duration-300 relative group"
          >
            Networks
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lending-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="dark:text-gray-300 light:text-gray-700 hover:text-lending-primary transition-all duration-300 relative group"
          >
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lending-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {isAuthenticated ? (
            <Button 
              variant="outline" 
              className="flex items-center gap-2 dark:border-lending-border dark:bg-lending-card light:bg-white/90 light:border-gray-200 hover:bg-lending-primary/20 transition-all duration-300"
              onClick={handleDashboardClick}
            >
              <Wallet className="h-4 w-4 text-lending-primary" />
              <span className="hidden sm:inline dark:text-white light:text-gray-800">
                {walletAddress ? truncateAddress(walletAddress) : 'Wallet'}
              </span>
            </Button>
          ) : (
            <Button 
              variant="outline" 
              className="flex items-center gap-2 dark:border-lending-border dark:bg-lending-card light:bg-white/90 light:border-gray-200 hover:bg-lending-primary/20 transition-all duration-300"
              onClick={handleLogin}
            >
              <Wallet className="h-4 w-4 text-lending-primary" />
              <span className="hidden sm:inline dark:text-white light:text-gray-800">Connect</span>
            </Button>
          )}
          
          {isAuthenticated ? (
            <Button 
              className="bg-gradient-to-r from-lending-primary to-lending-secondary hover:opacity-90 transition-all duration-300 text-white flex items-center gap-2"
              onClick={handleLogout}
            >
              <LogIn className="h-4 w-4" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          ) : (
            <Button 
              className="bg-gradient-to-r from-lending-primary to-lending-secondary hover:opacity-90 transition-all duration-300 text-white flex items-center gap-2"
              onClick={handleDashboardClick}
            >
              <LogIn className="h-4 w-4" />
              <span className="hidden sm:inline">Login</span>
            </Button>
          )}
          
          <Button 
            variant="ghost" 
            className="md:hidden dark:text-white light:text-gray-800 hover:bg-lending-primary/20" 
            size="icon"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-[72px] dark:bg-lending-dark/95 light:bg-white/95 backdrop-blur-lg border-b dark:border-lending-border light:border-gray-200 animate-slide-in-bottom">
          <div className="flex flex-col p-4 space-y-4">
            <button 
              onClick={() => scrollToSection('features')}
              className="dark:text-gray-300 light:text-gray-700 hover:text-lending-primary transition-colors py-2 px-4 text-left"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('networks')}
              className="dark:text-gray-300 light:text-gray-700 hover:text-lending-primary transition-colors py-2 px-4 text-left"
            >
              Networks
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="dark:text-gray-300 light:text-gray-700 hover:text-lending-primary transition-colors py-2 px-4 text-left"
            >
              How It Works
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    });
  }
};

export default Navbar;
