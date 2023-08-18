import chapterInfo from "@/util/chapterInfo";
import styles from "../app/(chapters)/chapter.module.css";
import { Rock_Salt } from 'next/font/google'

const rockSalt = Rock_Salt({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
})

export default function ChapterHeader({ currentChapter }) {
    // currentChapter should be an integer between 0 and 4

    const { name, title, description } = chapterInfo[currentChapter];

    return (
        <header className={styles.row}>
            <div className={styles.narrow}>
                <h1 className={rockSalt.className}>{name}. {title}</h1>
                <h2>{description}</h2>
            </div>
        </header>
    )
}