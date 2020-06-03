import React from 'react';
import { About, Projects, NavBar, Contact, Welcome, HomeButton } from './components'

// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import styles from './App.module.scss'
const App = () => {

  return (
  <>
    <div className={styles.container}>
      <NavBar />
      <Welcome />
      <About/>
      <Projects/>
      <Contact /> 
      <HomeButton/>
    </div>
    </>
  );
  
}

  export default App;
  
