import Image from 'next/image'
import Link from 'next/link'
import ssccLogo from '@/public/sscc-logo.svg'
import Footer from '@/util/Footer'
import './extras.css'

export default function ExtrasLayout({ children }) {
    return (
        <div className='wrapper'>
            <nav className='navbar'>
                <Link
                    className='sscclogo'
                    href='/'
                >
                    ← Back to story
                    <Image
                        alt="The Tale of Sara Snail and Cat Cricket logo"
                        src={ssccLogo}
                        height={55}
                        width={"auto"}
                    />
                </Link>
                <Link href='/extras'>Extras</Link>
            </nav>
            {children}
            <Footer />
        </div>
    )
}