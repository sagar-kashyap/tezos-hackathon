import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NextUIProvider } from '@nextui-org/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <NextUIProvider>
  <div className="w-screen h-screen dark text-foreground bg-background px-8 items-start justify-center">
        <App />
      </div>  
  </NextUIProvider>
  </React.StrictMode>
  
);


