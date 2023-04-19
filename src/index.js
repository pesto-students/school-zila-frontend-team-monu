import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TokenState } from "./contextApi";
// import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Common/Footer/Footer';
import './index.css';

ReactDOM.render(
  <>
    <TokenState>
      <App />
      <Footer />
    </TokenState>
  </>,
  document.getElementById('root')
);
