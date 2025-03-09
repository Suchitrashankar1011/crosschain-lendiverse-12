
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DepositWithdrawForm from '@/components/dashboard/DepositWithdrawForm';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Wallet as WalletIcon, Copy } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const Wallet = () => {
  const { isAuthenticated, walletAddress, userBalance } = useAuth();
  const navigate = useNavigate();
  
  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // Don't render anything while redirecting
  }

  const copyToClipboard = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress);
      toast({
        title: "Address Copied",
        description: "Wallet address copied to clipboard.",
      });
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-64 hidden md:block">
        <DashboardSidebar />
      </div>
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <h1 className="text-2xl font-bold dark:text-white light:text-gray-900 mb-8">Wallet</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border dark:border-lending-border light:border-gray-200 dark:bg-lending-card light:bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold dark:text-white light:text-gray-900">Wallet Details</CardTitle>
                <CardDescription>Connected via MetaMask</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                    <WalletIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Connected Wallet</div>
                    <div className="flex items-center">
                      <div className="font-medium dark:text-white light:text-gray-900">
                        {walletAddress ? `${walletAddress.slice(0, 8)}...${walletAddress.slice(-6)}` : 'Not connected'}
                      </div>
                      <button 
                        onClick={copyToClipboard}
                        className="ml-2 p-1 hover:bg-gray-100 rounded transition-colors"
                      >
                        <Copy className="h-4 w-4 text-gray-500" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm dark:text-gray-400 light:text-gray-500">Total Balance</span>
                    <span className="font-medium dark:text-white light:text-gray-900">{userBalance} ETH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm dark:text-gray-400 light:text-gray-500">Total Supplied</span>
                    <span className="font-medium dark:text-white light:text-gray-900">0.85 ETH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm dark:text-gray-400 light:text-gray-500">Available to Withdraw</span>
                    <span className="font-medium dark:text-white light:text-gray-900">0.384 ETH</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div>
              <DepositWithdrawForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
