import React from 'react';
import { About, Project, NavBar, Contact, Welcome } from './components'

const App = () => {


  return (
  <>
      <NavBar/>
      <a name='top'></a>
      <Welcome />
      <a name='about'></a>
      <About/>
      <a name='project'></a>
      <Project/>
      <a name='contact'></a>
      <Contact />
    </>
  );
  
}

  export default App;
  
