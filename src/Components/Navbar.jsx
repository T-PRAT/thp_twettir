import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
	<div className='container w-1/4  border-r'>
    <h1 className='font-sans text-4xl m-10 text-yellow-300 font-bold'>Twettir</h1>
    <div className="absolute bottom-1/4 mx-14 flex flex-col">
      <Link to="/login" className='mb-7 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full text-center'>Log in</Link>
      <Link to="/register" className='bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full'>Create new account</Link>
    </div>
  </div>
  )
}
