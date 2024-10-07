import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='bg-[#3ccf91] flex px-[20%] py-5 justify-between items-center text-white'>
      <h2 className='text-3xl'>PentaTech</h2>
      <nav className='flex space-x-10'>
        <Link to="/"><p>Home</p></Link>
        <Link to="/shop"><p>Shop</p></Link>
        <Link to="/about"><p>About</p></Link>
        <Link to="/contact"><p>Contact</p></Link>
      
      </nav>
    </header>
  )
}

export default Navbar