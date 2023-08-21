import Navigation from '/util/Navigation.js'
import PageTurner from '@/util/PageTurner';
import chapters from '/util/chapterInfo.js'
import './chapter.css';

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
                style="navbar"
                navLinks={navLinks}
            />

            {children}

            <div className="row white">
                <PageTurner
                    style="pageTurner"
                />
            </div>
        </>
    )
}