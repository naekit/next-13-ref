import Crypto from "./Crypto"
import styles from "../page.module.css"
import Link from "next/link"

export default async function Home() {
	const res = await fetch(
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
	)

	const data = await res.json()

	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<h1 className="text-xl underline underline-offset-2 pb-2">
					Graphs
				</h1>
			</div>
			<div className={styles.items}>
				{data
					? data.map((item: any) => (
							<Link key={item.id} href={`/graphs/${item.id}`}>
								<Crypto item={item} />
							</Link>
					  ))
					: null}
			</div>
		</main>
	)
}
