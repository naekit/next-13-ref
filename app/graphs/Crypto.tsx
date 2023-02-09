// nextjs client component to render each crypto currency
// Path: app/Crypto.tsx
import styles from "./crypto.module.css"
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa"

export default function Crypto({ item }: any) {
	const percentChange = item.price_change_percentage_24h
	const percentChangeColor =
		percentChange > 0 ? "text-green-500 inline" : "text-red-500 inline"
	const percentChangeIcon =
		percentChange > 0 ? <FaArrowCircleUp /> : <FaArrowCircleDown />

	return (
		<div className={styles.item} key={item.id}>
			<h1 className="py-1">{item.name}</h1>
			<h1 className="py-1">{item.symbol}</h1>
			<div>
				<span className={percentChangeColor}>{percentChangeIcon}</span>
				<h1 className="text-orange-700">
					<span className="text-zinc-900">$</span>
					{item.current_price}
				</h1>
			</div>
		</div>
	)
} // end of Crypto component
