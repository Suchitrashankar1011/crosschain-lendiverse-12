
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "@/hooks/use-toast";

interface AuthContextType {
  isAuthenticated: boolean;
  walletAddress: string | null;
  userBalance: number;
  login: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [userBalance, setUserBalance] = useState<number>(1.234);

  // Check local storage on mount
  useEffect(() => {
    const storedAuth = localStorage.getItem('lendiverse_auth');
    const storedWallet = localStorage.getItem('lendiverse_wallet');
    
    if (storedAuth === 'true' && storedWallet) {
      setIsAuthenticated(true);
      setWalletAddress(storedWallet);
    }
  }, []);

  const login = async (): Promise<void> => {
    try {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        
        setWalletAddress(account);
        setIsAuthenticated(true);
        
        // Save to local storage
        localStorage.setItem('lendiverse_auth', 'true');
        localStorage.setItem('lendiverse_wallet', account);
        
        toast({
          title: "Login Successful",
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
        title: "Login Failed",
        description: "Failed to connect to your wallet.",
        variant: "destructive"
      });
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setWalletAddress(null);
    
    // Remove from local storage
    localStorage.removeItem('lendiverse_auth');
    localStorage.removeItem('lendiverse_wallet');
    
    toast({
      title: "Logged Out",
      description: "You've been successfully logged out.",
    });
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      walletAddress, 
      userBalance,
      login, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
