import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* 컴포넌트 실제 구현은 App.js에서 구현한다 */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
