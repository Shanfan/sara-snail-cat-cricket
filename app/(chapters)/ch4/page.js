import chapters from "@/util/chapterInfo";
import ChapterHeader from "@/util/ChapterHeader";
import Announcement from '@/util/Announcement';

export default function Ch4() {
    return (
        <>
            <div className='row white'>
                <ChapterHeader
                    currentChapter={chapters.four}
                    style="chapterHeader"
                />
            </div>
            <Announcement />
        </>
    );
}