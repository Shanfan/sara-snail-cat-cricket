import PageTurner from '@/util/PageTurner';
import Footer from '@/util/Footer';
import MobileNav from '@/util/MobileNav';
import './chapter.css';

export default function ChapterLayout({ children }) {
    return (
        <>
            <MobileNav />

            {children}

            <div className="row white">
                <PageTurner
                    style="pageTurner"
                />
            </div>
            <Footer />
        </>
    )
}