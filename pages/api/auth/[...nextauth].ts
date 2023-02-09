import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import prisma from "@/prisma/client"

export default NextAuth({
	session: {
		strategy: "jwt",
	},
	providers: [
		CredentialsProvider({
			// @ts-ignore
			async authorize(credentials: any, req: any) {
				const { email, password } = credentials

				const user = await prisma.user.findUnique({
					where: {
						email: email,
					},
				})
				if (!user) {
					throw new Error("Invalid Email or Password")
				}

				const isValid = await bcrypt.compare(password, user.password)

				if (!isValid) {
					throw new Error("Invalid Email or Password")
				}
				return user
			},
		}),
	],
	pages: {
		signIn: "/login",
	},
})
