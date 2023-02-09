// @ts-nocheck
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../prisma/client"

type dataProps = {
	title: string
	content: string
	userId: number
	graph: string
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		// Get the posts from the database
		const data: dataProps = JSON.parse(req.body)
		if (req.method === "POST") {
			if (!data.title || !data.content || !data.userId)
				return res.status(400).json({ message: "Missing data" })
			const newPost = await prisma.post.create({
				where: {
					id: data.userId,
				},
				data: {
					title: data.title,
					content: data.content,
					graph: data.graph,
					user: {
						connect: {
							id: data.userId,
						},
					},
				},
			})
			return res.status(200).json(newPost)
		}
	} catch (error) {
		return res.status(500).json(error)
	}
}
