import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/navbar/Navbar'
import Home from './Pages/home/Home'
import AboutUs from './Pages/aboutUs/AboutUs'
import Login from './Pages/login/Login'
import Signup from './Pages/signup/Signup'
import Dashboard from './Pages/dashboard/Dashboard'


function App() {
  const [count, setCount] = useState(0)
  const baseUrl = 'https://mytaskz.onrender.com'

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/login' element={<Login baseUrl={baseUrl}/>}/>
        <Route path='/signup' element={<Signup baseUrl={baseUrl}/>}/>
        <Route path='/dashboard' element={<Dashboard />}/>

      </Routes>


    </BrowserRouter>
  )
}

export default App
