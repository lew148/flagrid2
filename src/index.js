import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css';
import 'styling/general.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { register } from './serviceWorker';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootElement);

register();

