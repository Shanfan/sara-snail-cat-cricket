'use client'
import JamSession from './JamSession';
import styles from './puzzle.module.css'
import { useState } from 'react';

const { puzzle, game, instruction } = styles;

export default function Puzzle() {
    const [jamState, setJamState] = useState(Array(8).fill(null));
    const [count, setCount] = useState(0);
    const [result, setResult] = useState([]);
    const [gameover, setGameover] = useState(false);
    const [instructionState, setInstructionState] = useState('gameStart');

    function handleReset() {
        setJamState(Array(8).fill(null));
        setCount(0);
        setResult([]);
        setGameover(false);
        setInstructionState('gameStart');
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

    function switchSara() {
        // Update the instruction when and only when this button is clicked for the first time
        if (count === 0) { setInstructionState('clickOnce') }

        const nextJamState = jamState.slice();
        const currentTwin = count % 2 === 0 ? 'cc' : 'ss';
        const nextTwin = currentTwin === 'cc' ? 'ss' : 'cc';
        const getCurrentTwin = jamState
            .map((e, i) => ({ na: e, po: i }))
            .filter((e) => e.na !== null && e.na.startsWith(currentTwin));

        // Define the rules of swaping between the snail and the cricket
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
        setCount(count + 1);
    }

    function checkResult(state) {
        const newResult = result.slice();
        const notes = state.filter((e) => e !== null && e.startsWith('n') && e.length == 2);

        if (notes.length) {
            notes.forEach((e) => {
                if (!result.includes(e)) {
                    newResult.push(e)
                }
            });
        } else {
            newResult.pop();
        }

        if (newResult.length > 1) {
            setGameover(true);
            const match = newResult.indexOf('n2') - newResult.indexOf('n1')
            setInstructionState(match > 0 ? 'win' : 'lose');
        } else if (!newResult.length) {
            setInstructionState('jam');
        } else {
            setInstructionState('note');
        }

        setResult(newResult);
    }

    return (
        <main className={puzzle}>
            <div className={game}>
                <JamSession
                    jamState={jamState}
                    gameover={gameover}
                    count={count}
                    handleSwitchSara={switchSara}
                    handleMoveClockwise={moveClockwise}
                    handleMoveCounterClockwise={moveCounterClockwise}
                />
            </div>
            <Instruction instructionState={instructionState} handleReset={handleReset} />

        </main>
    )
}

function Instruction({ instructionState, handleReset }) {

    const declareWin = () => {
        return (<>
            <p>Congratulations! You found the song! <s>You can play it on Spotify!</s> Spotify release is coming soon!</p>
            <button className='infoButton'
                onClick={() => { handleReset() }}
            >Play Again</button>
        </>)
    }

    const declareLose = () => {
        return (<>
            <p>You found two chords that might work! But they don’t sound quite right together &#59;&#40;</p>
            <p> Let&rsquo;s try to find the ♪ before the 🎵!</p>
            <button className='infoButton'
                onClick={() => { handleReset() }}
            >Reset Puzzle</button>
        </>)
    }

    switch (instructionState) {
        case 'gameStart':
            return (
                <div className={instruction}>
                    <h2>It’s a jam session!</h2>
                    <div>
                        <p>
                            Sara Snail and Cat Cricket became friends thanks to their shared love for music and dance.
                        </p>
                        <p>
                            Click on the central tile and find out what happens when two friends jam together!
                        </p>
                    </div>
                </div>
            )
            break;

        case 'clickOnce':
            return (
                <div className={instruction}>
                    <h2>Cat Cricket chirps!</h2>
                    <div>
                        <p>
                            There you’ve found the first sound!
                        </p>
                        <p>
                            Keep clicking and see what happens.
                        </p>
                    </div>
                </div>
            )
            break;

        case 'jam':
            return (
                <div className={instruction}>
                    <h2>Solo Improv Time!</h2>
                    <div>
                        <p><i>
                            Tiny musician of the velvet night,<br />
                            I rub my legs to spread soft light,<br />
                            A symphony of chirps, a dance in the air,<br />
                            I share my melody with nature’s flair.<br />
                        </i></p>
                        <p>- By ChatGPT</p>
                        <p><b>💡 Hint:</b> <br />
                            Keep clicking the tiles, and notice how one tile moves clockwise, and the other counter clockwise &#59;&#41;</p>
                    </div>
                </div>
            )
            break;
        case 'note':
            return (
                <div className={instruction}>
                    <h2>Good job!</h2>
                    <div>
                        <p>You found a nice chord. Try find another chord that can riff on top of it.</p>
                    </div>
                </div>
            )
            break;
        case 'lose':
            return (
                <div className={instruction}>
                    <h2>Almost there!</h2>
                    <div>{declareLose()}</div>
                </div>
            )
            break;
        case 'win':
            return (
                <div className={instruction}>
                    <h2>Now we have a party!</h2>
                    <div>{declareWin()}</div>
                </div>
            )
    }
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
