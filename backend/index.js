import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import cors from 'cors'
const app = express();
const port = process.env.PORT || 3000;
app.use(cors()) //cross origin enabled

// In-memory data store
let posts = [
	{
		id: 1,
		title: "The Rise of Decentralized Finance",
		content:
			"Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
		author: "Alex Thompson",
		date: "2023-08-01T10:00:00Z",
	},
	{
		id: 2,
		title: "The Impact of Artificial Intelligence on Modern Businesses",
		content:
			"Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
		author: "Mia Williams",
		date: "2023-08-05T14:30:00Z",
	},
	{
		id: 3,
		title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
		content:
			"Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
		author: "Samuel Green",
		date: "2023-08-10T09:15:00Z",
	},
	{
		id: 4,
		title: "The Future of Remote Work: Trends and Predictions",
		content:
			"The pandemic accelerated the remote work revolution, but even as offices reopen, many companies are adopting hybrid models. Studies show that 58% of American workers now have the option to work remotely at least part-time. This shift brings new challenges in collaboration, company culture, and work-life balance. Emerging technologies like VR meeting spaces and advanced project management tools are shaping the future of distributed teams.",
		author: "Ethan Taylor",
		date: "2023-09-12T11:20:00Z",
	},
	{
		id: 5,
		title: "Blockchain Technology: Beyond Cryptocurrencies",
		content:
			"While blockchain is most famous for powering Bitcoin and other cryptocurrencies, its applications extend far beyond digital money. This decentralized ledger technology is revolutionizing supply chain management, healthcare record keeping, and even voting systems. Smart contracts enable self-executing agreements without intermediaries. As blockchain becomes more energy-efficient, we'll see broader adoption across industries seeking transparency and security.",
		author: "Nina Patel",
		date: "2023-09-18T16:45:00Z",
	},
	{
		id: 6,
		title: "Mental Health in the Digital Age: Finding Balance",
		content:
			"Our always-connected lifestyle comes with mental health costs. Constant notifications, social media comparison, and information overload contribute to rising anxiety rates. However, technology also offers solutions: meditation apps, digital detox tools, and online therapy platforms. The key is mindful usage - setting boundaries, taking regular screen breaks, and using technology intentionally rather than compulsively. This post explores strategies for maintaining psychological well-being in our hyper-digital world.",
		author: "David Chen",
		date: "2023-09-22T08:10:00Z",
	},
	{
		id: 7,
		title: "The Rise of Electric Vehicles: What Consumers Should Know",
		content:
			"Electric vehicle sales grew by over 60% last year, signaling a major shift in transportation. Modern EVs now offer ranges exceeding 300 miles per charge, with charging infrastructure expanding rapidly. Beyond environmental benefits, EVs provide lower maintenance costs and superior performance. This guide covers everything from understanding battery life and charging options to navigating government incentives for your first electric car purchase.",
		author: "Sophia Martinez",
		date: "2023-09-28T13:50:00Z",
	},
];

let lastId = 7; // Initialize with current max ID

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//: GET All posts
app.get("/posts", (req, res) => {
	res.json(posts);
});

//GET a specific post by id
app.get("/posts/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const findPost = posts.find((post) => post.id === id);
	if (!findPost) res.sendStatus(404).json({ message: "error fetching ppost" });
	res.json(findPost);
});

//CHALLENGE 3: POST a new post
app.post("/posts", (req, res) => {
	const newId = (lastId += 1); //lastid =lastId +1
	const newPost = {
		id: newId,
		title: req.body.title,
		content: req.body.content,
		author: req.body.author,
		date: new Date(), //create real time date
	};
	// 3. Add to in-memory store
	(lastId = newId), //update the id
		posts.push(newPost);
	res.json(newPost);
		res.redirect("/")

});

//CHALLENGE 4: PATCH a post when you just want to update one parameter
app.patch("/posts/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const post = posts.find((post) => post.id === id);
	if (!post) return res.status(404).json({ message: "ppost not found" });

	if (req.body.title) post.title = req.body.title;
	if (req.body.content) post.content = req.body.content;
	if (req.body.author) post.author = req.body.author;

	res.json(post);
	res.redirect("/")
});

//CHALLENGE 5: DELETE a specific post by providing the post id.
app.delete("/posts/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const searchIndex = posts.findIndex((post) => post.id === id);
	if (searchIndex > -1) {
		posts.splice(searchIndex, 1);
		res.sendStatus(200);
	} else {
		res.sendStatus(404);
		res.json({ error: `jpke with id : {id} not found. no joke were deledted` });
	}
});

app.listen(port, () => {
	console.log(`API is running at http://localhost:${port}`);
});
