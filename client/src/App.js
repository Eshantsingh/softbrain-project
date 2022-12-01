import React from 'react'
import {Route} from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Login from './components/Login';

import Footer from './components/Footer';
const App =()=> {
  return (
    <>
      <Navbar/>

      <Route exact path="/">
      <Home />
      </Route>

      <Route path="/about">
      <About />
      </Route>

      <Route path="/contact">
      <Contact />
      </Route>

      <Route path='/services'>
      <Services />
      </Route>
      
      <Route path='/login'>
      <Login />
      </Route>
      
    

      <Footer/>
    </>
  )
}

export default App