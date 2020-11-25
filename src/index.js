import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faEllipsisH, faTimes, faPlusSquare, faCheck } from '@fortawesome/free-solid-svg-icons';
import { ResListProvider } from './contexts/reservationContext';

library.add(
  faBell,
  faEllipsisH,
  faTimes,
  faPlusSquare,
  faCheck
)

ReactDOM.render(
  <BrowserRouter>
    <ResListProvider>
      <App />
    </ResListProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

ServiceWorker.unregister();