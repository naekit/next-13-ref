import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import NavLink from "./NavLink"

// header
const Header = () => {
	const session = useSession()
	const isAuth = session.status === "authenticated"
	console.log(session.data)

	return (
		<nav className="flex space-x-2 pl-8 pt-10 pr-28 justify-between max-w-full items-center">
			<Link href="/">
				<h1 className="text-4xl font-extrabold text-orange-600 pb-4 pt-0 mt-0">
					<span className="text-zinc-900 underline">graph</span>Crypt
				</h1>
			</Link>
			<ul className="font-poppins flex space-x-4 border-b-8 border-spacing-0 border-orange-400 hover:border-b-4 transition-all duration-400 ease-linear">
				<li>
					<NavLink path="/" targetSegment={null} label="Home" />
				</li>
				<li>
					<NavLink
						path="/graphs"
						targetSegment="graphs"
						label="Graphs"
					/>
				</li>
				{isAuth ? (
					<>
						<li>
							<NavLink
								path="/dashboard"
								targetSegment="dashboard"
								label="Dashboard"
							/>
						</li>
						<li>
							<span
								className="cursor-pointer rounded-sm text-zinc-800 font-bold border-orange-400 border-r-8 p-1 hover:text-orange-600 hover:border-r-4 transition-all duration-400 ease-linear"
								onClick={() => signOut()}
							>
								Log Out
							</span>
						</li>
					</>
				) : (
					<>
						<li>
							<NavLink
								path="/login"
								targetSegment="login"
								label="Log In"
							/>
						</li>
						<li>
							<NavLink
								path="/register"
								targetSegment="register"
								label="Register"
							/>
						</li>
					</>
				)}
			</ul>
		</nav>
	)
}

export default Header
