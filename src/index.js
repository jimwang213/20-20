import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Program from './Program';
import School from './School';
import ProgramInfo from './ProgramInfo';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <div>
    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/program">Programs</Link>
        </li>
        <li>
          <Link to="/School">School</Link>
        </li>
        <li>
          <Link to="/ProgramInfo">ProgramInfo</Link>
        </li>
    </ul>
        <Route path="/ProgramInfo" component={ProgramInfo} />
        <Route path="/Program" component={Program} />
        <Route path="/School" component={School} />
        <Route exact path="/" component={App} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
