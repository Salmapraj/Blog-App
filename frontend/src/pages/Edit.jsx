
import React, { useEffect } from "react";
import { useState } from "react";
import { fetchSpecific,updatePost } from "../api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit() {
const navigate =useNavigate()

    const {id} = useParams();
const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const [author,setAuthor]=useState("")
    
// Fetch a specific blog post from the backend when the component loads — i.e., when the user wants to edit a post.
useEffect(()=>{
const specific = async ()=>{
    try{

        const postById = await fetchSpecific(id)
        setTitle(postById.title)
        setContent(postById.content)
        setAuthor(postById.author)
    }catch(error){
	        console.error("Failed to fetch posts", error);

}
}
specific()
},[id])

const HandleEdit = async (e)=>{
e.preventDefault()

const postData ={
    title,
     content,
     author,
}
try{

    const patch = await updatePost(id,postData)
            navigate('/')

}catch(error){
	        console.error("Failed to update posts", error);

}

}


return (
<div className="p-4 flex justify-center items-center min-h-screen bg-gray-100">
  <div className="w-full max-w-[600px] h-[500px] border border-gray-300 bg-white shadow-xl rounded-lg p-6">
                <p className="text-2xl font-medium mb-5">Edit Post</p>
                <form action=" " className="flex flex-col space-y-8 ">
                    <input onChange={(e)=>{
						setTitle(e.target.value)
					}}
                        type="text"
                        placeholder="Title" value={title}
                        className="   rounded px-2 py-1 outline-1 outline-gray-500  bg-blue-100 placeholder:text-gray-500"
                    />
                    <textarea onChange={(e)=>{
						setContent(e.target.value)
					}}  
                    value={content}
                        type="text"
                        rows="5"
                        className="   rounded px-2 py-1 outline-1 outline-gray-500  bg-blue-100 placeholder:text-gray-500 "
                        placeholder="Content"
                    />
                    <input onChange={(e)=>{
						setAuthor(e.target.value)
					}}value={author}
                        type="text"
                        className=" rounded px-2 py-1 outline-1 outline-gray-500  bg-blue-100 placeholder:text-gray-500"
                        placeholder="Author"
                    />
                    <button onClick={HandleEdit}
                        type="submit"
                        className=" text-white  rounded px-2 py-1 outline-1 outline-gray-500  bg-blue-600 hover:bg-blue-900"
                        >
                       Update Post
                    </button>
                </form>
            </div>
        </div>
    );
}



export default Edit