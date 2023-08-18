import styles from "../chapter.module.css";
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

//Utility CSS Classes
const { row, wide, narrow, white, black, layers,
    narration, dialog, hero, panelL, panelM, panelS
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
                </div>
            </article>
        </>
    );
}