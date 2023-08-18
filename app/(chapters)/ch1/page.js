import ChapterHeader from "@/util/ChapterHeader";
import styles from "../chapter.module.css";
import { Sedgwick_Ave } from 'next/font/google';
import ChapterLayout from "../layout";
import chapters from "@/util/chapterInfo";

const sedgwick = Sedgwick_Ave({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
})

export default function Ch1() {
    const currentChapter = chapters.one
    console.log(currentChapter);

    return (
        <>
            {/* <ChapterHeader currentChapter={one} /> */}
            <article className={sedgwick.className}>
                <div className={`${styles.row} ${styles.black}`}>
                    <div className={styles.narrow}>
                        <p className={styles.narration}>
                            It was a crispy summer night.<br />
                            The air finally cooled down.<br />
                            The grassland glistened with dewdrops.<br />
                        </p>
                    </div>
                </div>
            </article>
        </>
    );
}