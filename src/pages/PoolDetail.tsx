
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DepositWithdrawForm from '@/components/dashboard/DepositWithdrawForm';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PoolDetail = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const pool = location.state?.pool;
  
  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // Don't render anything while redirecting
  }

  if (!pool) {
    return (
      <div className="flex h-screen overflow-hidden">
        <div className="w-64 hidden md:block">
          <DashboardSidebar />
        </div>
        
        <div className="flex-1 overflow-auto">
          <div className="p-6">
            <Button 
              variant="outline" 
              className="mb-4"
              onClick={() => navigate('/dashboard')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
            </Button>
            
            <div className="text-center py-20">
              <h1 className="text-2xl font-bold dark:text-white light:text-gray-900 mb-4">Pool Not Found</h1>
              <p className="dark:text-gray-400 light:text-gray-500">The pool you're looking for doesn't exist or was not provided.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-64 hidden md:block">
        <DashboardSidebar />
      </div>
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <Button 
            variant="outline" 
            className="mb-4"
            onClick={() => navigate('/dashboard')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Button>
          
          <div className="flex items-center mb-8">
            <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: pool.networkColor }}></div>
            <h1 className="text-2xl font-bold dark:text-white light:text-gray-900">
              {pool.asset} Pool on {pool.network}
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border dark:border-lending-border light:border-gray-200 dark:bg-lending-card light:bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold dark:text-white light:text-gray-900">Pool Details</CardTitle>
                <CardDescription>Current statistics and information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm dark:text-gray-400 light:text-gray-500">Total Value Locked</span>
                    <span className="font-medium dark:text-white light:text-gray-900">{pool.tvl}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm dark:text-gray-400 light:text-gray-500">Annual Percentage Yield</span>
                    <span className="px-2.5 py-0.5 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      {pool.apy}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm dark:text-gray-400 light:text-gray-500">Utilization Rate</span>
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-gray-200 rounded-full mr-2">
                        <div 
                          className="h-full bg-indigo-600 rounded-full" 
                          style={{ width: `${pool.utilization}%` }}
                        ></div>
                      </div>
                      <span className="text-sm dark:text-gray-300 light:text-gray-700">{pool.utilization}%</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm dark:text-gray-400 light:text-gray-500">Network</span>
                    <span className="font-medium dark:text-white light:text-gray-900">{pool.network}</span>
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

export default PoolDetail;
