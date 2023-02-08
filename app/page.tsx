import styles from "./page.module.css"

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
		<main className={styles.main}>
			<div className={styles.description}>
				<h1 className="text-xl underline underline-offset-2 pb-2">
					The Crypt
				</h1>
			</div>
			{data.map((post) => (
				<div key={post.id} className="border-2 border-black w-full p-4">
					<h2>{post.title}</h2>
					<p>{post.content}</p>
				</div>
			))}
		</main>
	)
}
