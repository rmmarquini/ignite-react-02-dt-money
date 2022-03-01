import { useState } from 'react'
import Modal from 'react-modal'

import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { NewTransactionModal } from './components/NewTransactionModal'

import { GlobalStyle } from "./styles/global"

import { TransactionsProvider } from './hooks/useTransactions'

// Defines the application's main DOM element to disable users action
// when the modal is opened. This enable accuracy on accessibility features.
Modal.setAppElement('#root')

export function App() {

  // State and methods to control the NewTransactionModal
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}
