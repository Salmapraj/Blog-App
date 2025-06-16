
import React from "react";

function Edit() {
    return (
<div className="p-4 flex justify-center items-center min-h-screen bg-gray-100">
  <div className="w-full max-w-[600px] h-[500px] border border-gray-300 bg-white shadow-xl rounded-lg p-6">
                <p className="text-2xl font-medium mb-5">Edit Post</p>
                <form action=" " className="flex flex-col space-y-8 ">
                    <input
                        type="text"
                        placeholder="Title"
                        className="   rounded px-2 py-1 outline-1 outline-gray-500  bg-blue-100 placeholder:text-gray-500"
                    />
                    <textarea
                        type="text"
                        rows="5"
                        className="   rounded px-2 py-1 outline-1 outline-gray-500  bg-blue-100 placeholder:text-gray-500 "
                        placeholder="Content"
                    />
                    <input
                        type="text"
                        className=" rounded px-2 py-1 outline-1 outline-gray-500  bg-blue-100 placeholder:text-gray-500"
                        placeholder="Author"
                    />
                    <button
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