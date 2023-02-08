"use client"

import Link from "next/link"
import { useState } from "react"

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const submitHandler = (e) => {
		e.preventDefault()
	}

	return (
		<div className="flex flex-col items-center justify-center h-screen pb-20">
			<Link
				href="/"
				className="text-4xl font-bold text-orange-600 dark:text-gray-100 font-roboto pb-4 pt-0 mt-0"
			>
				<span className="text-zinc-900">graph</span>Crypt
			</Link>
			<h1 className="text-4xl font-bold">Login</h1>
			<form
				className="flex flex-col items-center justify-center"
				onSubmit={submitHandler}
			>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="mt-4 py-4 px-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				/>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="mt-4 py-4 px-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				/>
				<button
					type="submit"
					className="mt-4 py-4 px-10 w-full bg-orange-500 text-gray-900 font-bold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Login
				</button>
				<Link
					href="/register"
					className="mt-4 py-4 px-10 w-full text-center bg-orange-600 text-gray-900 font-bold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Register
				</Link>
			</form>
		</div>
	)
}

export default Login
