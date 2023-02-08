// protected routes middleware for nextauth nextjs 13
export { default } from "next-auth/middleware"

export const config = {
	matcher: ["/dashboard"],
}
