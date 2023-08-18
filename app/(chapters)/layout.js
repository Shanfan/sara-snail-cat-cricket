import Navigation from '/util/Navigation.js'
import PageTurner from '@/util/PageTurner';
import chapters from '/util/chapterInfo.js'
import styles from './chapter.module.css'

const chapterLinks = Object.values(chapters).map(chapter =>
    ({ 'name': chapter.name, 'href': chapter.href }))

const navLinks = [
    { 'name': 'Book Cover', 'href': '/' },
    ...chapterLinks,
    { 'name': 'About', 'href': '/about' }
]

export default function ChapterLayout({ children }) {
    return (
        <>
            <Navigation
                styles={styles.navbar}
                navLinks={navLinks}
            />

            {children}

            <div className={`${styles.row} ${styles.white}`}>
                <PageTurner
                    styles={`${styles.pageTurner}`}
                />
            </div>
        </>
    )
}