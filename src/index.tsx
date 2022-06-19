import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  

  seeds(server) {
    server.db.loadData({
      // always the name of the model, but in plural
      transactions: [
        {
          id: 1,
          title: 'Website Freelance',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2022-03-12 09:19:30'),
        },

        {
          id: 2,
          title: 'Rent',
          type: 'withdraw',
          category: 'Home',
          amount: 900,
          createdAt: new Date('2021-04-12 09:19:30'),
        },

        {
          id: 3,
          title: 'Mechanic',
          type: 'withdraw',
          category: 'Car',
          amount: 1390,
          createdAt: new Date('2022-03-18 09:19:30'),
        },

      ],
    })
  },
  

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      // schema.( qual a 'tabela', e quais o valores a ser inserido na tabela)
      return schema.create('transaction', data);
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);
