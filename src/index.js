// Import React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// Import Semantic
import 'semantic-ui-css/semantic.min.css';
// Import Stylesheet
import './index.css';
// Import Components
import App from './pages/App/App';
import * as serviceWorker from './serviceWorker';
// Import Dependencies
import 'react-datetime/css/react-datetime.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
