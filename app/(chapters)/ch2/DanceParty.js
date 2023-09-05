'use client'

import Image from "next/image";
import { Controls, Player } from '@lottiefiles/react-lottie-player';
import saraDance from '@/public/ch2/ch2_sn03_snail.json';
import catDance from '@/public/ch2/ch2_sn03_cricket.json';
import bg from '@/public/ch2/ch2_sn03_bg.jpg';
import fg from '@/public/ch2/ch2_sn03_front.gif';


export default function DanceParty() {
    return (
        <div className='row black'>
            <div className='wide layers'>
                <Image
                    alt=""
                    src={bg}
                    className='hero'
                />
                <Player
                    src={saraDance}
                    autoplay
                    loop
                    style={{
                        position: 'absolute',
                        width: '20%',
                        top: '45%',
                        left: '30%',
                    }}
                />
                <Controls />
                <Player
                    src={catDance}
                    autoplay
                    loop
                    style={{
                        position: 'absolute',
                        width: '28%',
                        top: '30%',
                        left: '40%',
                    }}
                />
                <Image
                    alt=""
                    src={fg}
                    className='onoma'
                    style={{
                        top: '7%',
                    }}
                />
            </div>
        </div>
    )
}