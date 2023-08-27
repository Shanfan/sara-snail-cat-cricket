import { Sedgwick_Ave } from 'next/font/google';

import chapters from "@/util/chapterInfo";
import ChapterHeader from "@/util/ChapterHeader";

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
        </>
    );
}