import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import AboutUs from './pages/AboutUs'
import Government from './pages/Government'
import WhatWeDo from './pages/Volunteer'
import Impact from './pages/Impact'
import Media from './pages/Media'
import Career from './pages/Career'
import Donate from './pages/Donate'
import Apply from './pages/Apply'
import Footer from './components/Footer'
import OurWork from './pages/OurWork'
import OurModel from './pages/OurModel'
import Products from './pages/Products'
import Stories from './pages/Stories'
import Volunteer from './pages/Volunteer'
import Contact from './pages/Contact'
import Whatsapp from './components/Whatsapp'

const App = () => {
  return (
    <div className='px-3 sm:px-[4vw] md:px-[5vw] lg:px-[6vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/ourwork' element={<OurWork />} />
        <Route path='/our-model' element={<OurModel />} />
        <Route path='/stories' element={<Stories />} />
        <Route path='/government' element={<Government />} />
        <Route path='/volunteer' element={<Volunteer />} />
        <Route path='/apply' element={<Apply />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/donate' element={<Donate />} />
      </Routes>
      <Whatsapp />
      <Footer />
    </div>
  )
}

export default App

