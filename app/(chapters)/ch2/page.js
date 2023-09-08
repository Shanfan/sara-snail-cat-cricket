import { Sedgwick_Ave } from 'next/font/google';

import chapters from "@/util/chapterInfo";
import ChapterHeader from "@/util/ChapterHeader";
import Image from "next/image";
import importAllImages from "@/util/importImages";
import DanceParty from './DanceParty';
import Announcement from '@/util/Announcement';
import styles from './ch2.module.css';

const images = importAllImages(
    require.context(
        '@/public/ch2/',
        false,
        /\.(gif|png|jpe?g|svg)$/
    )
);

const sedgwick = Sedgwick_Ave({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
})

const { jamGrid, cell, emptyCell } = styles;

export default function Ch2() {
    return (
        <>
            <div className="row white" >
                <ChapterHeader
                    currentChapter={chapters.two}
                    style="chapterHeader"
                />
            </div>
            <article className={sedgwick.className}>
                <div className="row white" >
                    <div className="wide">
                        <Image
                            alt="Sara Snail demonstrates how to shuffle dance"
                            src={images['./ch2_sn00_pn00.jpg']}
                            className="hero"
                            style={{
                                padding: '5rem 0'
                            }}
                            priority
                        />
                        <div
                            className="speechBubble right"
                            style={{
                                top: 0,
                                left: "5vw",
                                width: "15em",
                            }}
                        >
                            So, shuffling is a very stealth dance move.
                            Once you get into the groove, no one sees your motion,
                            yet you&rsquo;re moving...
                        </div>
                        <div
                            className="speechBubble leftTop"
                            style={{
                                right: "15vw",
                                bottom: "5em",
                            }}
                        >
                            The key is the double slide. <br />
                            Look at my feet. No move, see?
                        </div>
                    </div>
                </div>
                <div className="row white" >
                    <div className="narrow layers">
                        <Image
                            alt="Cat Cricket claps for Sara."
                            src={images['./ch2_sn00_pn01.jpg']}
                            className='panelM'
                        />
                        <div
                            className="speechBubble left"
                            style={{
                                right: '0',
                                top: '0'
                            }}
                        >
                            Whoa! Right! I see no move. <br />
                            I don&rsquo;t even see any foot!
                        </div>
                    </div>
                </div>
                <div className='row white'>
                    <div className='narrow'>
                        <Image
                            alt=""
                            src={images['./ch2_sn01_pn00.jpg']}
                            className='hero'
                        />
                        <div
                            className="speechBubble rightTop"
                            style={{
                                left: '10%',
                                top: '0',
                            }}
                        >
                            Now, you try.
                        </div>
                        <div
                            className="speechBubble left"
                            style={{
                                left: '50%',
                                top: '20%',
                            }}
                        >
                            Like so?
                        </div>
                    </div>
                </div>
                <div className='row white'>
                    <div className='narrow'>
                        <Image
                            alt=""
                            src={images['./ch2_sn01_pn01.jpg']}
                            className='hero'
                        />
                        <div
                            className="speechBubble left"
                            style={{
                                left: '40%',
                                top: '10%',
                            }}
                        >
                            Wait. Did you just make that sound?
                        </div>
                        <div
                            className="speechBubble right"
                            style={{
                                left: '60%',
                                bottom: '0',
                            }}
                        >
                            Oops. Sorry.
                        </div>
                    </div>
                </div>
                <div className='row white'>
                    <div className='narrow'>
                        <Image
                            alt=""
                            src={images['./ch2_sn01_pn02.jpg']}
                            className='hero'
                            style={{ padding: '5rem 0' }}
                        />
                        <div
                            className="speechBubble right"
                            style={{
                                left: '20%',
                                top: '10%',
                            }}
                        >
                            No, don&rsquo;t be! I like it!
                        </div>
                        <div
                            className="speechBubble left"
                            style={{
                                right: '20%',
                                top: '20%',
                            }}
                        >
                            You do?
                        </div>
                    </div>
                </div>
                <div className='row white'>
                    <div className='narrow'>
                        <p className='narration'>Well, maybe we can play together.</p>
                    </div>
                </div>
                <div className='row white'>
                    <div className={`${jamGrid} narrow`}>
                        <Image className={`${cell} panelM`} style={{ gridColumnStart: 2 }} alt="" src={images['./ch2_sn02_ss1.gif']} />
                        <Image className={`${cell} panelM`} style={{ gridRowStart: 2 }} alt="" src={images['./ch2_sn02_note2.gif']} />
                        <Image className={`${cell} panelM`} style={{ gridRowStart: 2 }} alt="" src={images['./ch2_sn02_cc1.gif']} />
                        <Image className={`${cell} panelM`} style={{ gridRowStart: 2 }} alt="" src={images['./ch2_sn02_note2.gif']} />
                        <Image alt="" className={`${cell} panelM`} style={{ gridRowStart: 3, transform: 'scale(-1, 1)' }} src={images['./ch2_sn02_ss2.gif']} />
                        <Image alt="" className={`${cell} panelM`} style={{ gridRowStart: 3 }} src={images['./ch2_sn02_note1.gif']} />
                        <Image alt="" className={`${cell} panelM`} style={{ gridRowStart: 3 }} src={images['./ch2_sn02_ss2.gif']} />
                        <Image alt="" className={`${cell} panelM`} style={{ gridColumnStart: 2 }} src={images['./ch2_sn02_cc2.gif']} />
                    </div>
                </div>
                <div className='row white'>
                    <div className='narrow'>
                        <p className='narration' >Yeeeeaaaasss!!</p>
                        <p className='narration' >Then we have a party...</p>
                    </div>
                </div>
                <div className='row black'>
                    <Image alt="" className='hero' style={{ transform: 'scale(1, -1)', margin: 0, padding: 0 }} src={images['./ch2_sn03.jpg']} />
                </div>
                <DanceParty />
                <div className='row white'>
                    <Image alt="" className='hero' src={images['./ch2_sn03.jpg']} />
                    <div className='narrow'>
                        <Image alt='moon and starts' className='panelL' src={images['./ch2_sn04_pn1.jpg']} />
                        <p className='narration'>What a wonderful evening...</p>
                        <Image alt='Sara and Cat lying together, resting' className='panelL' src={images['./ch2_sn04_pn2.jpg']} />
                    </div>
                </div>


            </article>


        </>
    );
}