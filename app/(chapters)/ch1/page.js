import chapters from "@/util/chapterInfo";
import ChapterHeader from "@/util/ChapterHeader";
import styles from "../chapter.module.css";
import { Sedgwick_Ave } from 'next/font/google';
import Image from "next/image";

const sedgwick = Sedgwick_Ave({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
})

export default function Ch1() {

    return (
        <>
            <div className={`${styles.row} ${styles.black}`}>
                <ChapterHeader
                    currentChapter={chapters.one}
                    style={styles.chapterHeader} />
            </div>
            <article className={sedgwick.className}>
                <div className={`${styles.row} ${styles.black}`}>
                    <div className={styles.narrow}>
                        <p className={styles.narration}>
                            It was a crispy summer night.<br />
                            The air finally cooled down.<br />
                            The grassland glistened with dewdrops.<br />
                        </p>
                    </div>
                    <div className={styles.wide}>
                        <Image
                            alt="A drawing of a snail sleeping on top of a leaf. A dewdrop drapes down another grass leaf. Moon hangs in the starry sky."
                            src="../public/ch1/ch1_sn00_pn00.jpg"
                            className={styles.hero}
                        />
                    </div>
                </div>
            </article>
        </>
    );
}