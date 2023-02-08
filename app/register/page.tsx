"use client"

import Link from "next/link"
import { useState } from "react"

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [name, setName] = useState("")

	const submitHandler = async (e: any) => {
		e.preventDefault()
		try {
			const res = await fetch(`http://localhost:3000/api/register`, {
				method: "POST",
				body: JSON.stringify({
					name,
					email,
					password,
				}),
			})
			if (!res.ok) console.log(res)
			const data = await res.json()
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
				<h1 className="text-4xl font-bold mb-4">Register</h1>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="mt-4 py-4 px-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				/>
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
					Register
				</button>
				<Link
					href="/login"
					className="mt-4 py-4 px-10 w-full text-center bg-gray-900 text-orange-500 font-bold rounded-md shadow-sm hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Login
				</Link>
			</form>
		</div>
	)
}

export default Login
