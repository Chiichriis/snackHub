import React from 'react'
import Home from './components/Home'
import Notification from './components/Notification'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <NavLink to="/" >Home</NavLink>
          <NavLink to="notification">Notify</NavLink>
        </nav>
      </header>
      <main className='bg-red-100'>
        <Routes>
          <Route path='/' element ={Home}/>
          <Route path='/notification' element ={Notification} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App