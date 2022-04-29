import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PaletteProvider } from './contexts/PaletteContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PaletteProvider>
        <App />
      </PaletteProvider>
    </BrowserRouter>
  </React.StrictMode>
);
