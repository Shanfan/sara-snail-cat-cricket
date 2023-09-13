'use client'
import { useState } from 'react'
import Image from 'next/image'

import ss1 from '@/public/ch2/ch2_sn02_ss1.gif'
import ss2 from '@/public/ch2/ch2_sn02_ss2.gif'
import cc1 from '@/public/ch2/ch2_sn02_cc1.gif'
import cc2 from '@/public/ch2/ch2_sn02_cc2.gif'
import note1 from '@/public/ch2/ch2_sn02_note1.gif'
import note2 from '@/public/ch2/ch2_sn02_note2.gif'

import styles from './puzzle.module.css'

const { jamGrid, cell, emptyCell, plainCell } = styles

export default function JamSession({ jamState, gameover, count, handleSwitchSara, handleMoveClockwise, handleMoveCounterClockwise }) {
    function RenderJamGrid({ jamState, gameover }) {
        return jamState.map((e, i) => {
            switch (e) {
                case 'ss':
                    return <SaraSing key={e} gameover={gameover} onCellClick={() => handleMoveClockwise(e)} />
                    break;
                case 'ssf':
                    return <SaraSingFlip key={e} gameover={gameover} onCellClick={() => handleMoveCounterClockwise(e)} />
                    break;
                case 'cc':
                    return <CatShuffle key={e} gameover={gameover} onCellClick={() => handleMoveClockwise(e)} />
                    break;
                case 'ccf':
                    return <CatShuffleFlip key={e} gameover={gameover} onCellClick={() => handleMoveCounterClockwise(e)} />
                    break;
                case 'n1':
                    return <Note1 key={e} />
                    break;
                case 'n1f':
                    return <Note1Flip key={e} />
                    break;
                case 'n2':
                    return <Note2 key={e} />
                    break;
                case 'n2f':
                    return <Note2Flip key={e} />
                    break;
                case null:
                default:
                    return <div key={i} className={`${emptyCell}`}></div>
            }
        })
    }

    return (

        <div className={`${jamGrid}`}>
            <RenderJamGrid jamState={jamState.slice(0, 4)} gameover={gameover} />
            <CoreCell count={count} switchSara={() => handleSwitchSara()} />
            <RenderJamGrid jamState={jamState.slice(-4)} gameover={gameover} />
        </div>
    )
}

function SaraSing({ onCellClick, gameover }) {
    return (
        <button className={`blue ${cell}`} onClick={onCellClick} disabled={gameover}>
            <Image
                alt=''
                src={ss2}
                style={{
                    transformOrigin: 'center bottom',
                    transform: 'scale(0.8)'
                }}
            />
        </button>
    )
}

function SaraSingFlip({ onCellClick, gameover }) {
    return (
        <button className={`${cell} blue`} onClick={onCellClick} disabled={gameover}>
            <Image
                alt=''
                src={ss2}
                style={{
                    transformOrigin: 'center bottom',
                    transform: 'scale(-0.8, 0.8)'
                }}
            />
        </button>
    )
}

function CatShuffle({ onCellClick, gameover }) {
    return (
        <button className={`pink ${cell}`} onClick={onCellClick} disabled={gameover}>
            <Image
                alt=''
                src={cc2}
                style={{
                    transform: 'scale(0.9)'
                }}
            />
        </button>
    )
}

function CatShuffleFlip({ onCellClick, gameover }) {
    return (
        <button className={`pink ${cell}`} onClick={onCellClick} disabled={gameover}>
            <Image
                alt=''
                src={cc2}
                style={{
                    transform: 'scale(-0.9, 0.9)'
                }}
            />
        </button>
    )
}

function Note1() {
    return (
        <div className={`${plainCell}`}>
            <Image
                alt=""
                src={note1}
                style={{
                    transform: 'scale(0.5)',
                    opacity: 0.7,
                }}
            />
        </div>
    )
}

function Note1Flip() {
    return (
        <div className={`${plainCell}`}>
            <Image
                alt=''
                src={note1}
                style={{
                    transform: 'scale(0.5, -0.5)',
                    opacity: 0.7,
                }}
            />
        </div>
    )
}

function Note2() {

    return (
        <div className={`${plainCell}`}>
            <Image
                alt=''
                src={note2}
                style={{
                    transform: 'scale(0.5)',
                    opacity: 0.7,
                }}
            />
        </div>
    )

}

function Note2Flip() {
    return (
        <div className={`${plainCell}`}>
            <Image
                alt=''
                src={note2}
                style={{
                    transform: 'scale(-0.5)',
                    opacity: 0.7,
                }}
            />
        </div>
    )
}

function CoreCell({ count, switchSara }) {
    if (count % 2 === 0) {
        return (
            <button
                className={`${cell} blue`}
                onClick={switchSara}
            >
                <Image
                    alt=''
                    src={ss1}
                    style={{
                        transformOrigin: 'center bottom',
                        transform: 'scale(0.6)'
                    }}
                />
            </button>)
    } else {
        return (
            <button
                className={`${cell} pink`}
                onClick={switchSara}
            >
                <Image
                    alt=''
                    src={cc1}
                    style={{
                        transform: 'scale(0.5) translateY(30%)'
                    }}
                />
            </button>
        )
    }
}
