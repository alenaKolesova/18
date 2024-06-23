import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className='wrapper'>

    <div className='mobile-screen'>
      <App />
    </div>
  </div >
);