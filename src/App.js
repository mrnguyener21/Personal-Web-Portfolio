import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { About, Resume, Work, NavBar } from './components'

const App = () => {
    return (
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </Router>
    );
}

export default App;
