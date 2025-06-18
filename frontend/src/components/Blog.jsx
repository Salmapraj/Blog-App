import React from 'react'
import { Link } from 'react-router-dom'
function Blog({blog,ondelete}) {
  const {title,content,author,date,id} = blog


  return (
    <div>
      <div className='bg-[#cadded]  p-4 rounded-xl hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-blue-200' >
<h2 className='font-semibold text-[22px] mb-5'>{title.toUpperCase()}</h2>
<p className='text-gray-700 text-[17px]'>{content}</p>
  <p className='text-gray-500'> {author}</p>
  <p className='text-gray-500 text-[12px]'>{date}</p>
<div className='flex justify-between'>

          {/* UPDATE button navigates to edit */}

<Link to={`/edit/${id}`}>
<button  className='bg-red-500 text-[11px] mt-4 text-white px-3 py-2 rounded-xl hover:bg-red-700'>Update</button>
</Link>

          {/* DELETE button performs action */}

<button onClick={()=>ondelete(id)} className='bg-green-500 text-[11px] mt-4 text-white px-3 py-2 rounded-xl hover:bg-green-800'>Delete</button>
</div>
      </div>
    </div>
  )
}

export default Blog