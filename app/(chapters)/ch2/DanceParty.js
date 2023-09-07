'use client'

import Image from "next/image";
import { Player } from '@lottiefiles/react-lottie-player';
import { gsap } from "gsap";
import { useEffect } from "react";
import saraDance from '@/public/ch2/ch2_sn03_snail.json';
import catDance from '@/public/ch2/ch2_sn03_cricket.json';
import bg from '@/public/ch2/ch2_sn03_bg.jpg';
import fg from '@/public/ch2/ch2_sn03_front.gif';
import styles from './ch2.module.css';

const { fly } = styles;


export default function DanceParty() {

    useEffect(() => {
        const scene = document.querySelector('#danceScene');
        const flies = document.querySelectorAll('#danceScene li');
        let tl = gsap.timeline({ repeat: -1 });

        flies.forEach((e) => {
            gsap.set(e, {
                left: gsap.utils.random(200, scene.offsetWidth - 200),
                top: gsap.utils.random(200, scene.offsetHeight - 200),
                scale: gsap.utils.random(0.7, 1.5, 0.1),
                opacity: gsap.utils.random(.5, .9, .1),
            })
        })

        flies.forEach((e) => {
            tl.to(e, {
                x: gsap.utils.random(-50, 50),
                y: gsap.utils.random(-70, 30),
                duration: gsap.utils.random(5, 7, .2),
                ease: 'Power0.easeNone'
            }, '<').to(e, {
                opacity: 0,
                x: gsap.utils.random(-10, 10),
                y: gsap.utils.random(-10, 10),
                duration: 0.5,
            }, '>')
        })
    })

    return (
        <div className='row black'>
            <div className='wide layers' id='danceScene'>
                <Image
                    alt="flowers in the background"
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
                    alt="Flowers in the foreground"
                    src={fg}
                    className='onoma'
                    style={{ top: '7%' }}
                />
                <ul id='flies' style={{ listStyle: 'none' }}>
                    <li className={fly}></li>
                    <li className={fly}></li>
                    <li className={fly}></li>
                    <li className={fly}></li>
                    <li className={fly}></li>
                    <li className={fly}></li>
                    <li className={fly}></li>
                    <li className={fly}></li>
                    <li className={fly}></li>
                    <li className={fly}></li>
                    <li className={fly}></li>
                    <li className={fly}></li>
                    <li className={fly}></li>
                    <li className={fly}></li>
                    <li className={fly}></li>
                    <li className={fly}></li>
                    <li className={fly}></li>
                    <li className={fly}></li>
                    <li className={fly}></li>
                    <li className={fly}></li>
                </ul>
            </div>
        </div>
    )
}
