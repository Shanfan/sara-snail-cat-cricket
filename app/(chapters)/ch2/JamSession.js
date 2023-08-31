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

const { jamGrid, cell, emptyCell, blue, pink } = styles

function SaraSing({ onCellClick }) {
    return (
        <button className={`${cell}`} onClick={onCellClick}>
            <Player
                autoplay
                loop
                src={ss2}
                style={{
                    transformOrigin: 'center bottom',
                    transform: 'scale(0.8)'
                }}
            ></Player>
        </button>
    )
}

function SaraSingFlip({ onCellClick }) {
    return (
        <button className={`${cell}`} onClick={onCellClick}>
            <Player
                autoplay
                loop
                src={ss2}
                style={{
                    transformOrigin: 'center bottom',
                    transform: 'scale(-0.8, 0.8)'
                }}
            ></Player>
        </button>
    )
}

function CatShuffle({ onCellClick }) {
    return (
        <button className={`${pink} ${cell}`} onClick={onCellClick}>
            <Player
                autoplay
                loop
                src={cc2}
                style={{
                    transform: 'scale(0.9)'
                }}
            ></Player>
        </button>
    )
}

function CatShuffleFlip({ onCellClick }) {
    return (
        <button className={`${pink} ${cell}`} onClick={onCellClick}>
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

function CoreCell({ isSara, switchSara }) {
    if (isSara) {
        return (
            <button
                className={`${cell} ${blue}`}
                onClick={switchSara}
            >
                <Player
                    autoplay
                    loop
                    src={ss1}
                    style={{
                        transformOrigin: 'center bottom',
                        transform: 'translateY(2px) scale(0.6)'
                    }}
                ></Player>
            </button>)
    } else {
        return (
            <button
                className={`${cell} ${pink}`}
                onClick={switchSara}
            >
                <Player
                    autoplay
                    loop
                    src={cc1}
                    style={{
                        transform: 'scale(0.5) translateY(30%)'
                    }}
                ></Player>
            </button>
        )
    }
}

export default function JamSession() {

    // jamState defines how the 3x3 grid is rendered, what image to show on each cell
    const [jamState, setJamState] = useState(Array(8).fill(null));

    // isSara defines whether the 3x3 grid is a Sara-led board, or a Cat-lead board
    const [isSara, setIsSara] = useState(true);
    const [coreClickCount, setCoreClickCount] = useState(0);

    function switchSara() {
        setCoreClickCount(coreClickCount + 1);
        if (coreClickCount > 0 && isSara) {
            setJamState([null, null, 'ss', null, null, 'ssf', null, null])
        } else if (coreClickCount > 0 && !isSara) {
            setJamState(['cc', null, null, null, null, null, null, 'ccf'])
        }
        setIsSara(isSara ? false : true);
    }

    function moveClockWise(name) {
        // Find my name's postion in jamState
        let myPosition = jamState.findIndex((e) => e != null && e === name);
        // If my position is between 0 and 1
        //     my position += 1
        // If my position is between 6 and 7
        //    my position -= 1
        // Otherwise: 2 -> 4, 3 -> 0, 4 -> 7, 5 -> 3
        // Update jamSate

        console.log(myPosition);

    }

    function RenderJamGrid({ jamState }) {
        return jamState.map((e, i) => {
            switch (e) {
                case 'ss':
                    return <SaraSing key={e} onCellClick={() => moveClockWise(e)} />
                    break;
                case 'ssf':
                    return <SaraSingFlip key={e} onCellClick={() => moveClockWise(e)} />
                    break;
                case 'cc':
                    return <CatShuffle key={e} onCellClick={() => moveClockWise(e)} />
                    break;
                case 'ccf':
                    return <CatShuffleFlip key={e} onCellClick={() => moveClockWise(e)} />
                    break;
                // case 'n1':
                //     return <Note1 />
                //     break;
                // case 'n1f':
                //     return <Note1Flip />
                //     break;
                // case 'n2':
                //     return <Note2 />
                //     break;
                // case 'n2f':
                //     return <Note2Flip />
                //     break;
                case null:
                default:
                    return <div key={i} className={`${emptyCell}`}></div>
            }
        })
    }

    return (
        <div className='row white'>
            <div className={`${jamGrid} narrow`}>
                <RenderJamGrid jamState={jamState.slice(0, 4)} />
                <CoreCell isSara={isSara} switchSara={() => switchSara()} />
                <RenderJamGrid jamState={jamState.slice(-4)} />
            </div>

            {/* Below is for troubleshoot only. Remove after the UI is done */}
            <p className='narration'>
                CoreClickCount is {coreClickCount} <br />
                isSara is {isSara.toString()} <br />
            </p>
        </div >
    )
}