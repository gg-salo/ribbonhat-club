import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";



ReactDOM.render(
  <Fragment>
    <App />
  </Fragment>,
  document.getElementById('root')
);

