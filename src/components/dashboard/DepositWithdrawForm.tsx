
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from "@/hooks/use-toast";
import { useTransactionStore } from '@/stores/transactionStore';

type ActionType = 'deposit' | 'withdraw' | 'borrow' | 'lend';

const DepositWithdrawForm = () => {
  const [tab, setTab] = useState<ActionType>('deposit');
  const [amount, setAmount] = useState('0.000');
  const [sliderValue, setSliderValue] = useState(0);
  const maxAmount = 0.2;
  const { addTransaction } = useTransactionStore();
  
  const handleSliderChange = (value: number[]) => {
    const percentage = value[0];
    setSliderValue(percentage);
    const calculatedAmount = (percentage / 100 * maxAmount).toFixed(3);
    setAmount(calculatedAmount);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
      const percentage = Math.min(parseFloat(value) / maxAmount * 100, 100);
      setSliderValue(isNaN(percentage) ? 0 : percentage);
    }
  };
  
  const handleMaxClick = () => {
    setAmount(maxAmount.toString());
    setSliderValue(100);
  };
  
  const getActionText = () => {
    switch (tab) {
      case 'deposit': return 'Deposit to Base';
      case 'withdraw': return 'Withdraw from Base';
      case 'borrow': return 'Borrow from Base';
      case 'lend': return 'Lend to Base';
    }
  };
  
  const handleSubmit = () => {
    if (parseFloat(amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter an amount greater than 0",
        variant: "destructive"
      });
      return;
    }
    
    const timestamp = new Date();
    
    addTransaction({
      id: `tx-${Date.now()}`,
      type: tab,
      network: 'Base',
      amount: tab === 'withdraw' || tab === 'borrow' ? `-${amount}` : `+${amount}`,
      timeAgo: 'Just now',
      timestamp: timestamp.toISOString(),
    });
    
    toast({
      title: `${tab.charAt(0).toUpperCase() + tab.slice(1)} Successful`,
      description: `${amount} ETH has been ${tab}${tab === 'deposit' || tab === 'lend' ? 'ed to' : 'ed from'} Base.`,
    });
    
    // Reset form
    setAmount('0.000');
    setSliderValue(0);
  };
  
  return (
    <Card className="border dark:border-lending-border light:border-gray-200 dark:bg-lending-card light:bg-white">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold dark:text-white light:text-gray-900">Actions</CardTitle>
        <CardDescription>Deposit, withdraw, borrow or lend from pools</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="deposit" value={tab} onValueChange={(value) => setTab(value as ActionType)}>
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="deposit">Deposit</TabsTrigger>
            <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
            <TabsTrigger value="borrow">Borrow</TabsTrigger>
            <TabsTrigger value="lend">Lend</TabsTrigger>
          </TabsList>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-gray-300 light:text-gray-700">
                Amount
              </label>
              {tab === 'withdraw' && (
                <div className="flex items-end justify-between mb-2">
                  <div className="text-sm dark:text-gray-400 light:text-gray-500">
                    Available: {maxAmount} ETH on Base
                  </div>
                </div>
              )}
              {tab === 'borrow' && (
                <div className="flex items-end justify-between mb-2">
                  <div className="text-sm dark:text-gray-400 light:text-gray-500">
                    Borrow Limit: {maxAmount} ETH on Base
                  </div>
                </div>
              )}
              <div className="flex space-x-2">
                <Input
                  type="text"
                  value={amount}
                  onChange={handleInputChange}
                  className="dark:bg-lending-darker light:bg-gray-50"
                />
                <Button variant="outline" onClick={handleMaxClick}>Max</Button>
              </div>
            </div>
            
            <div className="pt-4">
              <div className="flex justify-between mb-2 text-sm">
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
              </div>
              <Slider
                value={[sliderValue]}
                max={100}
                step={1}
                onValueChange={handleSliderChange}
              />
            </div>
            
            <div className="flex justify-between items-center pt-2 text-sm">
              <span className="dark:text-gray-400 light:text-gray-500">Network Fee</span>
              <span className="dark:text-gray-300 light:text-gray-700">~0.001 ETH</span>
            </div>
            
            <Button 
              className="w-full mt-4 bg-gradient-to-r from-lending-primary to-lending-secondary"
              onClick={handleSubmit}
            >
              {getActionText()}
            </Button>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DepositWithdrawForm;
