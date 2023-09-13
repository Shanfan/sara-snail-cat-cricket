import JamSession from './JamSession';
import styles from './puzzle.module.css'

const { puzzle, game, instruction } = styles;

export default function Puzzle() {
    return (
        <main className={puzzle}>
            <div className={game}>
                <JamSession />
            </div>
            <div className={instruction}>
                <h2>It&rsquo;s a jam session!</h2>
                <div>
                    <p>
                        Sara Snail and Cat Cricket became friends thanks to their shared love for music and dance.
                    </p>
                    <p>
                        Click on the tiles and find out what happens when two friends jam together!
                    </p>
                </div>
            </div>

        </main>
    )
}