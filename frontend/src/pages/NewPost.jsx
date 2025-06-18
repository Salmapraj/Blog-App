import React, { useState } from "react";
import { createPost } from "../api";
import { useNavigate } from 'react-router-dom';

function NewPost() {
	const [title,setTitle]=useState("")
	const [content,setContent]=useState("")
	const [author,setAuthor]=useState("")
	  const navigate = useNavigate();

	const HandleClick =async (e)=>{
		e.preventDefault()
		//If you define the postData outside the handleClick functionit only captures the values at the time of render — not when the user clicks the button.
		const PostData={
		title ,
		content ,
		author,
	}
try{
	const create = await createPost(PostData)
	alert("created")
	setTitle("")
	setContent("")
	setAuthor("")
	navigate('/')
}catch(error){
	        console.error("Failed to create posts", error);

}
	}
	return (
		<div className="p-4 flex justify-center items-center min-h-screen bg-gray-100">
			<div className="w-full max-w-[600px] h-[500px] border border-gray-300 bg-white shadow-xl rounded-lg p-6">
				<h2 className="font-semibold text-2xl mb-5">New Post</h2>
				<form action="post" className="flex flex-col space-y-8 ">
					<input onChange={(e)=>{
						setTitle(e.target.value)
					}} 
						type="text"
						placeholder="Title" value={title}
						className="   rounded px-2 py-1 outline-1 outline-gray-500  bg-blue-100 placeholder:text-gray-500"
					/>
					<textarea
					onChange={(e)=>{
						setContent(e.target.value)
					}}
					type="text"
					rows="5"
					value={content}
						className="   rounded px-2 py-1 outline-1 outline-gray-500  bg-blue-100 placeholder:text-gray-500 "
						placeholder="Content"
					/>
					<input
					onChange={(e)=>{
						setAuthor(e.target.value)
					}}
					type="text"
					value={author}
					className=" rounded px-2 py-1 outline-1 outline-gray-500  bg-blue-100 placeholder:text-gray-500"
						placeholder="Author"
					/>
					<button
						type="submit"
						className=" text-white  rounded px-2 py-1 outline-1 outline-gray-500  bg-blue-600 hover:bg-blue-900"
					onClick={HandleClick}>
						Create Post
					</button>
				</form>
			</div>
		</div>
	);
}

export default NewPost;
