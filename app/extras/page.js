import Announcement from '@/util/Announcement'
import styles from './extras.module.css'

export default function About() {
    return (
        <>
            <nav className={styles.navbar}>
                <a href="/">← The Tale of Sara Snail and Cat Cricket</a>
                <div>Extras</div>
            </nav>

            <div style={{ display: 'block', margin: '10% auto', width: '60%' }}>
                <Announcement />
            </div>
        </>
    )
}