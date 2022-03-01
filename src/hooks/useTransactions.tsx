import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import api from '../services/api';

interface Transaction {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

// In Typescript I could also use the type constructor Pick
// which implements the inverse logic of the Omit constructor
// For example: type TransactionInput = Pick<Transaction, 'title' | 'type' | 'amount' | 'category'>
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  /**
   * Creates a new transaction by getting the response from the API request. 
   * Using the immutability concept, set the transactions' Array through the 
   * spread operator, and add the new incoming transaction.
   * 
   * @param transactionInput TransactionInput
   */
  async function createTransaction(transactionInput: TransactionInput) {

    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })

    const transaction = response.data.transaction

    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )

}

/**
 * Export the TransactionsContext as a React Hook
 * 
 * @returns TransactionsContext
 */
export function useTransactions() {
  const context = useContext(TransactionsContext)
  return context
}