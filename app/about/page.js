import styles from './about.module.css'

export default function About() {
    return (
        <>
            <nav className={styles.navbar}>
                <a href="/">← The Tale of Sara Snail and Cat Cricket</a>
                <div>About</div>
            </nav>
            <h1>About the project</h1>
        </>
    )
}