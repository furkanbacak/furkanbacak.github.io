import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Global CSS styles
import App from './App.jsx'; // Main App component

// Find the root DOM element
const rootElement = document.getElementById('root');

// Create the React root and render the app
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);