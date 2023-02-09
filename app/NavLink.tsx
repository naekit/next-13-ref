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
					? "text-zinc-50 font-bold bg-orange-400 p-2 rounded-tr-sm rounded-tl-sm"
					: "text-zinc-900 font-bold p-2"
			}`}
		>
			{label}
		</Link>
	)
}
