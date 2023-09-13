'use client'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

import Image from "next/image";
import mainImg from "@/public/ch1/ch1_sn01_pn02_main.png";
import onomaImg from "@/public/ch1/ch1_sn01_pn02_onoma.png";

export default function DisturbedSleep() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let shaken = gsap.timeline({
            defaults: {
                ease: "elastic.out(2, 0.1)",
                yoyo: true,
                repeat: 1,
            }
        });

        let ch1Sn1DisturbedSleep = shaken.to('#sn01_disturbed_sleep', { backgroundColor: '#fff' })
            .to('#sn01_disturbed_sleep .onoma', { scale: 1.5 }, "<")
            .to('#sn01_disturbed_sleep .main', { rotation: 20 }, "<");

        ScrollTrigger.create({
            animation: ch1Sn1DisturbedSleep,
            trigger: '#sn01_disturbed_sleep',
            start: 'top 75%',
            end: 'top 20%',
            scrub: true,
        });
    })

    return (
        <div className="row black" id="sn01_disturbed_sleep" style={{ overflow: 'hidden' }}>
            <div className="narrow layers" >
                <Image alt=""
                    className="main panelL"
                    src={mainImg} />
                <Image alt=""
                    className="onoma"
                    src={onomaImg} />
            </div>
        </div>
    )

}