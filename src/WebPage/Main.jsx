import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import SingUp from './SingUp'
import LogIn from './LogIn'


const Main = () => {
  return (
    <BrowserRouter>
        <div>
        <NavLink to="/">SingUp</NavLink>
        <NavLink to="login">LogIn</NavLink>
        <NavLink to="Home">Home</NavLink>
        </div>

        <Routes>
            <Route path="/" element={<SingUp/>}/>
            <Route path="LogIn" element ={<LogIn/>}/>
            <Route path="Home" element = {<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Main