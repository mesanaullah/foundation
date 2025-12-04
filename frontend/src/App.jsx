import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import AboutUs from './pages/AboutUs'
import Goverment from './pages/Goverment'
import WhatWeDo from './pages/WhatWeDo'
import Impact from './pages/Impact'
import Media from './pages/Media'
import Career from './pages/Career'
import Donate from './pages/Donate'
import Apply from './pages/Apply'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-3 sm:px-[4vw] md:px-[5vw] lg:px-[6vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/goverment' element={<Goverment />} />
        <Route path='/Whatwedo' element={<WhatWeDo />} />
        <Route path='/impact' element={<Impact />} />
        <Route path='/media' element={<Media />} />
        <Route path='/career' element={<Career />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/apply' element={<Apply />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

