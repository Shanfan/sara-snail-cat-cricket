import chapters from "@/util/chapterInfo";
import ChapterHeader from "@/util/ChapterHeader";
import Announcement from "@/util/Announcement";

export default function Ch5() {
    return (
        <>
            <div className="row white">
                <ChapterHeader
                    currentChapter={chapters.five}
                    style="chapterHeader"
                />

            </div>
            <Announcement />
        </>
    );
}