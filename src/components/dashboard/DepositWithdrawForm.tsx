
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from "@/hooks/use-toast";

const DepositWithdrawForm = () => {
  const [tab, setTab] = useState('deposit');
  const [amount, setAmount] = useState('0.000');
  const [sliderValue, setSliderValue] = useState(0);
  const maxAmount = 0.2;
  
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
  
  const handleSubmit = () => {
    const actionType = tab === 'deposit' ? 'Deposit to' : 'Withdraw from';
    toast({
      title: `${actionType} Base`,
      description: `${amount} ETH ${tab === 'deposit' ? 'deposited' : 'withdrawn'} successfully.`,
    });
  };
  
  return (
    <Card className="border dark:border-lending-border light:border-gray-200 dark:bg-lending-card light:bg-white">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold dark:text-white light:text-gray-900">Actions</CardTitle>
        <CardDescription>Deposit or withdraw from pools</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="deposit" value={tab} onValueChange={setTab}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="deposit">Deposit</TabsTrigger>
            <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
          </TabsList>
          
          <TabsContent value="deposit" className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-gray-300 light:text-gray-700">
                Amount
              </label>
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
            
            <Button 
              className="w-full mt-6 bg-gradient-to-r from-lending-primary to-lending-secondary"
              onClick={handleSubmit}
            >
              Deposit to Base
            </Button>
          </TabsContent>
          
          <TabsContent value="withdraw" className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-gray-300 light:text-gray-700">
                Amount
              </label>
              <div className="flex items-end justify-between mb-2">
                <div className="text-sm dark:text-gray-400 light:text-gray-500">
                  Available: {maxAmount} ETH on Base
                </div>
              </div>
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
              Withdraw from Base
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DepositWithdrawForm;
