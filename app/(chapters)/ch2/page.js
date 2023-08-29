import { Sedgwick_Ave } from 'next/font/google';

import chapters from "@/util/chapterInfo";
import ChapterHeader from "@/util/ChapterHeader";
import Image from "next/image";
import importAllImages from "@/util/importImages";
import JamSession from './JamSession';

const images = importAllImages(
    require.context(
        '@/public/ch2/',
        false,
        /\.(png|jpe?g|svg)$/
    )
);

const sedgwick = Sedgwick_Ave({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
})

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
                                top: '20%',
                            }}
                        >
                            Wait. Did you just make that sound?
                        </div>
                        <div
                            className="speechBubble right"
                            style={{
                                left: '60%',
                                top: '50%',
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
                        <p className='narration'>Shall we play?</p>
                    </div>
                </div>
                <JamSession />
            </article>


        </>
    );
}