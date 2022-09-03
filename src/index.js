import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TopMenu from "./components/Top-menu";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <TopMenu />
      <App />
  </React.StrictMode>
);


