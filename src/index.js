import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PaletteProvider } from './contexts/PaletteContext';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from './contexts/GlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <PaletteProvider>
          <App />
        </PaletteProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
