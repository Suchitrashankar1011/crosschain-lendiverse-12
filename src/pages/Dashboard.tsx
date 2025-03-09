
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import BalanceCard from '@/components/dashboard/BalanceCard';
import OverviewChart from '@/components/dashboard/OverviewChart';
import LendingPoolsTable from '@/components/dashboard/LendingPoolsTable';
import TransactionList from '@/components/dashboard/TransactionList';
import NetworkSelector from '@/components/dashboard/NetworkSelector';
import DepositWithdrawForm from '@/components/dashboard/DepositWithdrawForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  const { isAuthenticated, userBalance } = useAuth();
  const navigate = useNavigate();
  const [showDepositForm, setShowDepositForm] = useState(false);
  
  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // Don't render anything while redirecting
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-64 hidden md:block">
        <DashboardSidebar />
      </div>
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold dark:text-white light:text-gray-900 mb-1">Dashboard</h1>
              <p className="text-sm dark:text-gray-400 light:text-gray-500">Manage your cross-chain lending activities</p>
            </div>
            <NetworkSelector />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <BalanceCard 
              title="Total Balance" 
              value={`${userBalance} ETH`}
              subtext="+0.1% from last month"
              onClick={() => setShowDepositForm(!showDepositForm)}
            />
            <BalanceCard 
              title="Supplied" 
              value="0.85 ETH"
              subtext="Earning 5.2% APY"
              variant="success"
              onClick={() => navigate('/wallet')}
            />
            <BalanceCard 
              title="Available to Withdraw" 
              value="0.384 ETH"
              subtext="Across all networks"
              variant="info"
              onClick={() => navigate('/wallet')}
            />
          </div>
          
          {showDepositForm && (
            <div className="mb-8">
              <DepositWithdrawForm />
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-3 border dark:border-lending-border light:border-gray-200 dark:bg-lending-card light:bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold dark:text-white light:text-gray-900">Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <OverviewChart />
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-3">
              <LendingPoolsTable />
            </div>
            <div className="lg:col-span-3">
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
