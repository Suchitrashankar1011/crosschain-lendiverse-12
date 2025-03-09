
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

export interface PortfolioDataPoint {
  date: string;
  totalBalance: number;
  supplied: number;
  borrowed: number;
}

interface TransactionStore {
  transactions: Transaction[];
  portfolioHistory: PortfolioDataPoint[];
  addTransaction: (transaction: Transaction) => void;
  clearTransactions: () => void;
  getCurrentPortfolioData: () => PortfolioDataPoint;
}

// Initial transaction data - empty by default as requested by the user
const initialTransactions: Transaction[] = [];

// Initial portfolio data with starting values
const initialPortfolioHistory: PortfolioDataPoint[] = [
  {
    date: new Date().toISOString(),
    totalBalance: 1.5,
    supplied: 0.85,
    borrowed: 0,
  }
];

export const useTransactionStore = create<TransactionStore>()(
  persist(
    (set, get) => ({
      transactions: initialTransactions,
      portfolioHistory: initialPortfolioHistory,
      addTransaction: (transaction) => {
        // Add the transaction to the list
        set((state) => ({ 
          transactions: [...state.transactions, transaction] 
        }));
        
        // Update the portfolio data based on the transaction
        const currentData = get().getCurrentPortfolioData();
        const amount = parseFloat(transaction.amount.replace(/[+\-]/g, ''));
        
        let newTotalBalance = currentData.totalBalance;
        let newSupplied = currentData.supplied;
        let newBorrowed = currentData.borrowed;
        
        switch (transaction.type) {
          case 'deposit':
            newTotalBalance += amount;
            newSupplied += amount;
            break;
          case 'withdraw':
            newTotalBalance -= amount;
            newSupplied -= amount;
            break;
          case 'borrow':
            newBorrowed += amount;
            break;
          case 'lend':
            newBorrowed -= amount;
            break;
        }
        
        const newDataPoint: PortfolioDataPoint = {
          date: transaction.timestamp,
          totalBalance: parseFloat(newTotalBalance.toFixed(3)),
          supplied: parseFloat(newSupplied.toFixed(3)),
          borrowed: parseFloat(newBorrowed.toFixed(3)),
        };
        
        set((state) => ({
          portfolioHistory: [...state.portfolioHistory, newDataPoint]
        }));
      },
      clearTransactions: () => set({ transactions: [], portfolioHistory: initialPortfolioHistory }),
      getCurrentPortfolioData: () => {
        const { portfolioHistory } = get();
        return portfolioHistory.length > 0 
          ? portfolioHistory[portfolioHistory.length - 1]
          : initialPortfolioHistory[0];
      },
    }),
    {
      name: 'lending-transactions',
    }
  )
);
