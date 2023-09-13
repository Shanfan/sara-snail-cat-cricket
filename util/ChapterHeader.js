import { Rock_Salt } from 'next/font/google'

const rockSalt = Rock_Salt({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
})

export default function ChapterHeader({ currentChapter }) {

    const { name, title, description } = currentChapter;

    return (
        <header className="chapterHeader">
            <div>
                <h1 className={rockSalt.className}>{name}. {title}</h1>
                <h2>{description}</h2>
            </div>
        </header>
    )
}