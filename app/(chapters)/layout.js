import Navigation from '/util/Navigation.js'
import chapters from '/util/chapterInfo.js'
import styles from './chapter.module.css'

const navLinks = [{ 'name': 'Sara Snail & Cat Cricket', 'href': '/' }, ...chapters];

export default function chapterLayout({ children }) {

    return (
        <>
            <Navigation styles={styles.navbar} navLinks={navLinks} />
            {children}
            <div className={styles.linkGroup}>
                <a>Prev</a>
                <a>Next</a>
            </div>
        </>
    )
}