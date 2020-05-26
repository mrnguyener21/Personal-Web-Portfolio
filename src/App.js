import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { About, Resume, Project, NavBar, Contact, Skill, Welcome } from './components'

const App = () => {
    return (
      // <Router>
      //   <NavBar/>
      //   <Switch>
      //     <Route path="/resume">
      //       <Resume />
      //     </Route>
      //     <Route path="/Project">
      //       <Project />
      //     </Route>
      //     <Route path="/">
      //       <About />
      //     </Route>
      //   </Switch>
      // </Router>
      <div>
        <NavBar/>
        <Welcome/>
        <About/>
        <Skill/>
        <Project/>
        <Contact/>
      </div>
      
    );
}

export default App;
