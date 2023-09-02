import { Sedgwick_Ave } from 'next/font/google';

import chapters from "@/util/chapterInfo";
import ChapterHeader from "@/util/ChapterHeader";
import Announcement from '@/util/Announcement';

const sedgwick = Sedgwick_Ave({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
})

export default function Ch3() {
    return (
        <>
            <div className='row white'>
                <ChapterHeader
                    currentChapter={chapters.three}
                    style="chapterHeader"
                />
            </div>
            <article className={sedgwick.className}>

            </article>
            <Announcement />
        </>
    );
}