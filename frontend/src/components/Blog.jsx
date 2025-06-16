import React from 'react'

function Blog({blog}) {
  const {title,content,author,date,type} = blog
    const displayDate = date instanceof Date ? date.toLocaleDateString() : date

  return (
    <div>
      <div className='bg-[#cadded]  p-4 rounded-xl' >
<h2 className='font-semibold text-[22px] mb-5'>{title.toUpperCase()}</h2>
<p className='text-gray-600 text-[17px]'>{content}</p>
<span> {type}</span>
  <p>{author}</p>
  <p>{displayDate}</p>

      </div>
    </div>
  )
}

export default Blog