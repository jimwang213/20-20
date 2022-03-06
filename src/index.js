import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomeN from './HomeN';
import Program from './Program';
import ProgramSchool from './ProgramSchool'
import ScrollToTop from './ScrollToTop'
import AboutUs from './AboutUs'
import Methodology from './Methodology'
import Home2 from './Home2'
import SignUp from './SignUp';
import './fonts/OpenSans-Bold.ttf'
import './fonts/OpenSans-Light.ttf'
import './fonts/OpenSans-Regular.ttf'
import { ChakraProvider } from "@chakra-ui/react"
import reactGA from 'react-ga';
// import auth from './auth.js';
import { v4 as uuidv4 } from 'uuid';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  )
}

const trackingId = "G-ZWTEGMFTF0"; // Replace with your Google Analytics tracking ID
reactGA.initialize(trackingId);
reactGA.set({
  userId: uuidv4(),
  // any data that is relevant to the user session
  // that you would like to track with google analytics
})

const routing = (
  <Router>
    <div>
    <ul>
    </ul>
        <Route exact path="/Program/:programId/:schoolId" component={ProgramSchool} />
        <Route exact path="/Program/:programId" component={Program} />
        <Route exact path="/" component={Home2} />
        <Route exact path="/AboutUs" component={AboutUs} />
        <Route exact path="/Methodology" component={Methodology} />
        <Route exact path="/SignUp" component={SignUp} />

    </div>
    <ScrollToTop/>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
