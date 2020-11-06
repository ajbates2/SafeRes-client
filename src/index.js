import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faBell, faEdit, faEllipsisH, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

library.add(
  faCheckSquare,
  faBell,
  faEdit,
  faEllipsisH,
  faTimes,
  faCheck,
)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);