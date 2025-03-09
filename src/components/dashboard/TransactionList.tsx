
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';

interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal';
  network: string;
  amount: string;
  timeAgo: string;
}

const transactions: Transaction[] = [
  {
    id: 'tx1',
    type: 'deposit',
    network: 'Base',
    amount: '+0.25 ETH',
    timeAgo: '2 hours ago'
  },
  {
    id: 'tx2',
    type: 'withdrawal',
    network: 'Arbitrum',
    amount: '-0.1 ETH',
    timeAgo: '1 day ago'
  }
];

const TransactionList = () => {
  return (
    <Card className="border dark:border-lending-border light:border-gray-200 dark:bg-lending-card light:bg-white">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold dark:text-white light:text-gray-900">Recent Transactions</CardTitle>
        <CardDescription>Your recent lending and borrowing activity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                  tx.type === 'deposit' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-red-100 text-red-600'
                }`}>
                  {tx.type === 'deposit' ? (
                    <ArrowDownLeft className="h-5 w-5" />
                  ) : (
                    <ArrowUpRight className="h-5 w-5" />
                  )}
                </div>
                <div>
                  <p className="font-medium dark:text-white light:text-gray-900">
                    {tx.type === 'deposit' ? 'Deposit on ' : 'Withdrawal on '}{tx.network}
                  </p>
                  <p className="text-sm dark:text-gray-400 light:text-gray-500">{tx.timeAgo}</p>
                </div>
              </div>
              <div className={`font-medium ${
                tx.type === 'deposit' 
                  ? 'text-green-500' 
                  : 'text-red-500'
              }`}>
                {tx.amount}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionList;
