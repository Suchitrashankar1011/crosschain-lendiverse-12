
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

// Initial transaction data - empty by default as requested by the user
const initialTransactions: Transaction[] = [];

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
