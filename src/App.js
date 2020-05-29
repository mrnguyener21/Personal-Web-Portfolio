import React from 'react';
import { About, Project, NavBar, Contact, Welcome } from './components'

import styles from './App.module.scss';
const App = () => {
    return (
      <>
        <a className = {styles.top} name='top'></a>
        <NavBar/>
        <Welcome />
        <About/>
        <Project/>
        <Contact />
      </>
    );
}

export default App;

