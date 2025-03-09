
import React from 'react';
import { format } from 'date-fns';
import { useTransactionStore } from '@/stores/transactionStore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { TrendingUp, TrendingDown } from 'lucide-react';

const PortfolioHistory = () => {
  const { portfolioHistory } = useTransactionStore();
  
  // Sort by date (newest first)
  const sortedHistory = [...portfolioHistory].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  // Calculate change from previous data point
  const historyWithChanges = sortedHistory.map((item, index) => {
    if (index === sortedHistory.length - 1) {
      return { ...item, change: 0 }; // First entry has no previous to compare
    }
    
    const nextItem = sortedHistory[index + 1]; // Next in array is actually previous in time (sorted newest first)
    const change = item.totalBalance - nextItem.totalBalance;
    
    return {
      ...item,
      change
    };
  });
  
  return (
    <Card className="border dark:border-lending-border light:border-gray-200 dark:bg-lending-card light:bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold dark:text-white light:text-gray-900">Portfolio History</CardTitle>
        <CardDescription>Track your portfolio changes over time</CardDescription>
      </CardHeader>
      <CardContent>
        {historyWithChanges.length <= 1 ? (
          <div className="text-center py-6 dark:text-gray-400 light:text-gray-500">
            Not enough history data. More data will appear as you make transactions.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Total Balance</TableHead>
                  <TableHead>Supplied</TableHead>
                  <TableHead>Borrowed</TableHead>
                  <TableHead>Change</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {historyWithChanges.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {format(new Date(item.date), 'MMM dd, yyyy - HH:mm')}
                    </TableCell>
                    <TableCell>{item.totalBalance.toFixed(3)} ETH</TableCell>
                    <TableCell>{item.supplied.toFixed(3)} ETH</TableCell>
                    <TableCell>{item.borrowed.toFixed(3)} ETH</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {item.change > 0 ? (
                          <>
                            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                            <span className="text-green-500">+{item.change.toFixed(3)} ETH</span>
                          </>
                        ) : item.change < 0 ? (
                          <>
                            <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                            <span className="text-red-500">{item.change.toFixed(3)} ETH</span>
                          </>
                        ) : (
                          <span className="text-gray-500">0.000 ETH</span>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PortfolioHistory;
