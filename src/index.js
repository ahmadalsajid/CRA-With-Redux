import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = "http://api-dev.akly.co/";

ReactDOM.render(
  <App />
  , document.getElementById('root')
)
registerServiceWorker()