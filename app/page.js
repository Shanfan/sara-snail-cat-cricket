import Image from 'next/image'
import { Rock_Salt } from 'next/font/google'
import styles from './page.module.css'
import Navigation from '@/util/Navigation'
import chapters from "@/util/chapterInfo"
import heroImg from '@/public/ch0_title.png'
import Footer from '@/util/Footer'

const rockSalt = Rock_Salt({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

const chapterLinks = Object.values(chapters).map(
  chapter => ({ 'name': chapter.name, 'href': chapter.href })
)

const navLinks = [...chapterLinks, { 'name': 'About', 'href': '/about' }]

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          The Tale of<br />
          <span className={rockSalt.className}>
            Sara Snail & <br />
            Cathy Cricket
          </span>
        </h1>
        <Image
          src={heroImg}
          alt="Cat Cricket talks to Sara Snail"
          fill
          priority
          style={{
            objectFit: 'contain',
            objectPosition: 'right bottom',
          }}
        />
        <h2>
          An Interative Comic Book by Shanfan Huang
        </h2>
      </div>
      <Navigation style={styles.navbar} navLinks={navLinks} currentChapter='' />
      <Footer />
    </main >
  )
}
