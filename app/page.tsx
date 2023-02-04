import styles from "./page.module.css"

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 font-roboto">
					Hello next 13
				</h1>
			</div>
		</main>
	)
}
