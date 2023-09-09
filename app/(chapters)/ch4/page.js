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
        '@/public/ch4/',
        false,
        /\.(gif|png|jpe?g|svg)$/
    )
);

export default function Ch4() {
    return (
        <>
            <div className='row white'>
                <ChapterHeader
                    currentChapter={chapters.four}
                    style="chapterHeader"
                />
            </div>
            <article className={sedgwick.className}>
                <div className='row white'>
                    <div className='narrow'>
                        <Image alt="" className='panelM' src={images['./ch4_sn01_pn1.jpg']} />
                        <p className='narration'>
                            Time...
                        </p>
                    </div>
                    <div className='narrow'>
                        <Image alt="" className='panelM' src={images['./ch4_sn01_pn2.jpg']} />
                        <p className='narration'>
                            ...moves...
                        </p>
                    </div>
                    <div className='narrow'>
                        <Image alt="" className='panelM' src={images['./ch4_sn01_pn3.jpg']} />
                        <p className='narration'>
                            fast...
                        </p>
                    </div>
                    <div className='narrow'>
                        <p className='narration'>
                            Soon enough -
                        </p>
                    </div>
                    <div className='wide'>
                        <Image alt="Cat Cricket gasps in front of the Critter Vogue magazine cover." className='hero' src={images['./ch4_sn02_pn1.jpg']} />
                        <p className='narration'>
                            September Issue it is.
                        </p>
                    </div>
                    <div className='narrow'>
                        <Image alt="" className='panelM' src={images['./ch4_sn03_pn1.jpg']} />
                        <p className='speechBubble right' style={{ left: '15%', top: 0, width: '12rem' }}>
                            Look! Isn&rsquo;t this your cousin?
                        </p>
                        <p className='speechBubble left' style={{ right: '0', width: '15rem' }}>
                            That&rsquo;s right! She just released a new album.
                        </p>
                    </div>
                    <div className='wide'>
                        <p className='narration'>
                            Shiiaa Crickeeta. <br />The <i>It Girl</i> in the indie music scene.
                        </p>
                        <Image alt="Exclusive interview with Shiia Crickeeta: Love and Loss living with a 90-day life expectancy." className='hero' src={images['./ch4_sn03_pn2.jpg']} />
                        <p className='narration'>
                            What? What did this article say?
                        </p>
                    </div>
                    <div className='narrow'>
                        <Image alt="" className='panelL' src={images['./ch4_sn03_pn3.jpg']} />
                        <p className='speechBubble right' style={{ left: '10%', top: 0 }}>
                            Is it true?
                        </p>
                        <p className='speechBubble leftTop' style={{ right: '10%', bottom: 0 }}>
                            What?
                        </p>
                    </div>
                    <div className='narrow'>
                        <Image alt="" className='panelM' src={images['./ch4_sn03_pn4.jpg']} />
                        <p className='speechBubble left' style={{ right: 0 }}>
                            That you only live for 90 days?
                        </p>
                    </div>
                    <div className='narrow'>
                        <Image alt="" className='panelM' src={images['./ch4_sn03_pn5.jpg']} />
                        <p className='speechBubble right' style={{ left: '20%' }}>
                            More or less.
                        </p>
                    </div>
                    <div className='narrow'>
                        <Image alt="" className='panelM' src={images['./ch4_sn03_pn4.jpg']} />
                        <p className='speechBubble left' style={{ right: '10%' }}>
                            And how old are you now?
                        </p>
                    </div>
                    <div className='narrow'>
                        <Image alt="" className='panelM' src={images['./ch4_sn03_pn6.jpg']} />
                        <p className='speechBubble left' style={{ right: '0', top: 0, width: '18rem' }}>
                            Let me see. I was hatched on that day when...
                        </p>
                    </div>
                    <div className='narrow'>
                        <Image alt="" className='panelL' src={images['./ch4_sn03_pn7.jpg']} />
                        <p className='speechBubble right' style={{ right: '0', top: '20%', width: '18rem' }}>
                            Aww. Stop staring at me like that! It&rsquo;s not as bad as you think!
                        </p>
                    </div>
                    <div className='narrow'>
                        <p className='speechBubble' style={{ display: 'inline-block', position: 'inherit' }}>
                            Most of us don&rsquo;t even live to see the September Issue...<br />
                            See -
                        </p>

                    </div>
                    <div className='wide'>
                        <Image alt="" className='hero' src={images['./ch4_sn03_pn8.jpg']} />
                        <p className='speechBubble right' style={{ left: '15%', bottom: '20%', width: '28rem' }}>
                            My badass cousin was swallowed by a bluebird right after the photoshoot!
                            Mind you that bird was part of the camera crew.
                        </p>
                    </div>
                    <div className='wide'>
                        <p className='narration'>
                            In the mean while,
                        </p>
                        <Image alt="" className='hero' src={images['./ch4_sn04_pn1.jpg']} />
                        <p className='narration'>
                            What was I doing?
                        </p>
                    </div>
                    <div className='narrow'>
                        <Image alt="" className='panelL' src={images['./ch4_sn04_pn2.jpg']} />
                        <p className='speechBubble left' style={{ right: '5%', bottom: '35%', width: '18rem' }}>
                            When I was dragging my feet through the seasons, you&rsquo;ve already lived your whole life!
                        </p>
                    </div>
                </div>
            </article>
        </>
    );
}