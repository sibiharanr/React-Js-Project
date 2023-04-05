import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Menu from './Menu/Menu';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';

import React from 'react'

function App() {
  return (
    <div style={{backgroundColor:"azure",opacity:"90%"}}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" index element={<Signup/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App