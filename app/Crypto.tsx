// nextjs client component to render each crypto currency
// Path: app/Crypto.tsx
import Link from "next/link"
import styles from "./crypto.module.css"

export default function Crypto({ item }) {
	return (
		<div className={styles.item} key={item.id}>
			<h1>{item.name}</h1>
			<h1>{item.symbol}</h1>
			<h1>{item.quote.USD.price.toFixed(2)}</h1>
		</div>
	)
} // end of Crypto component
