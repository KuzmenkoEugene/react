import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const list = [
  {
    id: 1,
    title: `Task 1`
  },
  {
    id: 2,
    title: `Task 2`
  },
  {
    id: 3,
    title: `Task 3`
  },
  {
    id: 4,
    title: `Task 4`
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App list={list} />
  </React.StrictMode>
);


reportWebVitals();
