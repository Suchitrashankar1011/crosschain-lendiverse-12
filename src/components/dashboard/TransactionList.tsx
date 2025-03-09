
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowDownLeft, ArrowUpRight, RefreshCw, ArrowRight } from 'lucide-react';
import { useTransactionStore } from '@/stores/transactionStore';
import { formatDistanceToNow } from 'date-fns';

const TransactionList = () => {
  const { transactions } = useTransactionStore();

  // Helper function to get the correct icon
  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'deposit':
        return <ArrowDownLeft className="h-5 w-5" />;
      case 'withdraw':
        return <ArrowUpRight className="h-5 w-5" />;
      case 'borrow':
        return <ArrowRight className="h-5 w-5" />;
      case 'lend':
        return <RefreshCw className="h-5 w-5" />;
      default:
        return <ArrowDownLeft className="h-5 w-5" />;
    }
  };

  // Helper function to get the background color
  const getTransactionBackground = (type: string) => {
    switch (type) {
      case 'deposit':
        return 'bg-green-100 text-green-600';
      case 'withdraw':
        return 'bg-red-100 text-red-600';
      case 'borrow':
        return 'bg-amber-100 text-amber-600';
      case 'lend':
        return 'bg-blue-100 text-blue-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  // Helper function to get the text color
  const getTransactionTextColor = (type: string) => {
    switch (type) {
      case 'deposit':
      case 'lend':
        return 'text-green-500';
      case 'withdraw':
      case 'borrow':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  // Helper function to get the transaction description
  const getTransactionDescription = (type: string, network: string) => {
    switch (type) {
      case 'deposit':
        return `Deposit on ${network}`;
      case 'withdraw':
        return `Withdrawal on ${network}`;
      case 'borrow':
        return `Borrowed from ${network}`;
      case 'lend':
        return `Lent to ${network}`;
      default:
        return `Transaction on ${network}`;
    }
  };

  // Sort transactions by timestamp (newest first)
  const sortedTransactions = [...transactions].sort((a, b) => {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });

  return (
    <Card className="border dark:border-lending-border light:border-gray-200 dark:bg-lending-card light:bg-white">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold dark:text-white light:text-gray-900">Recent Transactions</CardTitle>
        <CardDescription>Your recent lending and borrowing activity</CardDescription>
      </CardHeader>
      <CardContent>
        {sortedTransactions.length === 0 ? (
          <div className="text-center py-6 dark:text-gray-400 light:text-gray-500">
            No transactions yet. Start by depositing, withdrawing, borrowing or lending.
          </div>
        ) : (
          <div className="space-y-5">
            {sortedTransactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${getTransactionBackground(tx.type)}`}>
                    {getTransactionIcon(tx.type)}
                  </div>
                  <div>
                    <p className="font-medium dark:text-white light:text-gray-900">
                      {getTransactionDescription(tx.type, tx.network)}
                    </p>
                    <p className="text-sm dark:text-gray-400 light:text-gray-500">
                      {tx.timestamp ? formatDistanceToNow(new Date(tx.timestamp), { addSuffix: true }) : tx.timeAgo}
                    </p>
                  </div>
                </div>
                <div className={`font-medium ${getTransactionTextColor(tx.type)}`}>
                  {tx.amount} ETH
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TransactionList;
