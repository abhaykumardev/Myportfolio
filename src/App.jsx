import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer.jsx'
const App = () => {
  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
