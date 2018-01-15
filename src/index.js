import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';
import store from './store/store';

const main = (
  <Provider store={store}>
  	<App />
  </Provider>
);

ReactDOM.render(main, document.getElementById('container'));
registerServiceWorker();
