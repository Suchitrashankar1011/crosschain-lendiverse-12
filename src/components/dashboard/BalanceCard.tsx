
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BalanceCardProps {
  title: string;
  value: string;
  subtext?: string;
  variant?: 'default' | 'success' | 'info';
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  title,
  value,
  subtext,
  variant = 'default'
}) => {
  const getBgColor = () => {
    switch (variant) {
      case 'success':
        return 'dark:bg-green-900/10 light:bg-green-50';
      case 'info':
        return 'dark:bg-blue-900/10 light:bg-blue-50';
      default:
        return '';
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case 'success':
        return 'text-green-500';
      case 'info':
        return 'text-blue-500';
      default:
        return '';
    }
  };

  return (
    <Card className={`border dark:border-lending-border light:border-gray-200 dark:bg-lending-card light:bg-white shadow-sm ${getBgColor()}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium dark:text-gray-400 light:text-gray-500">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold dark:text-white light:text-gray-900">
          {value}
        </div>
        {subtext && (
          <p className={`text-sm mt-1 dark:text-gray-400 light:text-gray-500 ${getTextColor()}`}>
            {subtext}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default BalanceCard;
