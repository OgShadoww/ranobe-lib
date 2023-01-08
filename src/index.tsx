import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { setupStore } from './app/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <HashRouter>
        <App/>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
