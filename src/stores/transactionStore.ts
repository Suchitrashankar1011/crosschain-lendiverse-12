
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type TransactionType = 'deposit' | 'withdraw' | 'borrow' | 'lend';

export interface Transaction {
  id: string;
  type: TransactionType;
  network: string;
  amount: string;
  timeAgo: string;
  timestamp: string;
}

interface TransactionStore {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  clearTransactions: () => void;
}

// Initial transaction data
const initialTransactions: Transaction[] = [
  {
    id: 'tx1',
    type: 'deposit',
    network: 'Base',
    amount: '+0.25',
    timeAgo: '2 hours ago',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'tx2',
    type: 'withdraw',
    network: 'Arbitrum',
    amount: '-0.1',
    timeAgo: '1 day ago',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  }
];

export const useTransactionStore = create<TransactionStore>()(
  persist(
    (set) => ({
      transactions: initialTransactions,
      addTransaction: (transaction) => 
        set((state) => ({ 
          transactions: [...state.transactions, transaction] 
        })),
      clearTransactions: () => set({ transactions: [] }),
    }),
    {
      name: 'lending-transactions',
    }
  )
);
