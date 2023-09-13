import styles from "./ch1.module.css";
import { Sedgwick_Ave } from 'next/font/google';

import chapters from "@/util/chapterInfo";
import ChapterHeader from "@/util/ChapterHeader";
import DisturbedSleep from "./DisturbedSleep";
import DisturbedTea from "./DisturbedTea";
import FirstContact from "./FirstContact";

import Image from "next/image";
import importAllImages from "@/util/importImages";

const images = importAllImages(
    require.context(
        '@/public/ch1/',
        false,
        /\.(png|jpe?g|svg)$/
    )
);

const sedgwick = Sedgwick_Ave({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
})

const { float, flare } = styles

export default function Ch1() {

    return (
        <>
            <div className="row black">
                <ChapterHeader
                    currentChapter={chapters.one}
                />
            </div>
            <article className={sedgwick.className}>
                <div className="row black">
                    <div className="narrow">
                        <p className="narration">
                            It was a crispy summer night.<br />
                            The air finally cooled down. <br />
                            The vast grassland glistened under the moonlight. <br />
                        </p>
                    </div>
                    <div className="wide">
                        <Image
                            alt="A snail sleeps on top of a leaf. A dewdrop drapes down from a grass leaf. Moon hangs in the starry sky."
                            src={images['./ch1_sn00_pn00.jpg']}
                            className="hero"
                            priority
                        />
                    </div>
                    <div className="narrow">
                        <p className="narration">
                            Sara Snail turns in early, as usual.
                        </p>
                        <Image
                            alt="She blowed off the candle"
                            className="panelM"
                            src={images["./ch1_sn01_pn00.png"]}
                        />
                        <Image
                            alt="and lied down in bed comfortably"
                            className="panelM"
                            src={images["./ch1_sn01_pn01.png"]} />
                        <p className="narration">
                            As you can tell, she&rsquo;s made her home so comfy
                            that if I were her I would turn in early every night too.
                        </p>
                    </div>

                    <DisturbedSleep />

                    <div className="row black">
                        <div className="narrow">
                            <Image alt=""
                                className="panelM"
                                src={images["./ch1_sn01_pn03.png"]} />
                            <Image alt=""
                                className="panelM"
                                src={images["./ch1_sn01_pn04.png"]} />
                        </div>
                    </div>
                </div>
                <div className="row white">
                    <div className="narrow">
                        <p className="narration">In spite of some occasional disturbances,
                            Sara Snail generally lives a stress-free life.</p>
                    </div>
                    <div className="wide layers">
                        <Image
                            className="hero"
                            src={images['./ch1_sn02_pn00.jpg']}
                            alt="A sunny day has begun." />
                        <Image
                            className="hero"
                            src={images['./ch1_sn02_pn00_shine.svg']}
                            alt="lens flare"
                            style={{
                                position: 'absolute',
                                top: '45%',
                                left: '67%',
                                animation: `${flare} 5s alternate infinite linear`
                            }}
                        />
                    </div>
                </div>

                <div className="row white">
                    <div className="narrow">
                        <p className="narration">She wakes up in the morning,</p>
                        <Image className="panelM" alt="" src={images['./ch1_sn03_pn00.png']} />
                        <p className="narration">...makes her tea,</p>
                        <Image className="panelM" alt="" src={images['./ch1_sn03_pn01.png']} />
                        <p className="narration">...and enjoys a moment of peace before her day starts.</p>
                        <Image className="panelM" alt="" src={images['./ch1_sn03_pn02.png']} />
                    </div>
                </div>

                <DisturbedTea />

                <div className="row white">
                    <div className="narrow">
                        <p className="narration">This particular morning,<br /> Sara Snail can&rsquo;t take it any more.</p>
                        <Image className="panelM" alt="" src={images['./ch1_sn03_pn04.png']} />
                        <p className="narration">She peeps out of her house.</p>
                        <Image className="panelS" alt="" src={images['./ch1_sn04_pn00.jpg']} />
                        <Image className="panelS" alt="" src={images['./ch1_sn04_pn01.jpg']} />
                        <Image className="panelS" alt="" src={images['./ch1_sn04_pn02.jpg']} />
                    </div>
                </div>

                <div className="row white">
                    <div className="narrow">
                        <Image className="panelL" alt="" src={images['./ch1_sn05_pn00.jpg']} />
                        <div
                            className="speechBubble left"
                            style={{
                                top: '20%',
                                left: '40%'
                            }}
                        >
                            Hello? Excuse you?
                        </div>
                    </div>
                </div >


                <div className="row white">
                    <div className="narrow">
                        <Image
                            className="panelM"
                            alt=""
                            src={images['./ch1_sn05_pn01.png']}
                            style={{
                                animation: `${float} 0.5s alternate infinite ease-in-out`
                            }}
                        />
                        <div className="speechBubble right"
                            style={{
                                top: '5%',
                                left: '24%',
                            }}
                        >
                            Oh, hi!
                        </div>
                        <div
                            className="speechBubble leftTop"
                            style={{
                                bottom: 0,
                                left: '60%',
                            }}
                        >
                            I&rsquo;m sorry. <br /> Did I disturb you?
                        </div>
                    </div >
                </div >

                <FirstContact />

                <div className="row white" id="sn07">
                    <div
                        className="narrow layers"
                        style={{
                            height: '300px',
                            maxWidth: '600px',
                        }}
                    >
                        <Image
                            className="panelM"
                            alt=""
                            src={images['./ch1_sn07_pn00.jpg']}
                            style={{
                                position: 'absolute',
                                left: 0,
                                bottom: 0,
                            }}
                        />
                        <div
                            className="speechBubble "
                            style={{
                                right: '1.3em',
                                top: '1.5em',
                            }}
                        >
                            Oh Thanks! I do love my home.<br />
                            I&rsquo;m sorry you don&rsquo;t have one.
                        </div>
                        <div
                            className="speechBubble left"
                            style={{
                                right: '0',
                                top: '6em',
                            }}
                        >
                            Let&rsquo;s talk about shuffling then!
                        </div>
                    </div >

                    <div
                        className="narrow layers"
                        style={{
                            height: '460px',
                            maxWidth: '600px',
                        }}
                    >
                        <Image
                            className="panelM"
                            alt=""
                            src={images['./ch1_sn07_pn01.jpg']}
                            style={{
                                position: 'absolute',
                                right: 0,
                                bottom: 0,
                            }}
                        />
                        <div
                            className="speechBubble right"
                            style={{
                                left: '0',
                                top: '30px',
                                maxWidth: '15em'
                            }}
                        >
                            Sure! Tell me about shuffling~ I love gymnastics!
                            But we ran out of space. We&rsquo;ll have to turn to the next page.
                        </div>
                    </div >
                </div>
            </article >
        </>
    );
}