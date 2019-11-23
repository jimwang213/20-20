import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './Home';
import Program from './Program';
import School from './School';
import ProgramInfo from './ProgramInfo';
import SchoolInfo from './SchoolInfo';
import SchoolProgram from './SchoolProgram'

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <div>
    <ul>
    </ul>
        <Route path="/SchoolProgram/:schoolId/:programId" component={SchoolProgram} />
        <Route path="/School/:schoolId" component={SchoolInfo} />
        <Route path="/Program/:programId" component={ProgramInfo} />
        <Route exact path="/Program" component={Program} />
        <Route exact path="/School" component={School} />
        <Route exact path="/" component={Home} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
