import React from 'react'
import { FaSearch, FaUser, FaHeart, } from 'react-icons/fa';
import img from '../assets/img.png';


const Home = () => {
  return (
    <div className='bg-white relative w-screen'>

      <div className='m-3 md:m-5 md:p-5 p-3 fixed flex items-center justify-between w-full drop-shadow-sm bg-none'>

        <div className='px-1 md:px-3 border-l border-l-black'>
          <p className='font-Sail text-xl md:text-2xl font-bold'>Snack Hub</p>
        </div>
          
        <div className='flex gap-5 mr-7 md:mr-28'>
          <FaHeart className='bg-slate-100 h-7 w-auto p-1 rounded-full cursor-pointer' />
          <FaSearch className='bg-slate-100 h-7 w-auto p-1 rounded-full cursor-pointer' />
          <FaUser className='bg-slate-100 h-7 w-auto p-1 rounded-full cursor-pointer'/>
        </div>

      </div>

      <div className='pt-36 flex flex-col md:flex-row md:justify-between md:pt-40 md:px-20'>

        <div className='drop-shadow-lg md:w-full md:flex md:items-center md:justify-center '>
          <img src={img} alt="heroImg" className='md:w-full md:h-auto' />
        </div>

        <div className='flex flex-col p-5 md:w-2/3 md:justify-center md:pr-10'>
          <h3 className='font-Sail bg-slate-100 w-fit p-1 rounded mt-3 md:text-base'>Delicious Snacks</h3>
          <p className='font-Ubuntu text-sm mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet officiis, dolorem quisquam quis soluta recusandae nam vero! Tenetur delectus, natus suscipit rem laborum blanditiis aut culpa voluptatum minima a perspiciatis?
          </p>
          <button className='uppercase text-sm font-Ubuntu py-2.5 px-7 rounded border border-black cursor-pointer w-fit mt-5 md:mt-7 text-black hover:bg-slate-100 hover:ease-in-out hover:delay-100'>Get Started</button>
        </div>

      </div>

    </div>
  )
}

export default Home