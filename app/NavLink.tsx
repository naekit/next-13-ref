"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

export default function NavLink({ label, path, targetSegment }: any) {
	const activeSegment = useSelectedLayoutSegment()
	const isActive = activeSegment === targetSegment

	return (
		<Link
			href={path}
			className={`${
				isActive
					? "text-orange-600 border-b-2 border-orange-600 font-bold"
					: "text-zinc-900 font-bold"
			}`}
		>
			{label}
		</Link>
	)
}
