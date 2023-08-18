import styles from "../chapter.module.css";
import './ch1.module.css';
import { Sedgwick_Ave } from 'next/font/google';
import Image from "next/image";

import chapters from "@/util/chapterInfo";
import ChapterHeader from "@/util/ChapterHeader";
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

const { row, wide, narrow, white, black, layers, main, onoma,
    narration, speechBubble, hero, panelL, panelM, panelS
} = styles

export default function Ch1() {
    return (
        <>
            <div className={`${row} ${black}`}>
                <ChapterHeader
                    currentChapter={chapters.one}
                    style={styles.chapterHeader} />
            </div>
            <article className={sedgwick.className}>
                <div className={`${row} ${black}`}>
                    <div className={narrow}>
                        <p className={narration}>
                            It was a crispy summer night.
                            The air finally cooled down.
                            The grassland glistened with dewdrops.
                        </p>
                    </div>
                    <div className={wide}>
                        <Image
                            alt="A snail sleeps on top of a leaf. A dewdrop drapes down from a grass leaf. Moon hangs in the starry sky."
                            src={images['./ch1_sn00_pn00.jpg']}
                            className={hero}
                            priority
                        />
                    </div>
                    <div className={narrow}>
                        <p className={narration}>
                            Sara Snail turns in early, as usual.
                        </p>
                        <Image
                            alt="She blowed off the candle"
                            className={panelM}
                            src={images["./ch1_sn01_pn00.png"]}
                        />
                        <Image
                            alt="and lied down in bed comfortably"
                            className={panelM}
                            src={images["./ch1_sn01_pn01.png"]} />
                        <p className={narration}>
                            As you can tell, she&rsquo;s made her home so comfy
                            that if I were her I would turn in early every night too.
                        </p>
                    </div>

                    {/* This block need to be a custom component */}
                    <div className={`${row} ${black}`} id="sn01_disturbed_sleep">
                        <div className={`${narrow} ${layers}`}>
                            <Image alt=""
                                className={`${main} ${panelL}`}
                                src={images["./ch1_sn01_pn02_main.png"]} />
                            <Image alt=""
                                className={onoma}
                                src={images["./ch1_sn01_pn02_onoma.png"]} />
                        </div>
                    </div>

                    <div className={`${row} ${black}`}>
                        <div className={narrow}>
                            <Image alt=""
                                className={panelM}
                                src={images["./ch1_sn01_pn03.png"]} />
                            <Image alt=""
                                className={panelM}
                                src={images["./ch1_sn01_pn04.png"]} />
                        </div>
                    </div>
                </div>
                <div className={`${row} ${white}`}>
                    <div className={narrow}>
                        <p className={narration}>In spite of some occasional disturbances,
                            Sara Snail generally lives a stress-free life.</p>
                    </div>
                    <div className={`${wide} ${layers}`}>
                        <Image className={hero} src={images['./ch1_sn02_pn00.jpg']} alt="A sunny day has begun." />
                        {/* <Image className={hero} id="ch1_sn02_flare" src={images['./ch1_sn02_pn00_shine.png']} alt="lens flare" /> */}
                    </div>
                </div>

                <div className={`${row} ${white}`}>
                    <div className={narrow}>
                        <p className={narration}>She wakes up in the morning,</p>
                        <Image className={panelM} alt="" src={images['./ch1_sn03_pn00.png']} />
                        <p className={narration}>...makes her tea,</p>
                        <Image className={panelM} alt="" src={images['./ch1_sn03_pn01.png']} />
                        <p className={narration}>...and enjoys a moment of peace before her day starts.</p>
                        <Image className={panelM} alt="" src={images['./ch1_sn03_pn02.png']} />
                    </div>
                </div>




                <div className={`${row} ${white}`} id="sn03_disturbed_tea">
                    <div className={`${narrow} ${layers}`}>
                        <Image className={`${main} ${panelL}`} alt="" src={images['./ch1_sn03_pn03_main.png']} />
                        <Image className={onoma} alt="" src={images['./ch1_sn03_pn03_onoma.png']} />
                    </div>
                </div >





                <div className={`${row} ${white}`}>
                    <div className={narrow}>
                        <p className={narration}>This particular morning, Sara Snail can&rsquo;t take it any more.</p>
                        <Image className={panelM} alt="" src={images['./ch1_sn03_pn04.png']} />
                        <p className={narration}>She peeps out of her house.</p>
                        <Image className={panelS} alt="" src={images['./ch1_sn04_pn00.jpg']} />
                        <Image className={panelS} alt="" src={images['./ch1_sn04_pn01.jpg']} />
                        <Image className={panelS} alt="" src={images['./ch1_sn04_pn02.jpg']} />
                    </div>
                </div>

                <div className={`${row} ${white}`}>
                    <div className={narrow}>
                        <Image className={panelL} alt="" src={images['./ch1_sn05_pn00.jpg']} />
                        <div className={speechBubble} id="ch1_sn05_pn00">
                            Hello? Excuse you?
                        </div>
                    </div>
                </div >


                <div className={`${row} ${white}`}>
                    <div className={narrow}>
                        <Image id="cathy-debut" className={panelM} alt="" src={images['./ch1_sn05_pn01.png']} />
                        <div className={speechBubble} id="ch1_sn05_pn01_1">
                            Oh, hi!
                        </div>
                        <div className={speechBubble} id="ch1_sn05_pn01_2">
                            I&rsquo;m sorry. Did I disturb you?
                        </div>
                    </div >
                </div >



                <div className={`${row} ${white} ${narrow}`} id="sn06_first_contact" >
                    <Image className={hero} alt="" src={images['./ch1_sn06_pn00.jpg']} />
                    <div className={speechBubble} id="ch1_sn06_pn00_2">
                        VERY MUCH!
                    </div>
                    <div className={speechBubble} id="ch1_sn06_pn00_3">
                        Hopping. Stomping. Springing from place to place...
                        Do you not shuffle?
                        Do you not attend your household?
                    </div>
                    <div className={speechBubble} id="ch1_sn06_pn00_4">
                        Well. I don&rsquo;t have a household.
                        Yours is amazing though.
                        I wish I had one like that.
                    </div>
                </div>

                <div className={`${row} ${white}`} id="sn07">
                    <div className={`${narrow} ${layers}`} id="ch1_sn07_pn00">
                        <Image className={panelM} alt="" src={images['./ch1_sn07_pn00.jpg']} />
                        <div className={speechBubble}>
                            Oh Thanks! I do love my home.
                            I&rsquo;m sorry you don&rsquo;t have one.
                        </div>
                        <div className={speechBubble}>
                            Let&rsquo;s talk about shuffling then!
                        </div>
                    </div >

                    <div className={`${narrow} ${layers}`} id="ch1_sn07_pn01">
                        <Image className={panelM} alt="" src={images['./ch1_sn07_pn01.jpg']} />
                        <div className={speechBubble}>
                            Sure! Tell me about shuffling~ I love gymnastics!
                            But we ran out of space. We&rsquo;ll have to turn to the next page.
                        </div>
                    </div >
                </div>
            </article>
        </>
    );
}