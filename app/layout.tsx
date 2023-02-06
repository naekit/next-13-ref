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
				<nav className="flex space-x-2 pl-8 pt-5 pr-28 place-content-between max-w-full items-center">
					<h1 className="text-4xl font-bold text-orange-600 dark:text-gray-100 font-roboto pb-4 pt-0 mt-0">
						<span className="text-zinc-900">graph</span>Crypt
					</h1>
					<ul className="font-poppins flex space-x-4">
						<li>
							<a href="/">Graphs</a>
						</li>
						<li>
							<a href="/about">Sign Up</a>
						</li>
						<li>
							<a href="/about">Log In</a>
						</li>
					</ul>
				</nav>
				{children}
			</body>
		</html>
	)
}
