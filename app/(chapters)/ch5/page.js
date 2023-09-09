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
        '@/public/ch5/',
        false,
        /\.(gif|png|jpe?g|svg)$/
    )
);

export default function Ch5() {
    return (
        <>
            <div className="row white">
                <ChapterHeader
                    currentChapter={chapters.five}
                    style="chapterHeader"
                />
            </div>
            <article className={sedgwick.className}>
                <div className='row white'>
                    <div className='wide'>
                        <Image alt="Mom and a child hiding in the woods. All leaves have fallen." className='panelL' src={images['./ch5_sn1.jpg']} />
                        <p className='narration'>
                            Autumn has grown old...
                        </p>
                    </div>
                    <div className='wide'>
                        <Image alt="" className='panelM' src={images['./ch5_sn2_pn1.jpg']} />
                        <p className='narration'>
                            ... ...
                        </p>
                        <Image alt="" className='panelM' src={images['./ch5_sn2_pn2.jpg']} />
                        <p className='narration'>
                            ... ...
                        </p>
                    </div>
                    <div className='wide'>
                        <Image alt="" className='panelL' src={images['./ch5_sn2_pn3.jpg']} />
                        <p className='speechBubble right' style={{ left: '20%', top: '20%' }}>
                            Mom! Look!
                        </p>
                        <p className='speechBubble leftTop' style={{ right: '10%', top: '30%', width: '16rem' }}>
                            Ah, snails! They are huddling together to get through the winter.
                        </p>
                    </div>
                    <div className='wide'>
                        <Image alt="" className='panelM' src={images['./ch5_sn3_pn1.jpg']} />
                        <p className='speechBubble rightTop' style={{ display: 'inline-block', position: 'inherit', width: '12rem' }}>
                            Honey, let&rsquo;s leave them alone, okay? They&rsquo;ll wake up when it&rsquo;s warmer.
                        </p>
                    </div>
                    <div className='narrow'>
                        <p className='narration'>
                            ... ...
                        </p>
                    </div>
                    <div className='wide'>
                        <Image alt="" className='panelM' src={images['./ch5_sn3_pn2.jpg']} />
                        <p className='speechBubble leftTop' style={{ display: 'inline-block', position: 'inherit', width: '12rem' }}>
                            Okay. But did you see? There&rsquo;s a dead cricket lying next to them.
                        </p>
                    </div>

                    <div className='wide'>
                        <Image alt="Mom and child keep walking in the woods." className='hero' src={images['./ch5_sn3_pn3.jpg']} />
                        <p className='speechBubble right' style={{ left: '20%', top: '35%', width: '15rem' }}>
                            Do you think they know each other?
                        </p>
                        <p className='speechBubble left' style={{ right: '18%', top: '45%', width: '12rem' }}>
                            Yeah. They must have been friends.
                        </p>
                    </div>
                    <div className='narrow'>
                        <p className='narration'>
                            - The End -
                        </p>
                    </div>
                </div>
            </article>
        </>
    );
}