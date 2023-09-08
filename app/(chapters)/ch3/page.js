import { Sedgwick_Ave } from 'next/font/google';
import chapters from "@/util/chapterInfo";
import ChapterHeader from "@/util/ChapterHeader";
import Image from "next/image";
import importAllImages from "@/util/importImages";

const sedgwick = Sedgwick_Ave({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
})

const images = importAllImages(
    require.context(
        '@/public/ch3/',
        false,
        /\.(gif|png|jpe?g|svg)$/
    )
);

export default function Ch3() {
    return (
        <>
            <div className='row white'>
                <ChapterHeader
                    currentChapter={chapters.three}
                    style="chapterHeader"
                />
            </div>
            <article className={sedgwick.className}>
                <div className='row white'>
                    <div className='narrow'>
                        <Image alt="Someone walks along a hiking path." className='panelL' src={images['./ch3_sn01_pn1.jpg']} />
                        <p className='narration'>It&rsquo;s the leaf peeping season.</p>
                        <Image alt="a person shooting a photo with their phone" className='panelL' src={images['./ch3_sn01_pn2.jpg']} />
                        <p className='narration'>Humans come to the mountain. <br /> They like to walk around with their devices...</p>
                    </div>
                </div>
                <div className='row white'>
                    <div className='narrow'>
                        <Image alt="" className='panelS' src={images['./ch3_sn02_pn1.jpg']} />
                        <p className='speechBubble right' style={{ left: '30%', top: '1rem' }}>Psssst...</p>
                    </div>
                </div>
                <div className='row white'>
                    <div className='narrow'>
                        <Image alt="" className='panelM' src={images['./ch3_sn02_pn2.jpg']} />
                        <p className='speechBubble left' style={{ right: '30%' }}>What?</p>
                    </div>
                </div>
                <div className='row white'>
                    <div className='narrow'>
                        <p className='speechBubble right'>Don&rsquo;t look now, <br />but we&rsquo;re being photographed.</p>
                        <Image alt="" className='panelL' src={images['./ch3_sn02_pn3.jpg']} />
                        <p className='speechBubble leftTop' style={{ left: '40%', bottom: 0 }}>Okay. Are they getting my good side?</p>
                    </div>
                </div>
                <div className='row white'>
                    <div className='narrow'>
                        <p className='speechBubble left'>You are perfectly symmetrical. </p>
                        <Image alt="" className='panelS' src={images['./ch3_sn03_pn1.jpg']} />
                    </div>
                </div>
                <div className='row white'>
                    <div className='narrow'>
                        <p className='speechBubble right'>Right, right. If you say so. </p>
                        <Image alt="" className='panelS' src={images['./ch3_sn03_pn2.jpg']} />
                    </div>
                </div>
                <div className='row white'>
                    <div className='narrow'>
                        <p className='speechBubble right'>I do. </p>
                        <Image alt="" className='panelS' src={images['./ch3_sn03_pn1.jpg']} />
                    </div>
                </div>
                <div className='row white'>
                    <div className='narrow'>
                        <p className='speechBubble right'>What a pity that this is the spot we are being recorded. </p>
                        <Image alt="" className='panelL' src={images['./ch3_sn03_pn3.jpg']} />
                    </div>
                </div>
                <div className='row white'>
                    <div className='narrow'>
                        <p className='speechBubble right'>What do you mean? </p>
                        <Image alt="" className='panelS' src={images['./ch3_sn03_pn4.jpg']} />
                    </div>
                </div>
                <div className='row white'>
                    <div className='narrow'>
                        <p className='speechBubble left' style={{ right: '20%' }}>... ...</p>
                        <Image alt="" className='panelL' src={images['./ch3_sn02_pn3.jpg']} />
                        <p className='speechBubble rightTop' style={{ left: '20%', bottom: 0 }}>... ??</p>
                    </div>
                </div>
                <div className='row white'>
                    <div className='narrow'>
                        <p className='speechBubble left' style={{ right: '20%', top: '40%' }}>You see...</p>
                        <Image alt="" className='panelL' src={images['./ch3_sn04_pn1.jpg']} />
                    </div>
                </div>
                <div className='row white'>
                    <div className='narrow'>
                        <p className='speechBubble' style={{ right: '20%', width: '20rem' }}>
                            ...the forest is very veautiful today, with the colorful leaves and everything...
                        </p>
                        <p className='speechBubble right' style={{ left: '20%', top: '50%', width: '20rem' }}>
                            Yet we are on this spotty yellow plant. What&rsquo;s up with these spots anyway?
                        </p>
                        <Image alt="" className='panelL' src={images['./ch3_sn04_pn2.jpg']} />
                    </div>
                </div>
                <div className='row white'>
                    <div className='narrow'>
                        <p className='speechBubble left' style={{ left: '20%' }}>
                            I don&rsquo;t know... It&rsquo;s a comfy spot though.
                        </p>
                        <Image alt="" className='panelL' src={images['./ch3_sn02_pn3.jpg']} />
                        <p className='speechBubble rightTop' style={{ right: '10%', bottom: 0, width: '30rem' }}>
                            Come on, don&rsquo;t you see my point? Yellow isn&rsquo;t exactly your best color either.
                        </p>
                    </div>
                </div>
                <div className='row white'>
                    <div className='narrow'>
                        <p className='speechBubble right' style={{ width: '300px', left: '1rem' }}> It took me quite a while to get up here.</p>
                        <Image alt="" className='panelS' src={images['./ch3_sn03_pn1.jpg']} />
                    </div>
                </div>
                <div className='row white'>
                    <div className='narrow'>
                        <Image alt="" className='panelM' src={images['./ch3_sn02_pn2.jpg']} />
                        <p className='speechBubble left' style={{ right: '30%' }}>... ...</p>
                    </div>
                </div>
                <div className='row white'>
                    <div className='narrow'>
                        <p className='speechBubble' style={{ position: 'relative' }}>... ... ... ...</p>
                    </div>
                    <div className='narrow'>
                        <p className='speechBubble' style={{ position: 'relative' }}>Oh.</p>
                    </div>
                    <div className='narrow'>
                        <p className='speechBubble rightTop' style={{ position: 'relative' }}>Right.</p>
                    </div>
                    <div className='narrow'>
                        <Image alt="" className='panelM' src={images['./ch3_sn02_pn1.jpg']} style={{ paddingTop: '5rem' }} />
                        <p className='speechBubble left' style={{ left: '30%', top: '1rem' }}>
                            You can hop over to some more flattering foliage, though.
                            You don&rsquo;t have to stay if you don&rsquo;t want to.
                            Don&rsquo;t let me hold you back.
                        </p>
                    </div>
                    <div className='narrow'>
                        <Image alt="" className='hero' src={images['./ch3_sn05_pn0.jpg']} />
                        <p className='speechBubble right' style={{ left: '40%', top: '50%' }}>
                            I&rsquo;ll stay.
                        </p>
                    </div>
                </div>

            </article>
        </>
    );
}