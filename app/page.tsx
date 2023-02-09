import Image from "next/image"
import graphImg from "../public/graph.png"
import { FaPlus, FaBell, FaEnvelopeOpenText } from "react-icons/fa"

async function getPosts() {
	const res = await fetch(`${process.env.BASE_URL}/api/getPosts`)
	if (!res.ok) {
		throw new Error("Failed to fetch")
	}

	return res.json()
}

export default async function Home() {
	const data: { id: number; title: string; content: string }[] =
		await getPosts()
	console.log(data)

	return (
		<main>
			<div className="max-w-full grid grid-cols-2 items-center mt-32 mr-10">
				<div>
					<Image
						src={graphImg}
						alt="graph"
						width={800}
						className="p-20 w-full"
					/>
				</div>
				<div className="text-center">
					<h1 className="text-6xl pb-2 ml-10 leading-tight">
						Need your crypto with{" "}
						<span className="text-orange-500 font-extrabold">
							{" "}
							alerts?
						</span>{" "}
						<br /> We got you!
					</h1>
					<ul className="mt-10 space-y-2">
						<li className="text-2xl flex items-center justify-center">
							<FaBell className="inline mr-4" />
							<p>
								<span className="text-orange-500">Get</span>{" "}
								Alerts
							</p>
						</li>
						<li className="text-2xl flex items-center justify-center">
							<p>
								<span className="text-orange-500">Graph</span>{" "}
								Daily
							</p>
							<FaPlus className="inline ml-3" />
						</li>
						<li className="text-2xl flex items-center justify-center">
							<FaEnvelopeOpenText className="inline mr-4" />
							<p>
								Share{" "}
								<span className="text-orange-500">Insight</span>
							</p>
						</li>
					</ul>
				</div>
			</div>
			{data && data.length > 0 && (
				<div className="mt-20">
					<h1 className="text-4xl font-bold text-orange-600">
						Posts
					</h1>
				</div>
			)}
			{data.map((post) => (
				<div key={post.id} className="border-2 border-black w-full p-4">
					<h2>{post.title}</h2>
					<p>{post.content}</p>
				</div>
			))}
		</main>
	)
}
