import React from 'react';
import {Routes, Route} from 'react-router-dom';
import "./styles.css";
import Navigation from './Components/NavigationBar';
import Hero from './Components/Hero';
import DisplayBakery from './Components/Menu'

export default function App() {
  return (
    <>
      <Navigation />
      {/* <Hero /> */}
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/Menu' element={<DisplayBakery/>}/>
        <Route path='/About'/>
        <Route path='/Contact'/>
      </Routes>
    </>
    )
}
