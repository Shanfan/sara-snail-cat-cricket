'use client'
import { useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

import ss1 from '@/public/ch2/ch2_sn02_ss1.json'
import ss2 from '@/public/ch2/ch2_sn02_ss2.json'
import cc1 from '@/public/ch2/ch2_sn02_cc3.json'
import cc2 from '@/public/ch2/ch2_sn02_cc1.json'

import styles from './ch2.module.css'

const { jamGrid, cell, blue, pink, mustard } = styles

function CenterCell() {
    const [isSara, setIsSara] = useState(true);

    if (isSara) {
        return (
            <button
                className={`${cell} ${blue}`}
                onClick={() => setIsSara(false)}
            >
                <Player
                    autoplay
                    loop
                    src={ss1}
                    style={{
                        transform: 'translateY(5px)'
                    }}
                ></Player>
            </button>)
    } else {
        return (
            <button
                className={`${cell} ${pink}`}
                onClick={() => setIsSara(true)}
            >
                <Player
                    autoplay
                    loop
                    src={cc1}
                ></Player>
            </button>)
    }
}

function SaraSing() {
    return (
        <div className={`${cell}`}>
            <Player
                autoplay
                loop
                src={ss2}
                style={{
                    transform: 'translateY(5px)'
                }}
            ></Player>
        </div>
    )
}

function SaraSingFlip() {
    return (
        <div className={`${cell}`}>
            <Player
                autoplay
                loop
                src={ss2}
                style={{
                    transformOrigin: 'center bottom',
                    transform: 'scaleX(-1) translateY(5px)'
                }}
            ></Player>
        </div>
    )
}

function CatShuffle() {
    return (
        <div className={`${pink} ${cell}`}>
            <Player
                autoplay
                loop
                src={cc2}
                style={{
                    transform: 'scale(0.9)'
                }}
            ></Player>
        </div>

    )
}

function CatShuffleFlip() {
    return (
        <div className={`${pink} ${cell}`}>
            <Player
                autoplay
                loop
                src={cc2}
                style={{
                    transform: 'scale(-0.9, 0.9)'
                }}
            ></Player>
        </div>

    )
}

export default function JamSession() {

    return (
        <div className='row white'>
            <div className={`${jamGrid} narrow`}>
                <div className={`${pink} ${cell}`}></div>
                <div className={`${pink} ${cell}`}></div>
                <CatShuffleFlip />
                <SaraSing />

                <CenterCell />

                <SaraSingFlip />

                <CatShuffle />
                <div className={`${pink} ${cell}`}></div>
                <div className={`${pink} ${cell}`}></div>
            </div>
        </div >
    )
}