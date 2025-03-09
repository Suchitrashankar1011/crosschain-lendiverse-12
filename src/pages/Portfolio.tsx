
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import PortfolioOverview from '@/components/portfolio/PortfolioOverview';
import PortfolioBreakdown from '@/components/portfolio/PortfolioBreakdown';
import PortfolioHistory from '@/components/portfolio/PortfolioHistory';
import NetworkSelector from '@/components/dashboard/NetworkSelector';

const Portfolio = () => {
  const { isAuthenticated } = useAuth();
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

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-64 hidden md:block">
        <DashboardSidebar />
      </div>
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold dark:text-white light:text-gray-900 mb-1">Portfolio</h1>
              <p className="text-sm dark:text-gray-400 light:text-gray-500">Track your lending and borrowing activities</p>
            </div>
            <NetworkSelector />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-3 border dark:border-lending-border light:border-gray-200 dark:bg-lending-card light:bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold dark:text-white light:text-gray-900">Portfolio Overview</CardTitle>
                <CardDescription>View your portfolio performance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <PortfolioOverview />
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <PortfolioHistory />
            </div>
            <div className="lg:col-span-1">
              <PortfolioBreakdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
