import "./globals.css"
import { Poppins } from "@next/font/google"

const poppins = Poppins({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-poppins",
})

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

			<body className={`${poppins.className}`}>
				<nav>
					<h1>Logo</h1>
					<ul className="font-poppins">
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
