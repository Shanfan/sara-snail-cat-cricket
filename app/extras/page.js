'use client'
import Image from 'next/image'
import Link from 'next/link'
import ss1 from '@/public/extras/saraStare.png'
import vogue from '@/public/extras/vogueCover.jpg'
import confidential from '@/public/extras/confidential.jpg'
import { useState } from 'react'

const information = {
    'puzzle': {
        'title': 'Music Puzzle',
        'description': 'A push-tile game that gets the jam session going!',
        'href': 'extras/puzzle',
        'tailPos': 'calc(13% - 0.5rem)'
    },
    'vogue': {
        'title': 'Critter Vogue September Issue',
        'description': 'Read styling advice from the most renowned fashion editors in the critter world!',
        'href': 'extras/vogue',
        'tailPos': 'calc(50% - 0.5rem)'

    },
    'secret': {
        'title': 'Behind the Scene',
        'description': 'The making of Sara Snail and Cat Cricket, uncovered for the first time!',
        'href': 'extras/secret',
        'tailPos': 'calc(86% - 0.5rem)'
    }
}

export default function Extras() {
    const [info, setInfo] = useState(information['puzzle']);

    function handleClick(str) {
        setInfo(information[str]);
        return info;
    }

    return (<main className='extras'>
        <div className="control">
            <button onClick={() => handleClick('puzzle')}>
                <Image
                    className={'icon blue'}
                    alt="icon of the music puzze app"
                    src={ss1}
                />
            </button>

            <button onClick={() => handleClick('vogue')}>
                <Image
                    className='icon'
                    alt="icon of the Critter Vogue magazine"
                    src={vogue}
                />

            </button>
            <button onClick={() => handleClick('secret')}>
                <Image
                    className='icon'
                    alt="icon of confidential information"
                    src={confidential}
                />
            </button>

        </div>
        <InfoBubble information={info} />
    </main>)
}

function InfoBubble({ information }) {
    return (
        <div className="info" style={{ '--pos': `${information.tailPos}` }}>
            <div>
                <h2>{information.title}</h2>
                <p>{information.description}</p>
            </div>
            <Link href={information.href}>Go!</Link>
        </div>
    )
}