import React from 'react';
import {Routes, Route} from 'react-router-dom';
import "./styles.css";
import Navigation from './Components/NavigationBar';

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/'/>
        <Route path='/About'/>
        <Route path='/Contact'/>
        <Route path='/Gallery'/>
      </Routes>
    </>
    )
}
