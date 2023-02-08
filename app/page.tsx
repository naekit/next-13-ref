import Crypto from "./graphs/Crypto"
import styles from "./page.module.css"

export default async function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<h1 className="text-xl underline underline-offset-2 pb-2">
					Your Graph Crypt
				</h1>
			</div>
		</main>
	)
}
