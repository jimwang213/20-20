import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomeN from './HomeN';
import Program from './Program';
import ProgramSchool from './ProgramSchool'
import ScrollToTop from './ScrollToTop'

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <div>
    <ul>
    </ul>
        <Route exact path="/Program/:programId/:schoolId" component={ProgramSchool} />
        <Route exact path="/Program/:programId" component={Program} />
        <Route exact path="/" component={HomeN} />
    </div>
    <ScrollToTop/>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
