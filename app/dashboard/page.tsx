const DashboardPage = () => {
	return (
		<div className="flex flex-col items-start p-10 justify-between">
			{/* posts modal */}
			<div className="p-4">
				<h1 className="text-2xl font-bold">Posts</h1>
				<p>All your posts</p>
			</div>
			{/* saved graphs modal */}
			<div className="p-4">
				<h1 className="text-2xl font-bold">Saved Graphs</h1>
				<p>All your graphs</p>
			</div>
			{/* alerts modal */}
			<div className="p-4">
				<h1 className="text-2xl font-bold">Alerts</h1>
				<p>All your alerts</p>
			</div>
		</div>
	)
}

export default DashboardPage
