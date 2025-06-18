import axios from "axios"
//for api calls 
const API_URL ="http://localhost:3000/"

//get all post 
export const fetchallposts = async ()=>{
    try{
        const response = await axios.get(`${API_URL}posts`)
        console.log(response.data)
        return response.data
    }catch(error){
console.log('failed to fetch posts :' , error)
throw error
    }
}
//get speicific post
export const fetchSpecific = async (id)=>{
    try{

        const response = await axios.get(`${API_URL}posts/${id}`)
        console.log(response.data)
        return response.data
    }catch(error){
            console.error("Post not found:", error);
throw error
    }
}

//create new post
 export const createPost = async (postData)=>{
    try{

        const response = await axios.post(`${API_URL}posts`,postData)
        console.log("post created",response.data)
        return response.data
    }catch(error){
 console.error("Error creating post:", error);
throw error
    }
}
//patch post
export const updatePost = async (id,postData)=>{
    try{
        const response =  await axios.patch(`${API_URL}posts/${id}`,postData)
console.log(response.data)
return response.data
    }catch(error){
        console.error("Error creating post:", error);
throw error
    }
}

//delete post
export const deletePost = async (id)=>{
     try{
        const response =  await axios.delete(`${API_URL}posts/${id}`)
return response.data
    }catch(error){
        console.error("Error creating post:", error);
throw error
    }
}
