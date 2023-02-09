import Crypto from "./Crypto"
import Link from "next/link"

export default async function Home() {
	const res = await fetch(
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
	)
	if (!res.ok) {
		console.log(res.statusText)
		return <div className="text-center mt-10">{res.statusText}</div>
	}

	const data = await res.json()

	return (
		<main className="p-10">
			<div className="grid grid-cols-8 gap-4">
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
