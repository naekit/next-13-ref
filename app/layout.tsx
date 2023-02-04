import "./globals.css"

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />

			<body>
				<nav>
					<h1>Logo</h1>
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/about">about</a>
						</li>
					</ul>
				</nav>
				{children}
			</body>
		</html>
	)
}
