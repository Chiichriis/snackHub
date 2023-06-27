import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Notification from './components/Notification'


const App = () => {

  return (
    <BrowserRouter>
      <header>
        <nav>
          <NavLink to="/" >Home</NavLink>
          <NavLink to="notification">Notify</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='notification' element ={<Notification />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App