import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "../page.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function About() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<h1 className={inter.className}>Hello next 13 about</h1>
			</div>
		</main>
	)
}
