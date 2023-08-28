'use client'

import { useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

import Image from 'next/image'
import ss1 from '@/public/ch2/ch2_sn02_ss1.json'
import ss2 from '@/public/ch2/ch2_sn02_ss2.json'
import ss3 from '@/public/ch2/ch2_sn02_ss3.png'
import cc1 from '@/public/ch2/ch2_sn02_cc1.png'
import cc2 from '@/public/ch2/ch2_sn02_cc2.png'
import cc3 from '@/public/ch2/ch2_sn02_cc3.png'

import styles from './ch2.module.css'

const { jamGrid, cell, blue, pink, mustard } = styles

export default function JamSession() {
    return (
        <div className='row white'>
            <div
                className={`${jamGrid} narrow`}
            >
                <div className={`${pink} ${cell}`}>
                    <Image
                        alt=""
                        src={cc1}
                        className='panelM'
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
                    <Image
                        alt=""
                        src={cc2}
                        className='panelM'
                    />
                </div>
                <div className={`${mustard} ${cell}`}>
                    lalala
                </div>
                <div className={`${pink} ${cell}`}>
                    <Image
                        alt=""
                        src={cc3}
                        className='panelM'
                    />
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
                            transform: 'translateY(5px)'
                        }}
                    ></Player>
                </div>
                <div className={`${mustard} ${cell}`}>
                    1
                </div>
                <div className={`${blue} ${cell}`}>
                    <Image
                        alt=""
                        src={ss3}
                        className='panelM'
                    />
                </div>
            </div>
        </div >
    )
}