import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import Admin from './Pages/Admin'
import Navbar from './Components/Navbar'
import AdminDashboard from './Pages/AdminDashboard'
import AdminLogin from './Pages/AdminLogin'

const App = () => {
  return (
    <div className='px-3 sm:px-[4vw] md:px-[5vw] lg:px-[6vw]'>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Admin />} /> */}
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />


      </Routes>
    </div>
  )
}

export default App

