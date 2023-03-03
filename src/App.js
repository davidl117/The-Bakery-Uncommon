import React from 'react';
import {Routes, Route} from 'react-router-dom';
import "./styles.css";
import Navigation from './Components/NavigationBar';
import Hero from './Components/Hero';
import DisplayBakery from './Components/DisplayBakery'
import About from './Components/About';
import Contact from './Components/Contact';

export default function App() {
  return (
    <>
      <Navigation />
      {/* <Hero /> */}
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/Menu' element={<DisplayBakery/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </>
    )
}
//Need to set up sign up and login verification 
//need API for 