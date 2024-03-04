import React from 'react';
import App from './App';
import './assets/css/style.css';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>,
    document.getElementById('root')
  );
reportWebVitals();
