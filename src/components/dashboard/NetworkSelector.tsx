
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const networks = [
  { id: 'base', name: 'Base', color: '#0052FF' },
  { id: 'optimism', name: 'Optimism', color: '#FF0420' },
  { id: 'arbitrum', name: 'Arbitrum', color: '#28A0F0' },
];

interface NetworkSelectorProps {
  selectedNetwork?: string;
  onNetworkChange?: (networkId: string) => void;
}

const NetworkSelector: React.FC<NetworkSelectorProps> = ({ 
  selectedNetwork = 'base',
  onNetworkChange = () => {} 
}) => {
  const [selected, setSelected] = useState(selectedNetwork);
  
  const handleNetworkChange = (networkId: string) => {
    setSelected(networkId);
    onNetworkChange(networkId);
  };
  
  const selectedNetworkData = networks.find(n => n.id === selected) || networks[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-lg border dark:border-lending-border light:border-gray-200 px-4">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: selectedNetworkData.color }}></div>
            <span className="mr-2">{selectedNetworkData.name}</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuLabel>Select Network</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {networks.map((network) => (
          <DropdownMenuItem 
            key={network.id}
            onClick={() => handleNetworkChange(network.id)}
            className="cursor-pointer"
          >
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: network.color }}></div>
              <span>{network.name}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NetworkSelector;
