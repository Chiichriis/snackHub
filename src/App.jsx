import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Notification from './components/Notification'
import Search from './components/Search'



const App = () => {

  return (
    <BrowserRouter>
      <header className = 'bg-slate-400 p-1 px-7 md:px-20 fixed w-full h-20 md:h-24 flex items-center justify-between'>
        <logo>SnackHub</logo>
        <nav className='flex gap-5'>
          <NavLink to="/" >Home</NavLink>
          <NavLink to="notification">Notify</NavLink>
          <NavLink to="search">Search</NavLink>
        </nav>
      </header>

      <section>
        <feeds>
          <NavLink to="all">All</NavLink>
        </feeds>
      </section>

      <main className='bg-red-100 mt-10'>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='search' element ={<Search />} />
          <Route path='notification' element ={<Notification />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App