import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import App from './component/app';
import reducer from './reducer/index.js';
import formValidator from './lib/form-validator.js';

let store = createStore(reducer, applyMiddleware(formValidator));

const container = document.createElement('div');
document.body.appendChild(container);
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  container);

