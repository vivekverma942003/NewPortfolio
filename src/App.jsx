import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Portfolio from './pages/portfolio/portfolio'
import Home from './pages/home/home'
import Themes from './components/themes';

function App() {
 

  return (
   <BrowserRouter>
   <Navbar/>
   <Themes/>
   <Routes>
    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='portfolio' element={<Portfolio/>}/>
    
   </Routes>
   
   </BrowserRouter>
  )
}

export default App
