import React from 'react';
import { About, Project, NavBar, Contact, Welcome } from './components'

import styles from './App.module.scss'
const App = () => {


  return (
  <>
      <NavBar/>
      <a name='top'></a>
      <Welcome />
      <a name='about'></a>
      <div className={styles.buffer1}></div>
      <About/>
      <a name='project'></a>
      <div className={styles.buffer2}></div>
      <Project/>
      <Contact />
      <a name='contact'></a>
    </>
  );
  
}

  export default App;
  
