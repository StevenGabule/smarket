import React from 'react';
import {Provider} from 'react-redux'
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store'
import App from './App';

render(
    <Provider store={store}>
      <App/>
    </Provider>,
  document.getElementById('root')
);
