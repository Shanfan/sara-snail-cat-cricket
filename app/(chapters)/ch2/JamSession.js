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

const { jamGrid, cell, emptyCell, plainCell, blue, pink } = styles

export default function JamSession() {
    const [jamState, setJamState] = useState(Array(8).fill(null));
    const [count, setcount] = useState(0);
    const [result, setResult] = useState([]);

    function checkResult(state) {

        const newResult = result.slice();
        const note = state.find((e) => e !== null && e.startsWith('n') && e.length == 2);
        console.log('current note is ', note)
        console.log(state);

        if (note && note !== newResult[0]) {
            newResult.push(note);
        } else if (!note) {
            newResult.pop();
        }

        if (newResult.length > 1) {
            const match = newResult.indexOf('n2') - newResult.indexOf('n1')
            console.log(match > 0 ? 'won!' : 'lost!')
        }
        setResult(newResult);
        console.log(result, newResult, 'Keep trying!')
    }

    function switchSara() {
        const nextJamState = jamState.slice();
        const currentTwin = count % 2 === 0 ? 'cc' : 'ss';
        const nextTwin = currentTwin === 'cc' ? 'ss' : 'cc';
        const getCurrentTwin = jamState
            .map((e, i) => ({ na: e, po: i }))
            .filter((e) => e.na !== null && e.na.startsWith(currentTwin));

        if (!getCurrentTwin.length && count > 0) {
            nextJamState[3] = nextTwin;
            nextJamState[4] = nextTwin + 'f';
        } else {
            const swapTwin = getCurrentTwin.map((e) => ({
                ...e,
                na: e.na.replace(currentTwin, nextTwin),
                po: calcClockwisePosition(calcClockwisePosition(e.po))
            }));
            getCurrentTwin.map((e) => { nextJamState[e.po] = null; });
            swapTwin.map((e) => { nextJamState[e.po] = e.na; });
        }
        setJamState(nextJamState);
        setcount(count + 1);
    }

    function moveClockwise(name) {
        const twinName = name.length == 2 ? name + 'f' : name.slice(0, 2);
        const myOldPosition = jamState.findIndex((e) => e == name);
        const twinOldPosition = jamState.findIndex((e) => e == twinName);
        const myNewPosition = calcClockwisePosition(myOldPosition);
        const twinNewPosition = calcClockwisePosition(twinOldPosition);
        const nextJamState = jamState.slice();

        if (name.startsWith('ss') && (myOldPosition === 0 || myOldPosition === 7)) {
            nextJamState[myOldPosition] = 'n1';
            nextJamState[twinOldPosition] = 'n1f';
        } else {
            nextJamState[myOldPosition] = null;
            nextJamState[twinOldPosition] = null;
        }

        nextJamState[myNewPosition] = name;
        nextJamState[twinNewPosition] = twinName;
        setJamState(nextJamState);
        checkResult(nextJamState);

    }

    function moveCounterClockwise(name) {
        const twinName = name.length == 2 ? name + 'f' : name.slice(0, 2);
        const myOldPosition = jamState.findIndex((e) => e == name);
        const twinOldPosition = jamState.findIndex((e) => e == twinName);
        const myNewPosition = calcCounterClockwisePosition(myOldPosition);
        const twinNewPosition = calcCounterClockwisePosition(twinOldPosition);
        const nextJamState = jamState.slice();

        if (name.startsWith('cc') && (myOldPosition == 2 || myOldPosition == 5)) {
            nextJamState[myOldPosition] = 'n2';
            nextJamState[twinOldPosition] = 'n2f';
        } else {
            nextJamState[myOldPosition] = null;
            nextJamState[twinOldPosition] = null;
        }

        nextJamState[myNewPosition] = name;
        nextJamState[twinNewPosition] = twinName;
        setJamState(nextJamState);
        checkResult(nextJamState);
    }

    function RenderJamGrid({ jamState }) {
        return jamState.map((e, i) => {
            switch (e) {
                case 'ss':
                    return <SaraSing key={e} onCellClick={() => moveClockwise(e)} />
                    break;
                case 'ssf':
                    return <SaraSingFlip key={e} onCellClick={() => moveCounterClockwise(e)} />
                    break;
                case 'cc':
                    return <CatShuffle key={e} onCellClick={() => moveClockwise(e)} />
                    break;
                case 'ccf':
                    return <CatShuffleFlip key={e} onCellClick={() => moveCounterClockwise(e)} />
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
        <div className='row white'>
            <div className={`${jamGrid} narrow`}>
                <RenderJamGrid jamState={jamState.slice(0, 4)} />
                <CoreCell count={count} switchSara={() => switchSara()} />
                <RenderJamGrid jamState={jamState.slice(-4)} />
            </div>
        </div >
    )
}



function calcClockwisePosition(n) {
    switch (n) {
        case 0:
        case 1:
            return n + 1;
            break;
        case 6:
        case 7:
            return n - 1;
            break;
        case 2:
            return 4;
            break;
        case 3:
            return 0;
            break;
        case 4:
            return 7;
            break;
        case 5:
            return 3;
    }
}

function calcCounterClockwisePosition(n) {
    switch (n) {
        case 5:
        case 6:
            return n + 1;
            break;
        case 2:
        case 1:
            return n - 1;
            break;
        case 0:
            return 3;
            break;
        case 3:
            return 5;
            break;
        case 4:
            return 2;
            break;
        case 7:
            return 4;
    }
}

function SaraSing({ onCellClick }) {
    return (
        <button className={`${cell} ${blue}`} onClick={onCellClick}>
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
        <button className={`${cell} ${blue}`} onClick={onCellClick}>
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
        <div className={`${plainCell}`}>
            <Player
                autoplay
                loop
                src={note1}
                style={{
                    transform: 'scale(0.5)',
                    opacity: 0.7,
                }}
            ></Player>
        </div>
    )
}

function Note1Flip() {
    return (
        <div className={`${plainCell}`}>
            <Player
                autoplay
                loop
                src={note1}
                style={{
                    transform: 'scale(0.5, -0.5)',
                    opacity: 0.7,
                }}
            ></Player>
        </div>
    )
}

function Note2() {

    return (
        <div className={`${plainCell}`}>
            <Player
                autoplay
                loop
                src={note2}
                style={{
                    transform: 'scale(0.5)',
                    opacity: 0.7,
                }}
            ></Player>
        </div>
    )

}

function Note2Flip() {
    return (
        <div className={`${plainCell}`}>
            <Player
                autoplay
                loop
                src={note2}
                style={{
                    transform: 'scale(-0.5)',
                    opacity: 0.7,
                }}
            ></Player>
        </div>
    )
}

function CoreCell({ count, switchSara }) {
    if (count % 2 === 0) {
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
