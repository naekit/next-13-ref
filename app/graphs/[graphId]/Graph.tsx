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
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)
import type { ChartData, ChartOptions } from "chart.js"
import moment from "moment"
import { Line } from "react-chartjs-2"
import { FaPlus, FaBell, FaEnvelopeOpenText } from "react-icons/fa"

// show specific crypto chart when rendered
const Graph = ({ paramObj }: any) => {
	const [days, setDays] = useState(30)
	const [data, setData] = useState<ChartData<"line">>()
	const [options, setOptions] = useState<ChartOptions<"line">>({
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: false,
				text: paramObj.graphId,
			},
		},
	})
	useEffect(() => {
		const getData = async () => {
			const data = await fetch(
				`https://api.coingecko.com/api/v3/coins/${
					paramObj.graphId
				}/market_chart?vs_currency=usd&days=${days}&interval=${
					days > 7 ? "daily" : "hourly"
				}`
			)
			const res = await data.json()
			console.log(res)
			setData({
				labels: res.prices.map((price: number[]) => {
					return moment.unix(price[0] / 1000).format("MMM Do")
				}),
				datasets: [
					{
						label: "Price in USD",
						data: res.prices.map((price: number[]) => {
							return price[1]
						}),
						borderColor: "rgb(255, 99, 132)",
						backgroundColor: "rgba(255, 99, 132, 0.5)",
					},
				],
			})
		}
		getData()
	}, [days])

	const handleSelect = async (e: any) => {
		e.preventDefault()
		setDays(e.target.value)
	}

	return (
		<div>
			<div className="pl-10">
				<h1 className="text-4xl font-bold text-orange-600">
					{paramObj.graphId}
				</h1>
				<select
					className="form-select
      							w-56
	  							mt-2
      							px-3
      							py-1.5
      							text-base
      							font-normal
      							text-gray-700
      							bg-white bg-clip-padding bg-no-repeat
      							border border-solid border-gray-300
      							rounded
      							transition
      							ease-in-out
      							focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					onChange={handleSelect}
				>
					<option value={360}>360 days</option>
					<option value={180}>180 days</option>
					<option value={90}>90 days</option>
					<option value={60}>60 days</option>
					<option selected value={30}>
						30 days
					</option>
					<option value={7}>7 days</option>
					<option value={1}>1 days</option>
				</select>
			</div>
			{!data ? (
				<p className="text-center">Loading data...</p>
			) : (
				<div className="w-full p-20 pt-5 flex justify-between">
					<div className="w-11/12">
						<Line data={data} options={options} />
					</div>
					<div className="flex justify-start items-start w-1/12 flex-col mt-6">
						<button className="border-1 rounded-sm items-center bg-slate-50 flex flex-col text-slate-600 w-20 hover:bg-slate-200 py-2 px-4 m-2">
							<FaPlus className="text-orange-600" size="1.5rem" />
							<p>Add</p>
						</button>
						<button className="border-1 rounded-sm items-center bg-slate-50 flex flex-col text-slate-600 w-20  hover:bg-slate-200 py-2 px-4 m-2">
							<FaEnvelopeOpenText
								className=" text-orange-600"
								size="1.5rem"
							/>
							<p>Post</p>
						</button>
						<button className="border-1 rounded-sm items-center bg-slate-50 flex flex-col text-slate-600 w-20 hover:bg-slate-200 py-2 px-4 m-2">
							<FaBell
								className=" text-orange-600"
								size="1.5rem"
							/>
							<p>Alert</p>
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default Graph
