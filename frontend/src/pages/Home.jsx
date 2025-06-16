import React from "react";
import Blog from "../components/Blog";

function Home() {
	const blogs = [
		{
			title: "tech",
			content: "loremhjdhs jdsd",
			type: "food",

			author: "science",
			date: new Date(),
		},
		{
			title: "tech",
			content: "loremhjdhs jdsd",
			type: "food",

			author: "science",
			date: new Date(),
		},
		{
			title: "tech",
			content: "loremhjdhs jdsd",
			type: "food",

			author: "science",
			date: new Date(),
		},
		{
			title: "tech",
			content: "loremhjdhs jdsd",
			type: "food",
			author: "science",
			date: new Date(),
		},
		{
			title: "tech",
			content: "loremhjdhs jdsd",
			type: "food",
			author: "science",
			date: new Date(),
		},
		{
			title: "tech",
			content: "loremhjdhs jdsd",
			type: "food",
			author: "science",
			date: new Date(),
		},
		{
			title: "tech",
			content: "loremhjdhs jdsd",
			type: "food",

			author: "science",
			date: new Date(),
		},
	];

	return (
		<div>
			<div className="bg-gray-200 min-h-screen p-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
					{blogs.map((blog, index) => {
						return <Blog key={index} blog={blog} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default Home;
