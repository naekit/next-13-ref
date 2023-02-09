// nextjs client component to render each crypto currency
// Path: app/Crypto.tsx
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa"

export default function Crypto({ item }: any) {
	const percentChange = item.price_change_percentage_24h
	const percentChangeColor =
		percentChange > 0 ? "text-green-500" : "text-red-500"
	const percentChangeIcon =
		percentChange > 0 ? (
			<FaArrowCircleUp size={18} className={percentChangeColor} />
		) : (
			<FaArrowCircleDown size={18} className={percentChangeColor} />
		)

	return (
		<div className="p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:scale-105 hover:shadow-lg transition-all ease-linear duration-300">
			<h1 className="py-1">{item.name}</h1>
			<h1 className="py-1">{item.symbol}</h1>
			<div className="flex items-center gap-2">
				{percentChangeIcon}
				<h1 className="text-orange-700">
					<span className="text-zinc-900">$</span>
					{item.current_price.toFixed(2)}
				</h1>
			</div>
		</div>
	)
}
