import React, { createContext } from 'react';
import {Routes, Route} from 'react-router-dom';
import "./styles.css";
import Navigation from './Components/NavigationBar';
import Hero from './Components/Hero';
import DisplayBakery from './Components/DisplayBakery'
import About from './Components/About';
import Contact from './Components/Contact';
import { ShopContextProvider } from './Context/ShoppingCartContext';

export const CartCount = createContext(0)

export default function App() {
  return (
    <>
        <ShopContextProvider>
          <Navigation />
          {/* <Hero /> */}
          <Routes>
            <Route path='/' element={<Hero/>} />
            <Route path='/Menu' element={<DisplayBakery/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>} />
          </Routes>

{/* make separate footer component */}
          <footer className="footer">
            <p>123 Address Avenue, Florida, USA</p>
            <p>Bakeryuncommon@email.com</p>
            <p>555-555-555</p>
              <ul className="footer-list">
                <p>licenses</p>
                <p>menu</p>
              </ul>
              <p>Site created by David</p>
          </footer>
          </ShopContextProvider>
    </>
    )
}
//Need to set up sign up and login verification 
