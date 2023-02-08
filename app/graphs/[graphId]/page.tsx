import Graph from "./Graph"

// show specific crypto chart when rendered
const Page = async ({ params }: any) => {
	console.log(params)
	return <Graph paramObj={params} />
}

export default Page
