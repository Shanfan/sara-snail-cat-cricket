import chapterInfo from "@/util/chapterInfo";
import styles from "../chapter.module.css";
import { Rock_Salt, Sedgwick_Ave } from 'next/font/google'

const rockSalt = Rock_Salt({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
})

const sedgwick = Sedgwick_Ave({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
})

export default function Ch1() {
    const { name, title, description } = chapterInfo[0];

    return (
        <>
            <header className={styles.row}>
                <div className={styles.narrow}>
                    <h1>{name}. {title}</h1>
                    <h2>{description}</h2>
                </div>
            </header>
            <article>
                <div className={styles.row + styles.black}>content</div>
            </article>
        </>
    );
}