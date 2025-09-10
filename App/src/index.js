import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';   // we import App, not RegistrationForm directly

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
