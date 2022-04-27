import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PaletteProvider } from './contexts/PaletteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PaletteProvider>
      <App />
    </PaletteProvider>
  </React.StrictMode>
);
