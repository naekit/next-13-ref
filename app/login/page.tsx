"use client"

import Link from "next/link"
import { useState } from "react"
import { signIn } from "next-auth/react"

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const submitHandler = async (e: any) => {
		e.preventDefault()
		try {
			const data = await signIn("credentials", {
				redirect: false,
				email,
				password,
			})

			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className="flex flex-col items-center justify-center h-screen pb-72">
			<form
				className="flex flex-col items-center justify-center"
				onSubmit={submitHandler}
			>
				<h1 className="text-4xl font-bold mb-4">Login</h1>
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
					className="mt-4 py-4 px-10 w-full bg-orange-500 text-gray-900 font-bold rounded-md shadow-sm hover:bg-orange-300 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Login
				</button>
				<Link
					href="/register"
					className="mt-4 py-4 px-10 w-full text-center bg-gray-900 text-orange-500 font-bold rounded-md shadow-sm hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Register
				</Link>
			</form>
		</div>
	)
}

export default Login
