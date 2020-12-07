import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ResListProvider } from './contexts/reservationContext';

ReactDOM.render(
  <BrowserRouter>
    <ResListProvider>
      <App />
    </ResListProvider>
  </BrowserRouter>,
  document.getElementById('root')
);