
import React from 'react';
import { useTransactionStore } from '@/stores/transactionStore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const PortfolioBreakdown = () => {
  const { getCurrentPortfolioData } = useTransactionStore();
  const currentData = getCurrentPortfolioData();
  
  const pieData = [
    { name: 'Supplied', value: currentData.supplied, color: '#10b981' },
    { name: 'Borrowed', value: currentData.borrowed, color: '#ef4444' },
  ];
  
  // Filter out zero values to prevent empty pie slices
  const filteredPieData = pieData.filter(item => item.value > 0);
  
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="dark:bg-lending-dark light:bg-white p-3 border dark:border-lending-border light:border-gray-200 rounded-md shadow-md">
          <p className="text-sm font-medium" style={{ color: payload[0].payload.color }}>
            {payload[0].name}: {payload[0].value.toFixed(3)} ETH ({(payload[0].percent * 100).toFixed(1)}%)
          </p>
        </div>
      );
    }
    return null;
  };
  
  return (
    <Card className="border dark:border-lending-border light:border-gray-200 dark:bg-lending-card light:bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold dark:text-white light:text-gray-900">Portfolio Breakdown</CardTitle>
        <CardDescription>Current allocation of your assets</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] flex flex-col justify-center">
          {filteredPieData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={filteredPieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {filteredPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="text-center py-6 dark:text-gray-400 light:text-gray-500">
              No portfolio data to display. Start by depositing or borrowing.
            </div>
          )}
        </div>
        
        <div className="mt-4 space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#10b981] mr-2"></div>
              <span className="text-sm dark:text-gray-300 light:text-gray-700">Supplied</span>
            </div>
            <span className="font-medium dark:text-white light:text-gray-900">{currentData.supplied.toFixed(3)} ETH</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#ef4444] mr-2"></div>
              <span className="text-sm dark:text-gray-300 light:text-gray-700">Borrowed</span>
            </div>
            <span className="font-medium dark:text-white light:text-gray-900">{currentData.borrowed.toFixed(3)} ETH</span>
          </div>
          
          <div className="pt-2 border-t dark:border-gray-700 light:border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium dark:text-gray-300 light:text-gray-700">Total Balance</span>
              <span className="font-medium dark:text-white light:text-gray-900">{currentData.totalBalance.toFixed(3)} ETH</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioBreakdown;
