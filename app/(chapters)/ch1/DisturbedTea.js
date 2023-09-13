'use client'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

import Image from "next/image";
import mainImg from "@/public/ch1/ch1_sn03_pn03_main.png";
import onomaImg from "@/public/ch1/ch1_sn03_pn03_onoma.png";

export default function DisturbedTea() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let shaken = gsap.timeline({
            defaults: {
                ease: "elastic.out(2, 0.1)",
                yoyo: true,
                repeat: 1,
            }
        });

        gsap.set('#sn03_disturbed_tea .main', { opacity: 0 });
        let ch1Sn3DisturbedTea = shaken.to('#sn03_disturbed_tea', { backgroundColor: '#d0b862' })
            .to('#sn03_disturbed_tea .onoma', { scale: 1.5 }, "<")
            .to('#sn03_disturbed_tea .main', { rotation: 15, opacity: 1 }, "<");

        ScrollTrigger.create({
            animation: ch1Sn3DisturbedTea,
            trigger: '#sn03_disturbed_tea',
            start: 'top 50%',
            end: 'bottom 60%',
            scrub: true,
        });
    })

    return (
        <div className="row white" id="sn03_disturbed_tea" style={{ overflow: 'hidden' }}>
            <div className="narrow layers">
                <Image
                    className="main panelL"
                    alt=""
                    src={mainImg} />
                <Image
                    className="onoma"
                    alt=""
                    src={onomaImg}
                />
            </div>
        </div >
    )

}