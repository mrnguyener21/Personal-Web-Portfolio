import React from 'react';

import { About, Project, NavBar, Contact, Welcome } from './components'

const App = () => {
    return (
      <>
        <NavBar />
        <Welcome />
        <About />
        <Project />
        <Contact />
      </>
    );
}

export default App;
