import React from 'react';
import { About, Project, NavBar, Contact, Welcome, HomeButton } from './components'

// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import styles from './App.module.scss'
const App = () => {

  return (
  <>
    <div className={styles.container}>
      <NavBar />
      <Welcome />
      <About/>
      <Project/>
      <Contact /> 
      <HomeButton/>
    </div>
    </>
  );
  
}

  export default App;
  
