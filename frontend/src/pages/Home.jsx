import React from "react";
import Blog from "../components/Blog";
import { useState, useEffect } from "react";
import { fetchallposts ,deletePost} from "../api";

function Home() {
	
	const [posts,setPosts] =useState([])
	useEffect(()=>{
		 //You need async here because you'll use await inside it to wait for the API response.
		const loadPosts = async ()=>{
			try{
				const post = await fetchallposts()
				setPosts(post)
			}catch(error){
        console.error("Failed to load posts", error);
 
			}
		}
		loadPosts()
	 },[])


	//   Only the Home component can modify the posts state using setPosts().

  // This handles delete + UI update
  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Failed to delete post", error);
    }
  };

	return (
		<div>
			<div className="bg-gray-200 min-h-screen p-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
					{posts.map((blog) => {
						return <Blog key={blog.id} blog={blog} ondelete={handleDelete}/>;
					})}
				</div>
			</div>
		</div>
	);
}

export default Home;
