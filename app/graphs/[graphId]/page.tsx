import Graph from "./Graph"

// show specific crypto chart when rendered
const Page = async ({ params }: any) => {
	console.log(params)
	return (
		<div className="h-screen min-w-full">
			<Graph paramObj={params} />
		</div>
	)
}

export default Page
