'use client'
import { useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

import ss1 from '@/public/ch2/ch2_sn02_ss1.json'
import ss2 from '@/public/ch2/ch2_sn02_ss2.json'
import cc1 from '@/public/ch2/ch2_sn02_cc3.json'
import cc2 from '@/public/ch2/ch2_sn02_cc1.json'
import note1 from '@/public/ch2/ch2_sn02_note1.json'
import note2 from '@/public/ch2/ch2_sn02_note2.json'

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
                        transformOrigin: 'center bottom',
                        transform: 'translateY(4px) scale(0.6)'
                    }}
                ></Player>
            </button>)
    } else {
        return (
            <button
                className={`${cell} ${blue}`}
                onClick={() => setIsSara(true)}
            >
                <Player
                    autoplay
                    loop
                    src={cc1}
                    style={{
                        transform: 'scale(0.5)'
                    }}
                ></Player>
            </button>)
    }
}

function SaraSing() {
    return (
        <button className={`${cell}`}>
            <Player
                autoplay
                loop
                src={ss2}
                style={{
                    transform: 'translateY(5px)'
                }}
            ></Player>
        </button>
    )
}

function SaraSingFlip() {
    return (
        <botton className={`${cell}`}>
            <Player
                autoplay
                loop
                src={ss2}
                style={{
                    transformOrigin: 'center bottom',
                    transform: 'scaleX(-1) translateY(5px)'
                }}
            ></Player>
        </botton>
    )
}

function CatShuffle() {
    return (
        <botton className={`${pink} ${cell}`}>
            <Player
                autoplay
                loop
                src={cc2}
                style={{
                    transform: 'scale(0.9)'
                }}
            ></Player>
        </botton>

    )
}

function CatShuffleFlip() {
    return (
        <button className={`${pink} ${cell}`}>
            <Player
                autoplay
                loop
                src={cc2}
                style={{
                    transform: 'scale(-0.9, 0.9)'
                }}
            ></Player>
        </button>
    )
}

function Note1() {
    return (
        <button className={`${cell}`}>
            <Player
                autoplay
                loop
                src={note1}
                style={{
                    transform: 'scale(0.5)',
                    opacity: 0.7,
                }}
            ></Player>
        </button>
    )
}

function Note1Flip() {
    return (
        <button className={`${cell}`}>
            <Player
                autoplay
                loop
                src={note1}
                style={{
                    transform: 'scale(0.5, -0.5)',
                    opacity: 0.7,
                }}
            ></Player>
        </button>
    )
}

function Note2() {

    return (
        <button className={`${cell}`}>
            <Player
                autoplay
                loop
                src={note2}
                style={{
                    transform: 'scale(0.5)',
                    opacity: 0.7,
                }}
            ></Player>
        </button>
    )

}

function Note2Flip() {

    return (
        <button className={`${cell}`}>
            <Player
                autoplay
                loop
                src={note2}
                style={{
                    transform: 'scale(-0.5)',
                    opacity: 0.7,
                }}
            ></Player>
        </button>
    )

}

export default function JamSession() {
    return (
        <div className='row white'>
            <div className={`${jamGrid} narrow`}>
                <Note1 />
                <CatShuffleFlip />
                <Note2 />
                <SaraSing />
                <CenterCell />
                <SaraSingFlip />
                <Note2Flip />
                <CatShuffle />
                <Note1Flip />
            </div>
        </div >
    )
}