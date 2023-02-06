import Crypto from "./Crypto"
import styles from "./page.module.css"

export default async function Home() {
	const res = await fetch(
		"https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
		{
			headers: {
				"X-CMC_PRO_API_KEY": `${process.env.API_KEY}`,
			},
		}
	)
	const data = await res.json()

	console.log(data.data)
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<h1 className="text-4xl font-bold text-orange-600 dark:text-gray-100 font-roboto pb-4 pt-0 mt-0">
					cryptoGraph
				</h1>
			</div>
			<div className={styles.items}>
				{data.data.map((item) => (
					<Crypto key={item.id} item={item} />
				))}
			</div>
		</main>
	)
}
