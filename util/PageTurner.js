'use client'

import { usePathname } from 'next/navigation'

export default function PageTurner({ style }) {

    const currentPage = usePathname().match(/\d+/);
    const prevPage = parseInt(currentPage) - 1;
    const nextPage = parseInt(currentPage) + 1;

    return (
        <nav className={style}>
            <a href={prevPage > 0 ? `ch${prevPage}` : '/'}>← Prev</a>
            <a href={nextPage <= 5 ? `ch${nextPage}` : '/'}>Next → </a>
        </nav>
    )
}