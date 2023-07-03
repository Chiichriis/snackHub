import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Notification from './components/Notification'
import Search from './components/Search'
import Profile from './Profile'
import notifyIcon from './components/imgs/notification-icon.png'
import searchIcon from './components/imgs/search-icon.png'
import profileIcon from './components/imgs/profile.jpg'


const App = () => {

  return (
    <BrowserRouter>
      <header 
        className = 'p-1 px-6 py-10 md:px-20 fixed w-full h-20 md:h-24 flex items-center justify-between shadow-sm'>
        <div>
          <p>Snack Hub.</p>
        </div>

        <nav 
          className='flex gap-5 rounded-3xl border px-3 py-4 items-center'>
          <NavLink to="search" >
            <img src={searchIcon} alt="search" className='h-7 w-auto'/>
          </NavLink>
          <NavLink to="notification">
            <img src={notifyIcon} alt="notifications" className='h-7 w-auto'/>
          </NavLink>
          <NavLink to="profile">
            <img src={profileIcon} alt="profile" className='h-10 w-auto border rounded-full border-black ' />
          </NavLink>
        </nav>
      </header>

      <main className='bg-red-100= h-screen flex items-center'>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='search' element ={<Search />} />
          <Route path='notification' element ={<Notification />} />
          <Route path='/profile' element = {<Profile/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App