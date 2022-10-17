import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
const App =()=> {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
      <Services/>
    </>
  )
}

export default App