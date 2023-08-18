'use client'

import { usePathname } from 'next/navigation'

export default function PageTurner({ styles }) {

    const currentPage = usePathname().match(/\d+/);
    const prevPage = parseInt(currentPage) - 1;
    const nextPage = parseInt(currentPage) + 1;

    return (
        <nav className={styles}>
            <a href={prevPage > 0 ? `ch${prevPage}` : '/'}>← Prev</a>
            <a href={nextPage < 5 ? `ch${nextPage}` : '/about'}>Next → </a>
        </nav>
    )
}