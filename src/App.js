import React from 'react';
import { About, Projects, NavBar, Contact, Welcome, HomeButton } from './components'

// import ScrollAnimation from 'react-animate-on-scroll';

import styles from './App.module.scss'
const App = () => {

  return (
  <>
    <div className={styles.container}>
      <NavBar />
      <Welcome />
      {/* <ScrollAnimation animateIn='fadeIn'> */}
        <About/>
      {/* </ScrollAnimation> */}
      <Projects/>
      <Contact /> 
      <HomeButton/>
    </div>
    </>
  );
  
}

  export default App;
  
