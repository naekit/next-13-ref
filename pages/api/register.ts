// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../prisma/client"
import bcrypt from "bcrypt"

type dataProps = {
	name: string
	email: string
	password: string
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		// Get the posts from the database
		const data: dataProps = JSON.parse(req.body)
		data.password = await bcrypt.hash(data.password, 10)
		if (req.method === "POST") {
			if (!data.name || !data.email || !data.password) {
				return res.status(400).json({ message: "Missing data" })
			}
			const newUser = await prisma.user.create({
				data: {
					name: data.name,
					email: data.email,
					password: data.password,
				},
			})
			return res.status(200).json(newUser)
		}
	} catch (error) {
		return res.status(500).json(error)
	}
}
