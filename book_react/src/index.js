import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux'; // 리덕스 store
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules'

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
