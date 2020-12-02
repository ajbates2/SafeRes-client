import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faEllipsisH, faTimes, faCheck, faBars, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ResListProvider } from './contexts/reservationContext';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

library.add(
  faBell,
  faEllipsisH,
  faTimes,
  faCheck,
  faBars,
  faPlus,
  faGithubAlt
)

ReactDOM.render(
  <BrowserRouter>
    <ResListProvider>
      <App />
    </ResListProvider>
  </BrowserRouter>,
  document.getElementById('root')
);