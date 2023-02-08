"use client"
// render a graph with react-chartjs-2 and react-chart
import { useState, useEffect } from "react"
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js"
import type { ChartData, ChartOptions } from "chart.js"
import { Line } from "react-chartjs-2"

// show specific crypto chart when rendered
const Graph = ({ paramObj }: any) => {
	const [data, setData] = useState<ChartData<"line">>()
	const [options, setOptions] = useState<ChartOptions<"line">>({
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: paramObj.graphId,
			},
		},
	})
	useEffect(() => {
		const getData = async () => {
			const data = await fetch(
				"https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=30"
			)
			const res = await data.json()
			console.log(res)
		}
		getData()
	}, [])

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-4xl font-bold mb-4">empty</h1>
			{!data ? <p>No data...</p> : <Line data={data} options={options} />}
		</div>
	)
}

export default Graph
