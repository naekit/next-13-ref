// nextjs client component to render each crypto currency
// Path: app/Crypto.tsx
import styles from "./crypto.module.css"

export default function Crypto({ item }: any) {
	return (
		<div className={styles.item} key={item.id}>
			<h1>{item.name}</h1>
			<h1>{item.symbol}</h1>
			<h1 className="text-orange-700">
				<span className="text-zinc-900">$</span>
				{item.quote.USD.price.toFixed(2)}
			</h1>
		</div>
	)
} // end of Crypto component
