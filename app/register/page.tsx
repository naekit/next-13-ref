"use client"

import Link from "next/link"
import { useState } from "react"
import { signIn } from "next-auth/react"

const Register = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [name, setName] = useState("")

	const submitHandler = async (e: any) => {
		e.preventDefault()
		try {
			const res = await fetch(
				`https://next-13-ref-4add.vercel.app/api/register`,
				{
					method: "POST",
					body: JSON.stringify({
						name,
						email,
						password,
					}),
				}
			)
			if (!res.ok) console.log(res)
			const data = await res.json()
			const signInData = await signIn("credentials", {
				callbackUrl: "/",
				redirect: true,
				email,
				password,
			})
			console.log(signInData, data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className="flex flex-col items-center justify-center mt-32">
			<form
				className="flex flex-col items-center justify-center"
				onSubmit={submitHandler}
			>
				<h1 className="text-4xl font-bold mb-4">Register</h1>
				<input
					placeholder="Enter Name"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="mt-4 py-3 w-96 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				/>
				<input
					placeholder="Enter Email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="mt-4 py-3 w-96 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				/>
				<input
					placeholder="Enter Password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="mt-4 py-3 w-96 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				/>
				<button
					type="submit"
					className="mt-4 py-4 px-10 w-full bg-orange-500 text-gray-900 font-bold rounded-md shadow-sm hover:bg-orange-300 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Register
				</button>
				<Link
					href="/login"
					className="text-blue-500 hover:text-blue-700 mt-4"
				>
					<span className="text-zinc-800">Coming back?</span> Login
				</Link>
			</form>
		</div>
	)
}

export default Register
