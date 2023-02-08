import { signOut, useSession } from "next-auth/react"
import Link from "next/link"

// header
const Header = () => {
	const session = useSession()
	const isAuth = session.status === "authenticated"

	return (
		<nav className="flex space-x-2 pl-8 pt-10 pr-28 place-content-between max-w-full items-center">
			<h1 className="text-4xl font-bold text-orange-600 dark:text-gray-100 font-roboto pb-4 pt-0 mt-0">
				<span className="text-zinc-900">graph</span>Crypt
			</h1>
			<ul className="font-poppins flex space-x-4">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/graphs">Graphs</Link>
				</li>
				{isAuth ? (
					<>
						<li>
							<Link href="/profile">Profile</Link>
						</li>
						<li>
							<span
								className="cursor-pointer"
								onClick={() => signOut()}
							>
								Log Out
							</span>
						</li>
					</>
				) : (
					<>
						<li>
							<Link href="/login">Log In</Link>
						</li>
						<li>
							<Link href="/register">Register</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	)
}

export default Header
