import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux'; // 리덕스 store
import { Provider } from 'react-redux';
import rootReducer from './modules'

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
