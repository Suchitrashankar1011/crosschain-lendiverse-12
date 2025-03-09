
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const pools = [
  {
    id: 'pool1',
    network: 'Base',
    networkColor: '#0052FF',
    asset: 'ETH',
    apy: '5.25%',
    tvl: '1,245.32 ETH',
    utilization: 68
  },
  {
    id: 'pool2',
    network: 'Optimism',
    networkColor: '#FF0420',
    asset: 'ETH',
    apy: '4.85%',
    tvl: '3,201.17 ETH',
    utilization: 75
  },
  {
    id: 'pool3',
    network: 'Arbitrum',
    networkColor: '#28A0F0',
    asset: 'ETH',
    apy: '4.32%',
    tvl: '5,432.91 ETH',
    utilization: 82
  }
];

const LendingPoolsTable = () => {
  return (
    <Card className="border dark:border-lending-border light:border-gray-200 dark:bg-lending-card light:bg-white">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold dark:text-white light:text-gray-900">Lending Pools</CardTitle>
        <CardDescription>Current rates across networks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b dark:border-lending-border light:border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-sm dark:text-gray-400 light:text-gray-500">Network</th>
                <th className="text-left py-3 px-4 font-medium text-sm dark:text-gray-400 light:text-gray-500">Asset</th>
                <th className="text-left py-3 px-4 font-medium text-sm dark:text-gray-400 light:text-gray-500">APY</th>
                <th className="text-left py-3 px-4 font-medium text-sm dark:text-gray-400 light:text-gray-500">TVL</th>
                <th className="text-left py-3 px-4 font-medium text-sm dark:text-gray-400 light:text-gray-500">Utilization</th>
                <th className="text-right py-3 px-4 font-medium text-sm dark:text-gray-400 light:text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {pools.map((pool) => (
                <tr key={pool.id} className="border-b dark:border-lending-border light:border-gray-200 last:border-0">
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: pool.networkColor }}></div>
                      <span className="dark:text-white light:text-gray-900">{pool.network}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 dark:text-white light:text-gray-900">{pool.asset}</td>
                  <td className="py-4 px-4">
                    <span className="px-2.5 py-0.5 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      {pool.apy}
                    </span>
                  </td>
                  <td className="py-4 px-4 dark:text-white light:text-gray-900">{pool.tvl}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-gray-200 rounded-full mr-2">
                        <div 
                          className="h-full bg-indigo-600 rounded-full" 
                          style={{ width: `${pool.utilization}%` }}
                        ></div>
                      </div>
                      <span className="text-sm dark:text-gray-400 light:text-gray-500">{pool.utilization}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <Button variant="outline" className="text-sm">View</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default LendingPoolsTable;
