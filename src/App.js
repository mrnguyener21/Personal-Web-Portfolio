import React from 'react';
import { About, Projects, NavBar, Contact, Welcome, HomeButton } from './components'

import styles from './App.module.scss';

const App = () => (
  <>
    <NavBar />
    <Welcome />
    <About/>
    {/* <Projects/> */}
    <Contact /> 
    <HomeButton/>
  </>
);

export default App;
  
