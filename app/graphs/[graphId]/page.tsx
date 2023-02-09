import Graph from "./Graph"

// show specific crypto chart when rendered
const Page = async ({ params }: any) => {
	console.log(params)
	return (
		<div>
			<Graph paramObj={params} />
		</div>
	)
}

export default Page
