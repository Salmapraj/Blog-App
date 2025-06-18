import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <div className='bg-blue-200 flex justify-between  p-4'>
        <Link to="/">
<p className='text-gray-800 font-semibold text-2xl '>Blog</p>
        </Link>
<div className=''>
  <input type="text" placeholder='Search for author,type...' className='border border-gray-400 rounded px-2 placeholder:text-sm bg-gray-200'/>
  
  <Link to="/new">
  <button className=' ml-5 bg-blue-400 border-gray-400 rounded text-white px-2 hover:bg-blue-500 cursor-pointer'>New post</button>
  </Link>
</div>
      </div>
    </div>
  )
}

export default Navbar