
import React, { useState } from 'react';
import { format } from 'date-fns';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';
import { useTransactionStore } from '@/stores/transactionStore';
import { Button } from '@/components/ui/button';

type TimeRange = '1W' | '1M' | '3M' | 'ALL';

const PortfolioOverview = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('ALL');
  const { portfolioHistory } = useTransactionStore();
  
  const getFilteredData = () => {
    if (timeRange === 'ALL') return portfolioHistory;
    
    const now = new Date();
    let cutoffDate: Date;
    
    switch (timeRange) {
      case '1W':
        cutoffDate = new Date(now.setDate(now.getDate() - 7));
        break;
      case '1M':
        cutoffDate = new Date(now.setMonth(now.getMonth() - 1));
        break;
      case '3M':
        cutoffDate = new Date(now.setMonth(now.getMonth() - 3));
        break;
      default:
        cutoffDate = new Date(0); // Beginning of time
    }
    
    return portfolioHistory.filter(
      item => new Date(item.date) >= cutoffDate
    );
  };
  
  const filteredData = getFilteredData();
  
  // Format the date for display
  const formattedData = filteredData.map(item => ({
    ...item,
    formattedDate: format(new Date(item.date), 'MMM dd')
  }));
  
  // Get min and max values for y-axis domain with 10% padding
  const allValues = formattedData.flatMap(item => [item.totalBalance, item.supplied, item.borrowed]);
  const minValue = Math.max(0, Math.min(...allValues) * 0.9);
  const maxValue = Math.max(...allValues) * 1.1;
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="dark:bg-lending-dark light:bg-white p-3 border dark:border-lending-border light:border-gray-200 rounded-md shadow-md">
          <p className="text-sm font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={`item-${index}`} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value.toFixed(3)} ETH
            </p>
          ))}
        </div>
      );
    }
    return null;
  };
  
  return (
    <div>
      <div className="flex justify-end mb-4 space-x-2">
        <Button 
          variant={timeRange === '1W' ? 'default' : 'outline'} 
          onClick={() => setTimeRange('1W')}
          size="sm"
        >
          1W
        </Button>
        <Button 
          variant={timeRange === '1M' ? 'default' : 'outline'} 
          onClick={() => setTimeRange('1M')}
          size="sm"
        >
          1M
        </Button>
        <Button 
          variant={timeRange === '3M' ? 'default' : 'outline'} 
          onClick={() => setTimeRange('3M')}
          size="sm"
        >
          3M
        </Button>
        <Button 
          variant={timeRange === 'ALL' ? 'default' : 'outline'} 
          onClick={() => setTimeRange('ALL')}
          size="sm"
        >
          All
        </Button>
      </div>
      
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={formattedData}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorSupplied" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorBorrowed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.1)" />
            <XAxis 
              dataKey="formattedDate" 
              tick={{ fill: '#94a3b8' }} 
              axisLine={{ stroke: 'rgba(100, 116, 139, 0.1)' }}
            />
            <YAxis 
              tick={{ fill: '#94a3b8' }}
              axisLine={{ stroke: 'rgba(100, 116, 139, 0.1)' }}
              tickFormatter={(value) => `${value} ETH`}
              domain={[minValue, maxValue]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="totalBalance" 
              stroke="#4f46e5" 
              fillOpacity={1}
              fill="url(#colorBalance)"
              name="Total Balance"
            />
            <Area 
              type="monotone" 
              dataKey="supplied" 
              stroke="#10b981" 
              fillOpacity={1}
              fill="url(#colorSupplied)"
              name="Supplied"
            />
            <Area 
              type="monotone" 
              dataKey="borrowed" 
              stroke="#ef4444" 
              fillOpacity={1}
              fill="url(#colorBorrowed)"
              name="Borrowed"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PortfolioOverview;
