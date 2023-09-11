'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/util/Navigation'
import chapters from '@/util/chapterInfo';
import ssccLogo from '@/public/sscc-logo.svg';

const chapterLinks = Object.values(chapters).map(
    chapter =>
        ({ 'name': chapter.name, 'href': chapter.href })
)

const navLinks = [
    ...chapterLinks,
    { 'name': 'Extras', 'href': '/extras' }
]

export default function MobileNav() {
    const [menuOut, setMenuOut] = useState(false);

    function handleClick() {
        setMenuOut(!menuOut);
    }

    return (
        <>
            <div className='mobileNav'>
                <Link
                    className='sscclogo'
                    href='/'
                >
                    <Image
                        alt="The Tale of Sara Snail and Cat Cricket logo"
                        src={ssccLogo}
                        height={80}
                        width={"auto"}
                    />
                </Link>
                <button className='menuIcon' onClick={handleClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        width="32"
                        height="32"
                    >
                        {
                            menuOut ?
                                //close icon
                                (<path
                                    d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
                                />)
                                :
                                //menu icon
                                (<path
                                    d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"
                                />)
                        }
                    </svg>
                </button>
            </div>

            {menuOut && (<Navigation
                style="navbar"
                navLinks={navLinks}
            />)}

        </>

    )
}