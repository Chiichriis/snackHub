import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Notification from './components/Notification'
import Search from './components/Search'
import Profile from './Profile'
import homeIcon from './components/imgs/home.png'
import notifyIcon from './components/imgs/notification-icon.png'
import searchIcon from './components/imgs/search-icon.png'
import profileIcon from './components/imgs/profile.jpg'


const App = () => {

  return (
    <BrowserRouter>
      <header 
        className = 'p-1 px-6 py-16 md:px-32 fixed w-full h-20 md:h-24 flex items-center justify-between shadow-md'>
        <div>
          <p className='font-logo text-xl text-slate-600'>SnackHub.</p>
        </div>

        <nav 
          className='flex gap-5 rounded-3xl border px-3 py-4 items-center '>
          <NavLink to="/" >
            <img src={homeIcon} alt="home" className='h-7 w-auto hd:h-10'/>
          </NavLink>
          <NavLink to="search" >
            <img src={searchIcon} alt="search" className='h-7 md:h-10 w-auto'/>
          </NavLink>
          <NavLink to="notification">
            <img src={notifyIcon} alt="notifications" className='h-7 md:h-10 w-auto'/>
          </NavLink>
          <NavLink to="profile">
            <img src={profileIcon} alt="profile" className='h-10 md:h-16 w-auto border rounded-full border-black ml-3 md:ml-7' />
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