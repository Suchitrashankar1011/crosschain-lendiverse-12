
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { month: 'Jan', value: 0.35 },
  { month: 'Feb', value: 0.7 },
  { month: 'Mar', value: 0.85 },
  { month: 'Apr', value: 0.65 },
  { month: 'May', value: 0.9 },
  { month: 'Jun', value: 1.05 },
  { month: 'Jul', value: 1.4 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="dark:bg-lending-dark light:bg-white p-3 border dark:border-lending-border light:border-gray-200 rounded-md shadow-md">
        <p className="text-sm font-medium">{`${label}: ${payload[0].value} ETH`}</p>
      </div>
    );
  }
  return null;
};

const OverviewChart = () => {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.1)" />
          <XAxis 
            dataKey="month" 
            tick={{ fill: '#94a3b8' }} 
            axisLine={{ stroke: 'rgba(100, 116, 139, 0.1)' }}
          />
          <YAxis 
            tick={{ fill: '#94a3b8' }}
            axisLine={{ stroke: 'rgba(100, 116, 139, 0.1)' }}
            tickFormatter={(value) => `${value} ETH`}
            domain={[0, 'dataMax + 0.1']}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#4f46e5" 
            strokeWidth={2} 
            dot={{ stroke: '#4f46e5', strokeWidth: 2, r: 4, fill: '#fff' }}
            activeDot={{ r: 6, stroke: '#4f46e5', strokeWidth: 2, fill: '#fff' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverviewChart;
