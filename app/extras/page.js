// import { Player } from '@lottiefiles/lottie-player'
import Image from 'next/image'
import ss1 from '@/public/extras/saraStare.png'
import vogue from '@/public/extras/vogueCover.jpg'
import confidential from '@/public/extras/confidential.jpg'

export default function Extras() {
    return (<main>
        <div className="control">
            <button>
                <Image
                    className='icon'
                    alt="icon of the music puzze app"
                    src={ss1}
                    style={{
                        backgroundColor: 'rgb(126, 183, 212)'
                    }}
                />
            </button>

            <button>
                <Image
                    className='icon'
                    alt="icon of the Critter Vogue magazine"
                    src={vogue}
                />

            </button>
            <button>
                <Image
                    className='icon'
                    alt="icon of confidential information"
                    src={confidential}
                />
            </button>

        </div>
        <div className="info">
            <div>
                <h2>Music Puzzle</h2>
                <p>A push-tile game that gets the music jam going!</p>
            </div>
            <button>Go!</button>
        </div>
    </main>)
}