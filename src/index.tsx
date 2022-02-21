import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'
import { App } from './App'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 100,
          type: 'deposit',
          category: 'donate',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Transaction 2',
          amount: 100,
          type: 'withdraw',
          category: 'beer',
          createdAt: new Date()
        },
        {
          id: 3,
          title: 'Transaction 3',
          amount: 10000,
          type: 'deposit',
          category: 'salary',
          createdAt: new Date()
        },
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
