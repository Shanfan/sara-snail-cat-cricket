'use client'

import { Player } from '@lottiefiles/react-lottie-player'

import ss1 from '@/public/ch2/ch2_sn02_ss1.json'
import ss2 from '@/public/ch2/ch2_sn02_ss2.json'
import cc1 from '@/public/ch2/ch2_sn02_cc1.json'
import cc3 from '@/public/ch2/ch2_sn02_cc3.json'

import styles from './ch2.module.css'

const { jamGrid, cell, blue, pink, mustard } = styles

export default function JamSession() {
    return (
        <div className='row white'>
            <div
                className={`${jamGrid} narrow`}
            >
                <div className={`${pink} ${cell}`}>
                    <Player
                        autoplay
                        loop
                        src={cc1}

                    />
                </div>
                <div className={`${blue} ${cell}`}>
                    <Player
                        autoplay
                        loop
                        src={ss1}
                        style={{
                            transform: 'translateY(5px)'
                        }}
                    ></Player>
                </div>
                <div className={`${pink} ${cell}`}>
                    <Player
                        autoplay
                        loop
                        src={cc1}
                        style={{
                            transform: 'scale(-1, 1)'
                        }}
                    />
                </div>
                <div className={`${mustard} ${cell}`}>
                    lalala
                </div>
                <div className={`${pink} ${cell}`}>
                    <Player
                        autoplay
                        loop
                        src={cc3}
                        style={{
                            transform: 'scale(0.8)'
                        }}
                    ></Player>
                </div>
                <div className={`${mustard} ${cell}`}>
                    lalala
                </div>
                <div className={`${blue} ${cell}`}>
                    <Player
                        autoplay
                        loop
                        src={ss2}
                        style={{
                            transformOrigin: 'center bottom',
                            transform: 'scale(0.85) translateY(5px)'
                        }}
                    ></Player>
                </div>
                <div className={`${mustard} ${cell}`}>

                </div>
                <div className={`${blue} ${cell}`}>
                    <Player
                        autoplay
                        loop
                        src={ss2}
                        style={{
                            transform: 'translateY(5px) scale(-1, 1)'
                        }}
                    ></Player>
                </div>
            </div>
        </div >
    )
}