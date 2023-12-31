'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navigation({ navLinks, style }) {
    const pathname = usePathname()

    return (
        <nav className={style}>
            {navLinks.map((link) => {
                const isActive = pathname === link.href
                if (!isActive) {
                    return (
                        <Link
                            href={link.href}
                            key={link.name}
                        >
                            {link.name}
                        </Link>
                    )
                } else {
                    return (
                        <div key={link.name}>
                            {link.name}
                        </div>
                    )
                }
            })}
        </nav>
    )
}