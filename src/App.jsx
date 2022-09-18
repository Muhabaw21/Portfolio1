import React from 'react'
import Contact from "./components/contact/Contact";
import Topbar from "./components/topbar/Topbar"
import Portfolio from "./components/portfolio/Portfolio"
import MenuM from './components/menu/MenuM';
import Testimonials from "./components/testimonials/Testimonials";
import Work from "./components/works/Work"
import Intro from "./components/intro/Intro";
import "./app.scss"
import { useState } from 'react';
import { Menu } from '@material-ui/core';
import Integrate from './components/components/Integrate';
const App = () => {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="po">
    <Topbar menuOpen={menuOpen}  setMenuOpen={setMenuOpen}/>
    <MenuM  menuOpen={menuOpen}  setMenuOpen={setMenuOpen} />
    <div className="se">
    <Portfolio/>
    <Contact/>
    <Testimonials/>
    <Intro/>
    <Work/>
    <Integrate />
    </div>
      </div>
      
  )
}
m
export default App
